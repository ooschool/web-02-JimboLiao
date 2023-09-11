import { StyledColumn, StyledRow } from "../common/StyledLayout";
import { ProductCard } from ".";

// slice array into smaller arrays
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const ProductList = ({ products }) => {
  const chunks = chunkArray(products, 3);
  return (
    <>
      {chunks.map((chunk, rowIdx) => (
        <StyledRow key={rowIdx}>
          {chunk.map((product) => (
            <StyledColumn $num={4} key={product.id}>
              <ProductCard
                productId={product.id}
                $backgroundImageUrl={product.imgUrl}
                cardTitle={product.productName}
                price={product.price}
                des={product.description}
              />
            </StyledColumn>
          ))}
        </StyledRow>
      ))}
    </>
  );
};

export { ProductList };
