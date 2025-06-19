import Header from "./Componentes/Header";
import Hero from "./Componentes/Hero";
import Products from "./Componentes/Products";
import Story from "./Componentes/Story";
import Contact from "./Componentes/Contact";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF3E0] font-sans">
      <Header />
      <Hero />
      <Products />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;