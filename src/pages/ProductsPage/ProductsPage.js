import { StyledContainer } from "../../components/common";
import { styled } from "styled-components";
import { ProductList, ProductForm } from "../../components/products";
import { useState, useEffect } from "react";
import axios from "axios";

const StyledProduct = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .products__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

const ProductsPage = () => {
  // window scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Error: received data is not an array", response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const brandOptions = ["Paul Michael", "Moroccanoil"];
  const categoryOptions = ["Shampoo", "Conditioner", "Pomade", "Hair oil"];

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
            onSelectBrand={handleSelectBrand}
            onSelectCategory={handleSelectCategory}
            onSearch={handleSearch}
            brandOptions={brandOptions}
            categoryOptions={categoryOptions}
          />
          <ProductList products={products}></ProductList>
        </StyledContainer>
      </StyledProduct>
    </main>
  );
};

export default ProductsPage;
