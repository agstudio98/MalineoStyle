import { forwardRef, useState } from 'react';
import '../App.css';

export default forwardRef<HTMLElement, any>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Turno reservado! Te contactaremos pronto. Gracias por elegir MalineoStyle.');
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  const services = [
    'Corte Masculino',
    'Teñido Femenino',
    'Depilación',
    'Detox Corporal',
    'Alisado',
    'Corte Femenino'
  ];

  return (
    <section ref={ref} className="form-section">
      <h1>Reservar Turno</h1>
      <form onSubmit={handleSubmit} style={{maxWidth: '500px', margin: '0 auto'}}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Servicio</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha Preferida</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje (opcional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Sucursal preferida u observaciones..."
          />
        </div>
        <button type="submit" className="submit-btn">Reservar Turno</button>
      </form>
    </section>
  );
});

