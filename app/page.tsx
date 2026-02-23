"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена!");
  };

  return (
    <main className="bg-white text-gray-800">

      {/* NAVIGATION */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center p-4">
          <div className="font-bold text-2xl">ООО «Первая поездка»</div>
          <nav className="hidden md:flex gap-12 text-base font-semibold ml-8">
            <a href="#about" className="hover:text-yellow-500">О нас</a>
            <a href="#how" className="hover:text-yellow-500">Как начать</a>
            <a href="#requirements" className="hover:text-yellow-500">Что нужно</a>
            <a href="#form" className="hover:text-yellow-500">Заявка</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="pt-28 pb-32 bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
            Работа водителем в Яндекс.Такси в Минске
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg mb-8">
            Отличные условия сотрудничества — вы сами планируете своё время и доход.
          </p>
          <a
            href="#form"
            className="bg-yellow-400 text-black font-bold py-4 px-10 rounded-lg hover:bg-yellow-300 transition text-lg"
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT LEFT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed mb-4">
              ООО «Первая поездка» стремится создать комфортные условия трудоустройства,
              где каждый водитель может выйти на работу в удобное время и прогнозировать свой доход.
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
              Поддержка на каждом этапе, честность и прозрачность расчётов — вот наша цель!
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div>
            <img
              src="/images/about-img.jpg"
              alt="О компании"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section id="how" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Как начать работу</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="/images/step1.png"
                alt="Шаг 1"
                className="mx-auto mb-4 w-24"
              />
              <h3 className="font-semibold text-xl mb-2">Собрать документы</h3>
              <p className="text-gray-600">Медсправка, курсы, удостоверения.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="/images/step2.png"
                alt="Шаг 2"
                className="mx-auto mb-4 w-24"
              />
              <h3 className="font-semibold text-xl mb-2">Добавить автомобиль</h3>
              <p className="text-gray-600">Оклейка, плафон, бейджи, техосмотр.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="/images/step3.png"
                alt="Шаг 3"
                className="mx-auto mb-4 w-24"
              />
              <h3 className="font-semibold text-xl mb-2">Начать работу</h3>
              <p className="text-gray-600">Зарабатывай по гибкому графику!</p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Для добавления автомобиля</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Оклейка автомобиля</li>
              <li>Плафон</li>
              <li>Бейджи</li>
              <li>Регистратор</li>
              <li>Техосмотр (не старше 6 месяцев)</li>
              <li>Договор аренды (если авто арендное)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Для добавления водителя</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Мед. справка (не старше 3 лет)</li>
              <li>Курсы водителя такси</li>
              <li>Курсы повышения квалификации</li>
              <li>Подписанный трудовой договор</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUBMISSION INFO */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Что нужно передать в парк
          </h2>
          <p className="text-gray-700 mb-6">
            Передать документы лично.
          </p>
          <ul className="mx-auto text-left max-w-xl list-disc list-inside text-gray-700 space-y-2">
            <li>ВУ с двух сторон</li>
            <li>Техпаспорт с двух сторон</li>
            <li>Паспорт (стр. 31, 33 + прописка)</li>
            <li>Номер телефона для Яндекс Про</li>
            <li>IBAN карты (28 символов)</li>
            <li>Курсы такси (удостоверение)</li>
            <li>Курсы повышения квалификации</li>
            <li>Мед. справка</li>
            <li>6 фото авто в оклейке</li>
          </ul>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-gray-100 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Оставить заявку
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              placeholder="Ваше имя"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
            <input
              name="phone"
              placeholder="Телефон"
              onChange={handleChange}
              required
              className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Отправить заявку
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            Или звоните: <span className="font-semibold text-lg">+375 44 733 3773</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t">
        <p>ООО «Первая поездка»</p>
        <p>УНП: 193946305</p>
      </footer>
    </main>
  );
}
