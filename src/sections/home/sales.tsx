export default function Sales() {
  const promos = [
    {
      title: '20% OFF Cortes Masculinos',
      desc: 'Primera visita.',
      img: 'https://images.pexels.com/photos/19225258/pexels-photo-19225258.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Smiling barber with clippers in a modern barbershop by Marcelo Verfe on Pexels',
    },
    {
      title: 'Paquete Detox + Depilación',
      desc: '$5000 por sesión.',
      img: 'https://images.pexels.com/photos/11179585/pexels-photo-11179585.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Close-up of a woman wearing a facial mask by Misolo Cosmetic on Pexels',
    },
    {
      title: 'Alisado Completo 15% OFF',
      desc: 'Para cabello largo.',
      img: 'https://images.pexels.com/photos/7020255/pexels-photo-7020255.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Close-up of a woman using a dry brush for skin exfoliation by Yan Krukau on Pexels',
    },
  ];

  return (
    <section className="offers-section">
      <div className="section-heading">
        <h2>Promociones Destacadas</h2>
      </div>
      <div className="offers-grid">
        {promos.map((promo, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={promo.img} alt={promo.alt} />
                <h3>{promo.title}</h3>
                <p>{promo.desc}</p>
                <span className="card-tag">Promo</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
