import styled from "styled-components";
import { ProductCard } from ".";
import { Grid } from "@mui/material";

const StyledCardContainer = styled.div`
  padding-bottom: 32px;
`;
const ProductList = ({ products }) => {
  return (
    <>
      <StyledCardContainer>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} md={4}>
              <ProductCard
                productId={product.id}
                $backgroundImageUrl={product.imgUrl}
                cardTitle={product.productName}
                price={product.price}
                des={product.description}
              />
            </Grid>
          ))}
        </Grid>
      </StyledCardContainer>
    </>
  );
};

export { ProductList };
