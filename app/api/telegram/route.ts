import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!TOKEN || !CHAT_ID) {
    return NextResponse.json({ success: false, error: "Нет токена или CHAT_ID" });
  }

  const text = `Новая заявка 🚕
Имя: ${name}
Телефон: ${phone}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ success: false, error: errText });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) });
  }
}
