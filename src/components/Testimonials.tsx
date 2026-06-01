import { Testimonial } from "@/types/catalog";

type TestimonialsProps = {
  items: Testimonial[];
};

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <section className="section-shell muted">
      <div className="section-head">
        <h2>Client Love</h2>
        <p>Trusted by customers who value quality, authenticity, and premium beauty care.</p>
      </div>

      <div className="testimonial-grid">
        {items.map((item) => (
          <article key={item.id} className="testimonial-card">
            <div className="stars">{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</div>
            <p>{item.quote}</p>
            <h4>{item.name}</h4>
            <span>{item.city}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
