import { styled } from "styled-components";
import { StyledContainer } from "../common";

const StyledFailedMessage = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .order__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

const OrderFailed = () => {
  return (
    <StyledContainer>
      <StyledFailedMessage>
        <div className="order__title">Sorry</div>
        <div>Something went wrong, please try again later.</div>
      </StyledFailedMessage>
    </StyledContainer>
  );
};

export default OrderFailed;
