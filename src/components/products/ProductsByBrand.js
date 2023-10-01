import styled from "styled-components";
import { ProductList } from "./ProductList";

const StyledSubtitle = styled.h3`
  padding-bottom: 8px;
`;
const ProductsByBrand = ({ brand, brandProducts }) => {
  return (
    <>
      <div className="products-summary__subtitle">
        <StyledSubtitle>{brand.brandName}</StyledSubtitle>
      </div>
      <ProductList products={brandProducts} />
    </>
  );
};
export { ProductsByBrand };
