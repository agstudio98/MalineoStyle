export default function Payments() {
  return (
    <section className="form-section">
      <h2>Métodos de Pago</h2>
      <p>Aceptamos todas las tarjetas, efectivo y transferencias.</p>
      <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
        <div style={{padding: '1rem', border: '1px solid var(--border)', borderRadius: '10px'}}>Visa</div>
        <div style={{padding: '1rem', border: '1px solid var(--border)', borderRadius: '10px'}}>Mastercard</div>
        <div style={{padding: '1rem', border: '1px solid var(--border)', borderRadius: '10px'}}>Efectivo</div>
        <div style={{padding: '1rem', border: '1px solid var(--border)', borderRadius: '10px'}}>Mercado Pago</div>
      </div>
    </section>
  );
}

