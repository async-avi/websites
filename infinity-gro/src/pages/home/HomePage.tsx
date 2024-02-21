import Nav from "@/components/Nav";
import "./index.css";
const HomePage = () => {
  return (
    <main>
      <section id="hero" className="w-screen">
        <div className="bg-black h-full w-full opacity-35 absolute"></div>
        <nav className="absolute">
          <Nav />
        </nav>
        <center className="absolute flex justify-center w-full h-full items-center">
          Hello
        </center>
      </section>
    </main>
  );
};

export default HomePage;
