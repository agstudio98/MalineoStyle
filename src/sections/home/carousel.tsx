import { useState } from 'react';

const slides = [
  {
    text: 'Peluquería Premium en Córdoba',
    img: 'https://images.pexels.com/photos/7195807/pexels-photo-7195807.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Elegantly designed barbershop interior by Max Vakhtbovych on Pexels',
  },
  {
    text: 'Estilos Masculinos y Femeninos',
    img: 'https://images.pexels.com/photos/20785318/pexels-photo-20785318.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Stylish barbershop interior with black leather chairs by František Čaník on Pexels',
  },
  {
    text: 'Tratamientos Detox y Depilación',
    img: 'https://images.pexels.com/photos/13809242/pexels-photo-13809242.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Top view of barber tools on a workstation by Ulises León on Pexels',
  },
  {
    text: 'Alisados Profesionales',
    img: 'https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Stylish cozy interior of modern barbershop by Maria Orlova on Pexels',
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="carousel-section">
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.img} alt={slide.alt} />
              <div className="carousel-slide-overlay">
                <h2>{slide.text}</h2>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-nav prev" onClick={prevSlide} aria-label="Anterior">‹</button>
        <button className="carousel-nav next" onClick={nextSlide} aria-label="Siguiente">›</button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot${index === currentSlide ? ' active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
