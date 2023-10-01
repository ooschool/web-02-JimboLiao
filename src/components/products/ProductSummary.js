import { ProductsByBrand } from "./ProductsByBrand";

const ProductSummary = ({ brands }) => {
  return (
    <div>
      {brands.map((brand, i) => (
        <ProductsByBrand key={i} brand={brand} brandProducts={brand.products} />
      ))}
    </div>
  );
};

export { ProductSummary };
