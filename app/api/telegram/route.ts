import { NextResponse } from "next/server";

type ApplicationPayload = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isPhoneValid(phone: string) {
  return /^[+\d\s()-]{7,20}$/.test(phone);
}

export async function POST(req: Request) {
  let payload: ApplicationPayload;

  try {
    payload = (await req.json()) as ApplicationPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Некорректный формат запроса." },
      { status: 400 },
    );
  }

  const name = normalizeText(payload.name);
  const phone = normalizeText(payload.phone);
  const website = normalizeText(payload.website);

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return NextResponse.json(
      { success: false, error: "Сервер временно не настроен для приема заявок." },
      { status: 500 },
    );
  }

  if (website) {
    return NextResponse.json({ success: true });
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { success: false, error: "Укажите имя длиной от 2 до 80 символов." },
      { status: 400 },
    );
  }

  if (!isPhoneValid(phone)) {
    return NextResponse.json(
      { success: false, error: "Укажите корректный номер телефона." },
      { status: 400 },
    );
  }

  const text = [
    "Новая заявка с сайта",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Minsk" })}`,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Telegram sendMessage failed", {
        status: res.status,
        statusText: res.statusText,
      });
      return NextResponse.json(
        { success: false, error: "Не удалось отправить заявку. Попробуйте еще раз." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram request failed", error);
    return NextResponse.json(
      { success: false, error: "Сервис отправки временно недоступен." },
      { status: 502 },
    );
  }
}
