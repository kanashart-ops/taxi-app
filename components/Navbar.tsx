"use client";

const navItems = [
  { href: "#about", label: "О компании" },
  { href: "#benefits", label: "Условия" },
  { href: "#steps", label: "Как начать" },
  { href: "#application", label: "Заявка" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-[rgba(12,17,29,0.78)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 text-white">
        <a href="#top" className="text-lg font-black uppercase tracking-[0.08em]">
          Первая поездка
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+375447333773"
          className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-bold text-[var(--color-card)] transition hover:bg-[var(--color-accent-strong)]"
        >
          +375 44 733 3773
        </a>
      </div>
    </header>
  );
}
