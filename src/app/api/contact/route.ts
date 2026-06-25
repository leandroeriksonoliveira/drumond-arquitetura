import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.consent) {
      return NextResponse.json(
        { error: "Consentimento LGPD obrigatório" },
        { status: 400 },
      );
    }

    const required = ["name", "email", "projectType", "message"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Campo obrigatório: ${field}` },
          { status: 400 },
        );
      }
    }

    // Log for server-side record (replace with email service in production)
    console.info("[Contact]", {
      name: body.name,
      email: body.email,
      projectType: body.projectType,
      timestamp: new Date().toISOString(),
      controller: siteConfig.professional,
    });

    // Optional: integrate Resend, SendGrid, etc. via CONTACT_WEBHOOK_URL
    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
