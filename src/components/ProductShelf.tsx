import { Product } from "@/types/catalog";
import ProductCard from "@/components/ProductCard";

type ProductShelfProps = {
  title: string;
  subtitle: string;
  products: Product[];
  id?: string;
};

export default function ProductShelf({ title, subtitle, products, id }: ProductShelfProps) {
  return (
    <section className="section-shell" id={id}>
      <div className="section-head">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
