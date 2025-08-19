export default function Header() {
  return (
    <header className="relative text-primary text-center py-24 overflow-hidden">

      {/* Enhanced Arabic-themed Background - Same as Hero */}
      <div className="absolute inset-0 arabic-calligraphy-bg" />
      
      {/* Arabic Geometric Pattern Overlay */}
      <div className="absolute inset-0 arabic-mosaic-overlay opacity-30" />

      {/* Floating Elements - Same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-background/20 rounded-full opacity-20 blur-sm hidden lg:block animate-arabic-float" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full opacity-20 blur-sm hidden lg:block animate-arabic-glow" />
        <div className="absolute top-1/2 left-8 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full opacity-20 blur-sm hidden lg:block animate-arabic-rotate" />
      </div>

      <div className="container relative z-10 mx-auto tracking-wide flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-diwani drop-shadow-2xl">
          المصادر الأكاديمية
        </h1>
        <p className="text-lg text-secondary sm:text-xl md:text-2xl mt-2 font-noto-arabic dark:text-foreground drop-shadow-lg">
          موارد ومصادر لطلاب جامعة الملك فهد للبترول والمعادن
        </p>
      </div>

    </header>
  );
}
