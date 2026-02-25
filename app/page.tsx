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
      <section
        className="pt-32 pb-36 bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
  <span
    className="text-black"
    style={{
      WebkitTextStroke: "1.5px #facc15",
    }}
  >
    Работа водителем в Яндекс.Такси
  </span>
  <br />
  <span
    className="text-black"
    style={{
      WebkitTextStroke: "1.5px #facc15",
    }}
  >
    на личном или арендном авто в Минске
  </span>
</h1>

<p
  className="text-xl md:text-2xl text-black mb-8"
  style={{
    WebkitTextStroke: "1px #facc15",
  }}
>
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

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
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
          <h2 className="text-3xl font-bold mb-12">Как начать работу</h2>

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

      {/* DOCUMENTS + CONDITIONS */}
      <section className="bg-yellow-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* WHAT TO PROVIDE */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              Что нужно предоставить
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>ВУ с двух сторон</li>
              <li>Техпаспорт с двух сторон</li>
              <li>Паспорт (стр. 31, 33 + прописка)</li>
              <li>Номер телефона для Яндекс Про</li>
              <li>IBAN карты (28 символов)</li>
              <li>Курсы такси</li>
              <li>Мед. справка</li>
              <li>6 фото авто в оклейке</li>
            </ul>
          </div>

          {/* CONDITIONS */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              Условия сотрудничества
            </h2>

            <p className="font-semibold mb-4">
              Официальный парк такси
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Комиссия парка 18% (уплачиваем все налоги)</li>
              <li>Еженедельный вывод на карту</li>
              <li>Официальное трудоустройство</li>
              <li>Полный соц. пакет</li>
              <li>Пассажирская страховка за счёт парка</li>
              <li>Внесение в реестр за счёт парка</li>
              <li>Подключение программной кассы</li>
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
