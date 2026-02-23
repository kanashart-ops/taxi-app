"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg text-black">
          Первая поездка
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#advantages">Преимущества</a>
          <a href="#conditions">Условия</a>
          <a href="#start">Как начать</a>
          <a href="#documents">Документы</a>
          <a href="#contacts">Контакты</a>
        </div>

        <a
          href="tel:+375447333773"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold"
        >
          +375 44 7333773
        </a>
      </div>
    </nav>
  );
}
