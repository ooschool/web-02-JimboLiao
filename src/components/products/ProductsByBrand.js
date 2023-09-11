import { ProductList } from "./ProductList";
const ProductsByBrand = ({ brand, brandProducts }) => {
  return (
    <>
      <div className="products-summary__subtitle">
        <h3>{brand.brandName}</h3>
      </div>
      <ProductList products={brandProducts} />
    </>
  );
};
export { ProductsByBrand };
