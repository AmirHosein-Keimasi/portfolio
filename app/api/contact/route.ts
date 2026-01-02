import { NextRequest, NextResponse } from "next/server";
import { contactValidationSchema } from "@/lib/validation/contact-validation";

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 requests per minute
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate
    await contactValidationSchema.validate(body, { abortEarly: false });

    // TODO: Send email or save to database
    // Example: await sendEmail(body);
    // Example: await saveToDatabase(body);

    return NextResponse.json(
      { message: "پیام شما با موفقیت ارسال شد!" },
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
          error: "اطلاعات وارد شده معتبر نیست",
          details: (error as { errors: string[] }).errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "خطایی در ارسال پیام رخ داد. لطفا دوباره تلاش کنید." },
      { status: 500 }
    );
  }
}

