export default function Loading() {
  return (
    <main className="section-shell" style={{ paddingTop: '2rem' }}>
      <div className="skeleton" style={{ height: 280, marginBottom: '1rem' }} />
      <div className="skeleton" style={{ height: 26, width: '42%', marginBottom: '0.8rem' }} />
      <div className="skeleton" style={{ height: 18, width: '68%', marginBottom: '1rem' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.8rem' }}>
        <div className="skeleton" style={{ height: 240 }} />
        <div className="skeleton" style={{ height: 240 }} />
        <div className="skeleton" style={{ height: 240 }} />
      </div>
    </main>
  );
}
