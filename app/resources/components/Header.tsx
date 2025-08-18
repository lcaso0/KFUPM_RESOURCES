export default function Header() {
  return (
    <header className="relative bg-gray-800 text-white text-center py-12">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-geometric-pattern opacity-100" />

      <div className="container relative z-10 mx-auto tracking-wide flex flex-col gap-3">
      <h1 className="text-6xl font-bold text-secondary font-diwani ">المصادر الأكاديمية</h1>
      <p className="text-xl mt-2 font-noto-arabic">موارد ومصادر لطلاب جامعة الملك فهد للبترول والمعادن</p>
      </div>

    </header>
  );
}
