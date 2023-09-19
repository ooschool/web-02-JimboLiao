import { styled } from "styled-components";
import { FormSelect } from "../common";
import { Button } from "@mui/material";

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  h3 {
    font-size: 36px;
    padding-bottom: 8px;
  }
  .product-price {
    font-size: 24px;
    padding-bottom: 18px;
  }
  .product-description {
    padding-bottom: 12px;
  }
  .product-reserve {
    color: #666;
    padding-bottom: 32px;
  }
  .product-amount {
    display: inline-block;
    padding-right: 32px;
    line-height: 36px;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  min-width: 64px;
  border-radius: 5px;

  font-size: 16px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0;
  overflow: hidden;

  border: 1px solid #3072ff;
  background-color: ${(props) => (props.$primary ? "#3072ff" : "whitesmoke")};
  color: ${(props) => (props.$primary ? "whitesmoke" : "#3072ff")};
`;

const ProductInfo = ({ product, onAddToCart, onAmountChange }) => {
  function createAmountOptions(product) {
    let options = [];
    for (let i = 1; i <= product.reserve; i++) {
      options.push(i);
    }
    return options;
  }

  function handleSelectAmount(event) {
    onAmountChange(event.target.value);
  }

  return (
    <StyledProductInfo>
      <h3>{product.productName}</h3>
      <p className="product-price">NT$ {product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-reserve">{product.reserve} left</p>
      <div>
        <div className="product-amount">
          <label htmlFor="amount">Amount : </label>
          <FormSelect
            name={"amount"}
            id={"amount"}
            optionText={"-"}
            options={createAmountOptions(product)}
            onChange={handleSelectAmount}
          />
        </div>

        <Button
          variant="contained"
          component={StyledButton}
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </StyledProductInfo>
  );
};

export default ProductInfo;
