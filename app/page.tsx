import OptimizedFeatures from "@/components/OptimizedFeatures";
import Footer from "@/components/Footer";
import OptimizedHero from "@/components/OptimizedHero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <main>
        <OptimizedHero />
        <OptimizedFeatures />
      </main>
      <Footer />
    </div>
  )
}
