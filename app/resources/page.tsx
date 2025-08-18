import Navbar from "@/components/Navigation";
import Header from "./components/Header";
import ResourcesList from "./components/ResourcesList";

export default function Resources() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <Navbar />
      <Header />
      <main>
        <ResourcesList />
      </main>
    </div>
  );
}
