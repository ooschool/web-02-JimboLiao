import { styled } from "styled-components";
import Image from "../common/Image";
const ProductCard = (props) => {
  return (
    <StyledCard>
      <Image
        $backgroundImageUrl={props.$backgroundImageUrl}
        $contain={true}
      ></Image>
      <div className="card-body">
        <h3 className="card-title">{props.cardTitle}</h3>
        <p className="card-price">NT${props.price}</p>
        <p className="card-des">{props.des}</p>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

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
    }
    .card-price {
      padding-bottom: 4px;
    }
    .card-des {
      height: 72px;
      margin-bottom: 16px;
      font-size: 16px;
      text-align: justify;
      overflow: hidden;
    }
  }
`;
export default ProductCard;
