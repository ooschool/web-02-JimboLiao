import { styled } from "styled-components";
import { ProductImage, StyledButton } from "../common";

const CartItem = ({ item }) => {
  const handleDeleteItem = () => {
    console.log("Delete item");
  };
  const total = item.price * item.amount;
  return (
    <ItemContainer>
      <div className="img-container">
        <ProductImage $backgroundImageUrl={item.imgUrl} />
      </div>
      <div className="item-info">
        <StyledItemInfo>
          <h3>{item.productName}</h3>
          <p className="item-price">NT$ {item.price}</p>
          <p className="item-amount">Amount : {item.amount}</p>
        </StyledItemInfo>
      </div>
      <div className="item-summary">
        <div className="item-delete"></div>
        <StyledButton type="button" onClick={handleDeleteItem}>
          Delete
        </StyledButton>
        <div className="item-total">
          Total :<br /> NT$ {total}
        </div>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  border: 2px solid #ccc;
  border-radius: 16px;
  display: flex;
  margin-bottom: 32px;

  > div {
    padding: 15px;
  }
  .img-container {
    width: 30%;
  }
  .item-info {
    width: 35%;
  }
  .item-summary {
    width: 35%;
    text-align: right;
    padding-right: 64px;
    .item-delete {
      max-width: 32px;
    }
    .item-total {
      padding: 48px 0px 0px 0px;
      font-size: 24px;
    }
  }
`;
const StyledItemInfo = styled.div`
  text-align: left;
  h3 {
    font-size: 36px;
    padding-bottom: 18px;
  }
  .item-price {
    font-size: 24px;
    padding-bottom: 8px;
  }
  .item-amount {
    font-size: 24px;
    /* padding-bottom: 32px; */
  }
`;
export default CartItem;
