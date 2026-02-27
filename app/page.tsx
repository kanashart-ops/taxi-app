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
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="font-bold text-2xl">ООО «Первая поездка»</div>
          <nav className="hidden md:flex gap-10 text-base font-semibold">
            <a href="#about" className="hover:text-yellow-500">О нас</a>
            <a href="#how" className="hover:text-yellow-500">Как начать</a>
            <a href="#requirements" className="hover:text-yellow-500">Требования</a>
            <a href="#form" className="hover:text-yellow-500">Заявка</a>
          </nav>
        </div>
      </header>

{/* HERO */}
<section className="pt-32">
  <div className="relative w-full h-[700px]">

    {/* КАРТИНКА */}
    <img
      src="/images/hero-bg.jpg"
      alt="Работа в такси"
      className="w-full h-full object-cover"
    />

    {/* ВЕРХНИЙ ТЕКСТ — 2 СТРОКИ */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center w-full px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        <div
          className="text-black"
          style={{ WebkitTextStroke: "1.5px #facc15" }}
        >
          Работа водителем в Яндекс.Такси
        </div>
        <div
          className="text-black"
          style={{ WebkitTextStroke: "1.5px #facc15" }}
        >
          на личном или арендном авто в Минске
        </div>
      </h1>
    </div>

    {/* НИЖНИЙ ТЕКСТ — 1 СТРОКА */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-6">
      <p
        className="text-xl md:text-2xl text-black"
        style={{ WebkitTextStroke: "1px #facc15" }}
      >
        Отличные условия сотрудничества — вы сами планируете своё время и доход.
      </p>
    </div>

  </div>
</section>





      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6"></h2>
            <p className="text-xl font-semibold leading-relaxed mb-4">
              ООО «Первая поездка» стремится создать комфортные условия трудоустройства,
              где каждый водитель может выйти на работу в удобное время и прогнозировать свой доход.
            </p>
            <p className="text-xl font-semibold leading-relaxed">
              Поддержка на каждом этапе, честность и прозрачность расчётов — вот наша цель!
            </p>
          </div>

          <div>
            <img
              src="/images/about-img.jpg"
              alt="О компании"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Условия сотрудничества</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <img src="/images/step1.png" className="mx-auto mb-4 w-20" />
              <h3 className="font-semibold text-xl mb-2">Собрать документы</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <img src="/images/step2.png" className="mx-auto mb-4 w-20" />
              <h3 className="font-semibold text-xl mb-2">Подготовить авто</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <img src="/images/step3.png" className="mx-auto mb-4 w-20" />
              <h3 className="font-semibold text-xl mb-2">Начать зарабатывать</h3>
            </div>
          </div>
        </div>
      </section>

{/* CONDITIONS AFTER STEPS */}
<section className="bg-yellow-50 py-20 px-6">
  <div className="max-w-5xl mx-auto">

    <div className="bg-white p-10 rounded-2xl shadow-xl">

      <p className="text-xl font-semibold mb-6">
        Официальный парк такси
      </p>

      <ul className="space-y-4 text-lg text-gray-800">
        <li>✔ Комиссия парка 18% (уплачиваем все налоги)</li>
        <li>✔ Еженедельный вывод на карту</li>
        <li>✔ Официальное трудоустройство по трудовому договору</li>
        <li>✔ Полный социальный пакет</li>
        <li>✔ Пассажирская страховка за счёт парка</li>
        <li>✔ Внесение в реестр за счёт парка</li>
        <li>✔ Подключение программной кассы</li>
      </ul>

    </div>

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
