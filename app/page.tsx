import Image from "next/image";
import ApplicationForm from "@/components/ApplicationForm";
import Navbar from "@/components/Navbar";

const benefits = [
  "Комиссия парка 18% с уплатой налогов.",
  "Еженедельный вывод средств на карту.",
  "Официальное трудоустройство по трудовому договору.",
  "Полный социальный пакет.",
  "Страховка пассажиров за счет парка.",
  "Внесение в реестр и подключение кассы за счет парка.",
];

const steps = [
  {
    title: "Собрать документы",
    description: "Поможем проверить пакет документов и быстро пройти подключение.",
    image: "/images/step1.png",
    width: 4510,
    height: 3007,
  },
  {
    title: "Подготовить автомобиль",
    description: "Подскажем, как подготовить личное или арендное авто к выходу на линию.",
    image: "/images/step2.png",
    width: 7900,
    height: 5267,
  },
  {
    title: "Начать зарабатывать",
    description: "После подключения можно сразу брать заказы и работать в удобном графике.",
    image: "/images/step3.png",
    width: 5000,
    height: 3337,
  },
];

export default function Home() {
  return (
    <main id="top" className="bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <Navbar />

      <section className="relative isolate overflow-hidden pt-28">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Автомобиль такси на городской улице"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,17,29,0.18),rgba(12,17,29,0.74))]" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-6 pb-16 pt-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div className="max-w-3xl text-white">
              <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
                Работа в Яндекс Такси
              </p>
              <h1 className="max-w-2xl text-4xl font-black leading-tight text-balance sm:text-5xl lg:text-6xl">
                Работа водителем на личном или арендном авто в Минске
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
                Официальный парк с понятными условиями, быстрым подключением и поддержкой
                на каждом этапе. Вы сами планируете график и доход.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#application" className="btn-primary">
                  Оставить заявку
                </a>
                <a href="tel:+375447333773" className="btn-secondary">
                  Позвонить: +375 44 733 3773
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/20 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                Почему с нами удобно
              </p>
              <ul className="mt-4 space-y-4 text-base leading-7 text-white/90">
                <li>Работа в официальном парке без серых схем.</li>
                <li>Еженедельные выплаты и прозрачные расчеты.</li>
                <li>Сопровождение по документам, подключению и выходу на линию.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-black/5 bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center">
          <div>
            <p className="section-label">О компании</p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-balance sm:text-4xl">
              Парк, в котором можно быстро выйти на линию и спокойно работать дальше
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--color-muted)]">
              <p>
                ООО «Первая поездка» помогает водителям начать работу без лишней бюрократии:
                подсказывает по документам, объясняет условия и остается на связи после
                подключения.
              </p>
              <p>
                Мы делаем ставку на прозрачные выплаты, официальное оформление и нормальную
                поддержку, чтобы водитель понимал, как и на чем он зарабатывает.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-[var(--color-surface-alt)] shadow-xl">
            <Image
              src="/images/about-img.jpg"
              alt="Водитель рядом с автомобилем такси"
              width={3936}
              height={2624}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[var(--color-surface-alt)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">Условия</p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            <div>
              <h2 className="max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
                Все базовые условия собраны в одном месте, без скрытых пунктов
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                  >
                    <p className="text-base font-medium leading-7">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[32px] bg-[var(--color-card)] p-8 text-white shadow-[0_30px_70px_rgba(15,23,42,0.28)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                Контакты
              </p>
              <div className="mt-5 space-y-4 text-lg">
                <p>
                  Телефон:{" "}
                  <a className="font-semibold underline-offset-4 hover:underline" href="tel:+375447333773">
                    +375 44 733 3773
                  </a>
                </p>
                <p>Компания: ООО «Первая поездка»</p>
                <p>УНП: 193946305</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="steps" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">Как начать</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
            Три шага до выхода на линию
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-black/5 bg-[var(--color-surface-alt)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-card)]">
                    {index + 1}
                  </span>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl bg-white p-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={step.width}
                    height={step.height}
                    sizes="(max-width: 1024px) 96px, 120px"
                    className="mx-auto h-24 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="application" className="bg-[var(--color-surface-alt)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-start">
            <div>
              <p className="section-label">Заявка</p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold text-balance sm:text-4xl">
                Оставьте контакты, и мы свяжемся с вами
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Подскажем по документам, расскажем про условия парка и ответим, с какого
                автомобиля можно начать работу.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
