import { ProductCard } from ".";
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <>
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
    </>
  );
};

export { ProductList };
