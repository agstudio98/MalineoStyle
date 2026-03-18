export default function About() {
  const founders = [
    {
      name: 'Nicolás',
      role: 'Co-Fundador',
      img: 'https://images.pexels.com/photos/8867160/pexels-photo-8867160.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Portrait of a professional barber by Los Muertos Crew on Pexels',
    },
    {
      name: 'Mateo',
      role: 'Co-Fundador',
      img: 'https://images.pexels.com/photos/8552627/pexels-photo-8552627.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Confident barber in an apron inside a modern salon by Ej Agumbay on Pexels',
    },
  ];

  return (
    <section className="about-section">
      <div className="section-heading">
        <h2>Sobre los Fundadores</h2>
      </div>
      <p>
        Inicio en 2022 por 2 jóvenes argentinos con certificación ISO 9001 en peluquería moderna
        y atención personalizada. Pasión por la barbería tradicional combinada con técnicas
        innovadoras.
      </p>
      <div className="founders-grid">
        {founders.map((founder) => (
          <div key={founder.name} className="founder-card">
            <img src={founder.img} alt={founder.alt} />
            <h3>{founder.name}</h3>
            <p>{founder.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
