import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ApplicationPayload = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
};

type TelegramResponse = {
  ok?: boolean;
  description?: string;
  error_code?: number;
};

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeEnvValue(value: string | undefined): string {
  if (!value) {
    return "";
  }

  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function isPhoneValid(phone: string): boolean {
  return /^[+\d\s()-]{7,20}$/.test(phone);
}

function getTelegramErrorMessage(response: TelegramResponse): string {
  const description = response.description?.toLowerCase() ?? "";

  if (description.includes("chat not found") || description.includes("user not found")) {
    return "Telegram не нашел чат. Проверьте TELEGRAM_CHAT_ID: для группы и канала он обычно начинается с -100.";
  }

  if (description.includes("bot was blocked by the user")) {
    return "Бот заблокирован получателем. Откройте диалог с ботом в Telegram и нажмите Start.";
  }

  if (description.includes("bot is not a member of the channel chat")) {
    return "Бот не добавлен в канал или группу. Добавьте его в чат и выдайте права на отправку сообщений.";
  }

  if (description.includes("have no rights to send a message")) {
    return "У бота нет прав на отправку сообщений в этот чат. Проверьте права администратора и разрешения канала/группы.";
  }

  if (description.includes("group chat was upgraded to a supergroup chat")) {
    return "У группы изменился chat ID после преобразования в supergroup. Нужно сохранить новый TELEGRAM_CHAT_ID.";
  }

  if (description.includes("unauthorized")) {
    return "TELEGRAM_BOT_TOKEN отклонен Telegram. Проверьте, что токен скопирован полностью и без лишних символов.";
  }

  return "Не удалось отправить заявку. Попробуйте еще раз.";
}

export async function POST(req: Request) {
  let payload: ApplicationPayload;

  try {
    payload = (await req.json()) as ApplicationPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Некорректный формат запроса." },
      { status: 400 }
    );
  }

  const name = normalizeText(payload.name);
  const phone = normalizeText(payload.phone);
  const website = normalizeText(payload.website);

  const token = normalizeEnvValue(process.env.TELEGRAM_BOT_TOKEN);
  const chatId = normalizeEnvValue(process.env.TELEGRAM_CHAT_ID);

  if (!token || !chatId) {
    console.error("Telegram env vars are missing", {
      hasToken: Boolean(token),
      hasChatId: Boolean(chatId),
    });

    return NextResponse.json(
      { success: false, error: "Сервер не настроен для отправки заявок." },
      { status: 500 }
    );
  }

  if (!name) {
    return NextResponse.json(
      { success: false, error: "Введите имя." },
      { status: 400 }
    );
  }

  if (!phone || !isPhoneValid(phone)) {
    return NextResponse.json(
      { success: false, error: "Введите корректный номер телефона." },
      { status: 400 }
    );
  }

  const text = [
    "🚕 Новая заявка с сайта",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Сайт: ${website || "не указан"}`,
    `Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Minsk" })}`,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    });

    const telegramResponse = (await res.json()) as TelegramResponse;

    if (!res.ok || !telegramResponse.ok) {
      const errorMessage = getTelegramErrorMessage(telegramResponse);

      console.error("Telegram sendMessage failed", {
        status: res.status,
        statusText: res.statusText,
        description: telegramResponse.description,
        errorCode: telegramResponse.error_code,
        chatIdPreview: chatId.slice(0, 6),
      });

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram request failed", error);

    return NextResponse.json(
      { success: false, error: "Сервис отправки временно недоступен." },
      { status: 502 }
    );
  }
}