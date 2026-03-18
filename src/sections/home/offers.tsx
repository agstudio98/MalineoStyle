export default function Offers() {
  const services = [
    {
      title: 'Cortes de Pelo Masculinos',
      desc: 'Estilos modernos para hombres.',
      img: 'https://images.pexels.com/photos/5584461/pexels-photo-5584461.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'A barber trimming a client\'s hair by Renan Rezende on Pexels',
    },
    {
      title: 'Teñidos para Mujeres',
      desc: 'Colores vibrantes y duraderos.',
      img: 'https://images.pexels.com/photos/27165073/pexels-photo-27165073.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Elegant salon interior by Wilcle Nunes on Pexels',
    },
    {
      title: 'Depilación y Detox Corporal',
      desc: 'Tratamientos rejuvenecedores.',
      img: 'https://images.pexels.com/photos/8460603/pexels-photo-8460603.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Rejuvenating facial massage session by Ornella Delfino on Pexels',
    },
    {
      title: 'Alisados y Cortes Femeninos',
      desc: 'Pelo suave y estilos únicos.',
      img: 'https://images.pexels.com/photos/13809247/pexels-photo-13809247.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Close-up of hairdressing scissors in a leather case by Ulises León on Pexels',
    },
  ];

  return (
    <section className="services-section">
      <div className="section-heading">
        <h2>Nuestros Servicios Destacados</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={service.img} alt={service.alt} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
