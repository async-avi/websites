import Nav from "@/components/Nav";
import "./index.css";
const HomePage = () => {
  return (
    <main>
      <section id="hero" className="w-screen">
        <div className="bg-black h-full w-full opacity-35 absolute"></div>

        <div className="w-full absolute h-full flex items-center justify-center">
          Hello
        </div>
        <nav className="absolute">
          <Nav />
        </nav>
      </section>
    </main>
  );
};

export default HomePage;
