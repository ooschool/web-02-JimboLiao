import { useParams } from "react-router-dom";
import { getProductById, getBrandByBrandName } from "../../data/products";
import {
  StyledContainer,
  StyledRow,
  StyledColumn,
  ProductImage,
  StyledLink,
} from "../../components/common";
import { styled } from "styled-components";
import { ProductInfo, ProductIntro } from "../../components/products";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  const { cart, setCart } = useCart();
  const [amount, setAmount] = useState(0);
  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const cartIndex = cart.findIndex((item) => item.id === product.id);
    // Not in the cart
    if (cartIndex === -1) {
      setCart([...cart, { amount: amount, ...product }]);
    } else {
      // Already in the cart
      let newCart = [...cart];
      newCart[cartIndex].amount = amount;
      setCart(newCart);
    }
  };

  /// product not found
  if (product === null)
    return (
      <StyledContainer>
        <p>product not found... </p>
        <br />
        <StyledLink $primary to="/">
          Home
        </StyledLink>
      </StyledContainer>
    );
  /// render the product detail
  else {
    const brand = getBrandByBrandName(product.brand);
    return (
      <main>
        <StyledProductDetail>
          <StyledContainer>
            <StyledRow>
              <StyledColumn $num={6}>
                <ProductImage $backgroundImageUrl={product.imgUrl} />
              </StyledColumn>

              <StyledColumn $num={6}>
                <ProductInfo
                  product={product}
                  handleAddToCart={handleAddToCart}
                  setAmount={setAmount}
                />
              </StyledColumn>
            </StyledRow>
            {brand === null ? (
              <></>
            ) : (
              <ProductIntro
                title={brand.brandName}
                detail={brand.description}
              />
            )}
            <ProductIntro title={product.productName} detail={product.detail} />
          </StyledContainer>
        </StyledProductDetail>
      </main>
    );
  }
};

const StyledProductDetail = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .product-info {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default ProductDetailPage;
