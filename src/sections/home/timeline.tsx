export default function Timeline() {
  const events = [
    { year: '2022', title: 'Fundación', desc: 'Nicolas y Mateo inician MalineoStyle.' },
    { year: '2023', title: 'Primera Sucursal', desc: 'Apertura en Córdoba Capital.' },
    { year: '2024', title: 'Expansión', desc: 'Múltiples sucursales y servicios premium.' },
  ];

  return (
    <section className="timeline-section">
      <div className="section-heading">
        <h2>Nuestra Cronología</h2>
      </div>
      <div className="timeline">
        {events.map((event) => (
          <div key={event.year} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
