import { ProductsByBrand } from "./ProductsByBrand";

const ProductSummary = ({ brandsWithProducts }) => {
  return (
    <div>
      {brandsWithProducts.map((brand, i) => (
        <ProductsByBrand key={i} brand={brand} brandProducts={brand.products} />
      ))}
    </div>
  );
};

export { ProductSummary };
