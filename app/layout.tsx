import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: "Работа в Яндекс Такси в Минске | ООО «Первая поездка»",
  description:
    "Официальный парк Яндекс Такси в Минске. Работа водителем на личном или арендном автомобиле с прозрачными условиями и поддержкой.",
  openGraph: {
    title: "Работа в Яндекс Такси в Минске | ООО «Первая поездка»",
    description:
      "Официальный парк Яндекс Такси в Минске. Работа водителем на личном или арендном автомобиле с прозрачными условиями и поддержкой.",
    siteName: "ООО «Первая поездка»",
    images: ["/images/hero-bg.jpg"],
    type: "website",
    locale: "ru_BY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Работа в Яндекс Такси в Минске | ООО «Первая поездка»",
    description:
      "Официальный парк Яндекс Такси в Минске. Работа водителем на личном или арендном автомобиле с прозрачными условиями и поддержкой.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=107046347', 'ym');

              ym(107046347, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}

        <Analytics />
        <SpeedInsights />

        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/107046347"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}