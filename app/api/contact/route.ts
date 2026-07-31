import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;
  const requiredFields = ["name", "email", "company", "topic", "message"];

  for (const field of requiredFields) {
    if (!body[field] || !String(body[field]).trim()) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }
  }

  const email = String(body.email);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    message: "Thanks for reaching out. A DCS advisor will review your message and follow up shortly.",
  });
}
