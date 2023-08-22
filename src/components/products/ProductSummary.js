import { ProductsByBrand } from "./ProductsByBrand";

const ProductSummary = ({ brands, allBrandProducts }) => {
  return (
    <div>
      {brands.map((brand, i) => (
        <ProductsByBrand
          key={i}
          brand={brand}
          brandProducts={allBrandProducts[i]}
        />
      ))}
    </div>
  );
};

export { ProductSummary };
