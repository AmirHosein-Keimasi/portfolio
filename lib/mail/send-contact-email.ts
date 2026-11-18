import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/validation/contact-validation";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactFormValues) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || user;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

  if (!host || !user || !pass || !toEmail) {
    throw new Error("SMTP configuration is missing in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const safeName = escapeHtml(data.fullname.trim());
  const safeEmail = escapeHtml(data.email.trim());
  const safeSubject = escapeHtml(data.subject.trim());
  const safeMessage = escapeHtml(data.message.trim()).replace(/\n/g, "<br />");
  const timestamp = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Tehran",
  }).format(new Date());

  const html = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:24px;background-color:#0b1120;font-family:Tahoma,Arial,sans-serif;direction:rtl;color:#e2e8f0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;margin:0 auto;background-color:#0f172a;border-radius:16px;overflow:hidden;border:1px solid #1e293b;">
    <tr>
      <td style="padding:28px 28px 20px;background:linear-gradient(135deg,#059669,#0284c7);">
        <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.85);letter-spacing:0.5px;">پیام جدید از فرم تماس وب‌سایت</p>
        <h1 style="margin:8px 0 0;font-size:20px;color:#ffffff;font-weight:700;">${safeSubject}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#1e293b;border-radius:12px;padding:16px;margin-bottom:20px;">
          <tr>
            <td style="padding:6px 0;font-size:13px;color:#94a3b8;width:110px;">فرستنده:</td>
            <td style="padding:6px 0;font-size:14px;color:#f8fafc;font-weight:600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:13px;color:#94a3b8;">ایمیل:</td>
            <td style="padding:6px 0;font-size:14px;color:#34d399;direction:ltr;text-align:right;">
              <a href="mailto:${safeEmail}" style="color:#34d399;text-decoration:none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:13px;color:#94a3b8;">تاریخ ارسال:</td>
            <td style="padding:6px 0;font-size:13px;color:#cbd5e1;">${timestamp}</td>
          </tr>
        </table>

        <div style="margin-bottom:24px;">
          <p style="margin:0 0 10px;font-size:13px;color:#94a3b8;font-weight:600;">متن پیام:</p>
          <div style="background-color:#0b1120;border:1px solid #334155;border-radius:12px;padding:18px;font-size:14px;line-height:1.9;color:#f1f5f9;">
            ${safeMessage}
          </div>
        </div>

        <div style="text-align:center;">
          <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(data.subject.trim())}" style="display:inline-block;padding:12px 24px;background-color:#10b981;color:#ffffff;text-decoration:none;border-radius:10px;font-size:14px;font-weight:600;">
            پاسخ به ${safeName}
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 28px;border-top:1px solid #1e293b;text-align:center;font-size:12px;color:#64748b;">
        ارسال شده از پورتفولیو امیرحسین کیماسی •
        <a href="${siteUrl}" style="color:#34d399;text-decoration:none;">${siteUrl}</a>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = [
    `پیام جدید از وب‌سایت ${siteUrl}`,
    `--------------------------------`,
    `نام و نام خانوادگی: ${data.fullname.trim()}`,
    `ایمیل: ${data.email.trim()}`,
    `عنوان: ${data.subject.trim()}`,
    `تاریخ: ${timestamp}`,
    `--------------------------------`,
    `متن پیام:`,
    data.message.trim(),
  ].join("\n");

  await transporter.sendMail({
    from: `"پورتفولیو امیرحسین کیماسی" <${user}>`,
    to: toEmail,
    replyTo: `"${data.fullname.trim().replace(/"/g, "")}" <${data.email.trim()}>`,
    subject: `[پورتفولیو] ${data.subject.trim()} — ${data.fullname.trim()}`,
    text,
    html,
  });
}
