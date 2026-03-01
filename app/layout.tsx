import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // <-- импортируем Script
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Работа в Такси – ООО «Первая поездка»",
  description: "Официальный парк Яндекс.Такси. Работа водителем на личном или арендном авто в Минске.",
  openGraph: {
    title: "Работа в Такси – ООО «Первая поездка»",
    description: "Официальный парк Яндекс.Такси. Работа водителем на личном или арендном авто в Минске.",
    url: "https://твойдомен.by",
    siteName: "ООО «Первая поездка»",
    images: [
      {
        url: "https://твойдомен.by/images/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Работа в Такси – ООО «Первая поездка»",
    description: "Официальный парк Яндекс.Такси. Работа водителем на личном или арендном авто в Минске.",
    images: ["https://твойдомен.by/images/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        {/* Яндекс.Метрика */}
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

              ym(107046347, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/107046347"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

{/* Open Graph */}
<meta property="og:title" content={String(metadata.openGraph?.title ?? "")} />
<meta property="og:description" content={String(metadata.openGraph?.description ?? "")} />
<meta property="og:url" content={String(metadata.openGraph?.url ?? "")} />
<meta property="og:site_name" content={String(metadata.openGraph?.siteName ?? "")} />
{metadata.openGraph?.images?.map((img, idx) => (
  <meta key={idx} property="og:image" content={String(img.url ?? "")} />
))}

{/* Twitter */}
<meta name="twitter:card" content={String(metadata.twitter?.card ?? "")} />
<meta name="twitter:title" content={String(metadata.twitter?.title ?? "")} />
<meta name="twitter:description" content={String(metadata.twitter?.description ?? "")} />
{metadata.twitter?.images?.map((img, idx) => (
  <meta key={idx} name="twitter:image" content={String(img ?? "")} />
))}

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
