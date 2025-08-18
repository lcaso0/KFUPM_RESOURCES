import Navbar from "@/components/Navigation";
import Header from "./components/Header";
import ResourcesList from "./components/ResourcesList";

export default function Resources() {
  return (
    <div className="min-h-screen pt-16 bg-[var(--background)]">
      <Navbar />
      <Header />
      <main>
        <ResourcesList />
      </main>
    </div>
  );
}
