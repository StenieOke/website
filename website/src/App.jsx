import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <Hero />

      <section className="services-contact">
        <Services />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
