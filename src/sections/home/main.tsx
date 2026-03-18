export default function Main() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.pexels.com/photos/7195814/pexels-photo-7195814.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Barbershop interior — Black leather chairs in a spacious stylish barbershop by Max Vakhtbovych on Pexels"
        />
      </div>
      <div className="hero-content">
        <h1 className="logo-text">MALINEOSTYLE</h1>
        <p className="hero-tagline">Cadena de Peluquería y Estética · Córdoba</p>
        <div className="hero-cta">
          <button className="btn-primary">Reservar Turno</button>
          <button className="btn-ghost">Ver Servicios</button>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
