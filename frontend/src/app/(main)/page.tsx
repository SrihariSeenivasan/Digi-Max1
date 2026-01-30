import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-cyan selection:text-black">
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
    </main>
  );
}
