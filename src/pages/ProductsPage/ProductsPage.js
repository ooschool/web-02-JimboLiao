import { StyledContainer } from "../../components/common";
import { styled } from "styled-components";
import { ProductList, ProductForm } from "../../components/products";
import { products, brandNames, productCategory } from "../../data/products";
import { useState, useEffect } from "react";
const ProductsPage = () => {
  const [productList, setProductList] = useState(products);
  const [brandOptions] = useState(brandNames);
  const [categoryOptions] = useState(productCategory);

  // window scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //@todo form select brand
  const handleSelectBrand = (event) => {
    console.log("brand select = ", event.target.value);
  };
  //@todo form select category
  const handleSelectCategory = (event) => {
    console.log("category select = ", event.target.value);
  };
  //@todo form search
  const handleSearch = (event) => {
    console.log("search  = ", event.target.value);
  };

  return (
    <main>
      <StyledProduct>
        <StyledContainer>
          <div className="products__title">
            <h2>Products</h2>
          </div>
          <ProductForm
            handleSelectBrand={handleSelectBrand}
            handleSelectCategory={handleSelectCategory}
            handleSearch={handleSearch}
            brandOptions={brandOptions}
            categoryOptions={categoryOptions}
          />
          <ProductList products={productList}></ProductList>
        </StyledContainer>
      </StyledProduct>
    </main>
  );
};

const StyledProduct = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .products__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

export default ProductsPage;
