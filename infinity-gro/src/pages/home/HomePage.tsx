import Nav from "@/components/Nav";
import "./index.css";
import ServicesSection from "@/components/ServicesSection";
const HomePage = () => {
  return (
    <main className="w-screen">
      <section id="hero">
        <div className="bg-black h-full w-full opacity-35 absolute"></div>

        <div className="w-full absolute h-full flex items-center justify-center">
          Hello
        </div>
        <nav className="absolute">
          <Nav />
        </nav>
      </section>
      <section className="w-full">
        <ServicesSection />
      </section>
    </main>
  );
};

export default HomePage;
