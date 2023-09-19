import { styled } from "styled-components";
import { CardImage } from "../common/Image";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <StyledCard>
      <Link to={`/products/${props.productId}`}>
        <CardImage $backgroundImageUrl={props.$backgroundImageUrl}></CardImage>
        <div className="card-body">
          <p className="card-title">{props.cardTitle}</p>
          <p className="card-price">NT${props.price}</p>
          {/* <p className="card-des">{props.des}</p> */}
        </div>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  text-align: left;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  a {
    color: black;
  }
  .card-body {
    padding: 16px;
    overflow: hidden;

    .card-title {
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }
    .card-price {
      padding-bottom: 4px;
    }
    .card-des {
      text-align: left;
      height: 72px;
      margin-bottom: 16px;
      font-size: 16px;
      text-align: justify;
      overflow: hidden;
    }
  }
`;
export default ProductCard;
