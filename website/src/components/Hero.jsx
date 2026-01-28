export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/headshot.jpg"
        alt="Stenie Oke"
        className="hero-image"
      />

      <div className="hero-text">
        <h1>Stenie Oke</h1>
        <h2>Real Estate Professional</h2>
        <p>
          Helping buyers and sellers navigate the real estate market
          with clarity, confidence, and care.
        </p>

        <a href="#contact" className="cta-button">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
