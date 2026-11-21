export default function TaxiServiceLogos() {
  return (
    <div
      className="relative mx-auto max-w-7xl px-6 pt-6"
      aria-label="Службы такси: WB Taxi, A1 Такси, Яндекс Go"
    >
      <div className="grid w-full max-w-[700px] grid-cols-3 gap-2 sm:gap-4">
        <div className="flex min-h-16 items-center justify-center px-2 py-3 sm:min-h-20 sm:px-4">
          <svg viewBox="0 0 225 70" className="h-auto w-full max-w-[208px]" role="img" aria-label="WB Taxi" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wb-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b17bff" />
                <stop offset="100%" stopColor="#6835e8" />
              </linearGradient>
            </defs>
            <rect x="4" y="5" width="60" height="60" rx="16" fill="url(#wb-logo-gradient)" />
            <circle cx="34" cy="32" r="16" fill="#eee1ff" />
            <circle cx="34" cy="32" r="8" fill="#9661ef" />
            <path d="M34 47v6" stroke="#eee1ff" strokeWidth="5" strokeLinecap="round" />
            <text x="77" y="43" fontFamily="Arial, sans-serif" fontSize="25" fill="#37205f" letterSpacing=".3">WB TAXI</text>
          </svg>
        </div>
        <div className="flex min-h-16 items-center justify-center px-2 py-2 sm:min-h-20 sm:px-4">
          <svg viewBox="0 0 235 92" className="h-auto w-full max-w-[208px]" role="img" aria-label="A1 Такси" xmlns="http://www.w3.org/2000/svg">
            <path d="M74 25a45 45 0 0 1 90 0" fill="none" stroke="#ed231c" strokeWidth="10" />
            <path d="M93 29a26 26 0 0 1 52 0" fill="none" stroke="#ed231c" strokeWidth="10" />
            <text x="10" y="64" fontFamily="Georgia, Times New Roman, serif" fontSize="44" fontWeight="bold" fill="#111111">A¹ Такси</text>
            <path d="M90 70l29 20 29-20" fill="none" stroke="#ed231c" strokeWidth="9" strokeLinejoin="miter" />
          </svg>
        </div>
        <div className="flex min-h-16 items-center justify-center px-2 py-3 sm:min-h-20 sm:px-4">
          <svg viewBox="0 0 218 70" className="h-auto w-full max-w-[208px]" role="img" aria-label="Яндекс Go" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="43" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="700" fill="#111111">Яндекс</text>
            <rect x="137" y="4" width="65" height="62" rx="19" fill="#ffdd00" />
            <text x="144" y="47" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="900" fontStyle="italic" letterSpacing="-3" fill="#111111">Go</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
