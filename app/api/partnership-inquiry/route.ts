// app/api/partnership-inquiry/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize Resend dynamically inside the request handler
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { fullName, email, organization, category, message } = body;

    // Server-side validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'DJS Helios Website <onboarding@resend.dev>',
      to: ['parasbhambhani07@gmail.com'],
      replyTo: email,
      subject: `New Partnership Inquiry: ${category} - ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #333; background-color: #0f172a; color: #f8fafc; border-radius: 8px;">
          <h2 style="color: #f59e0b; margin-top: 0;">New Partnership Inquiry</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
          <p><strong>Organisation / Company:</strong> ${organization || 'Not provided'}</p>
          <p><strong>Support Category:</strong> <span style="color: #f59e0b; font-weight: bold;">${category}</span></p>
          <hr style="border-color: #334155; margin: 20px 0;" />
          <p><strong>Message / Proposal:</strong></p>
          <p style="background-color: #1e293b; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #cbd5e1;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend execution error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}