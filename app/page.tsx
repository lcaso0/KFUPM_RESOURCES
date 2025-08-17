import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
