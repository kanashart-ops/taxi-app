import Image from "next/image";

export default function TaxiServiceLogos() {
  return (
    <div
      className="relative mx-auto max-w-7xl px-3 pt-6 sm:px-6"
      aria-label="Службы такси: WB Taxi, A1 Такси, Яндекс Go"
    >
      <div className="grid min-h-16 w-full max-w-[750px] grid-cols-3 items-center gap-1.5 sm:min-h-20 sm:gap-5">
        <div className="flex min-w-0 items-center justify-center">
          <Image src="/images/wb-taxi-logo.png" alt="WB Taxi" width={253} height={95} className="block h-auto w-full max-w-[225px] object-contain" priority />
        </div>
        <div className="flex min-w-0 items-center justify-center">
          <svg viewBox="0 0 235 92" className="h-auto w-full max-w-[225px]" role="img" aria-label="A1 Такси" xmlns="http://www.w3.org/2000/svg">
            <path d="M74 25a45 45 0 0 1 90 0" fill="none" stroke="#ed231c" strokeWidth="10" />
            <path d="M93 29a26 26 0 0 1 52 0" fill="none" stroke="#ed231c" strokeWidth="10" />
            <text x="10" y="64" fontFamily="Georgia, Times New Roman, serif" fontSize="44" fontWeight="bold" fill="#111111">A¹ Такси</text>
            <path d="M90 70l29 20 29-20" fill="none" stroke="#ed231c" strokeWidth="9" strokeLinejoin="miter" />
          </svg>
        </div>
        <div className="flex min-w-0 items-center justify-center">
          <svg viewBox="0 0 218 70" className="h-auto w-full max-w-[225px]" role="img" aria-label="Яндекс Go" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="43" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="700" fill="#111111">Яндекс</text>
            <rect x="137" y="4" width="65" height="62" rx="19" fill="#ffdd00" />
            <text x="144" y="47" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="900" fontStyle="italic" letterSpacing="-3" fill="#111111">Go</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
