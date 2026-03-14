"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  website: "",
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        setError(data.error ?? "Не удалось отправить заявку.");
        return;
      }

      setForm(initialState);
      setIsSuccess(true);
    } catch (submitError) {
      console.error(submitError);
      setError("Сервер временно недоступен. Попробуйте еще раз позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_70px_rgba(15,23,42,0.1)]">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-[var(--color-card)]">
            Ваше имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            minLength={2}
            maxLength={80}
            required
            placeholder="Например, Андрей"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(245,197,66,0.25)]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-[var(--color-card)]">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            required
            inputMode="tel"
            placeholder="+375 (44) 123-45-67"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(245,197,66,0.25)]"
          />
        </div>

        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex min-h-14 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-base font-bold text-[var(--color-card)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Отправляем..." : "Отправить заявку"}
        </button>
      </form>

      <div className="mt-5 min-h-6 text-sm">
        {error ? <p className="font-medium text-red-600">{error}</p> : null}
        {isSuccess ? (
          <p className="font-medium text-emerald-700">Заявка отправлена. Мы скоро свяжемся с вами.</p>
        ) : null}
      </div>
    </div>
  );
}
