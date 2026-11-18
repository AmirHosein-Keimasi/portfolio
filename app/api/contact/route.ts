import { NextRequest, NextResponse } from "next/server";
import {
  contactValidationSchema,
  type ContactFormValues,
} from "@/lib/validation/contact-validation";
import { sendContactEmail } from "@/lib/mail/send-contact-email";

export const runtime = "nodejs";

// Simple in-memory rate limiter (5 requests per 5 minutes per IP)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip =
      (forwardedFor ? forwardedFor.split(",")[0].trim() : null) ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً چند دقیقه دیگر دوباره تلاش کنید.",
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as Partial<ContactFormValues>;

    // Silent honeypot check for spam bots
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { message: "پیام شما با موفقیت ارسال شد!" },
        { status: 200 }
      );
    }

    const validated = (await contactValidationSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    })) as ContactFormValues;

    await sendContactEmail(validated);

    return NextResponse.json(
      {
        message:
          "پیام شما با موفقیت ارسال شد! در سریع‌ترین زمان ممکن پاسخ خواهم داد.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "ValidationError" &&
      "errors" in error
    ) {
      return NextResponse.json(
        {
          error: "لطفاً تمام فیلدها را به‌درستی تکمیل کنید.",
          details: (error as { errors: string[] }).errors,
        },
        { status: 400 }
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "خطایی در ارسال ایمیل رخ داد. لطفاً دوباره تلاش کنید یا مستقیماً ایمیل بزنید.",
      },
      { status: 500 }
    );
  }
}
