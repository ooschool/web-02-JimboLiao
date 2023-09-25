import { styled } from "styled-components";

const StyledProductIntro = styled.div`
  text-align: left;
  .intro-title {
    font-size: 28px;
    padding-bottom: 8px;
  }
  .intro-detail {
    font-size: 18px;
    padding-bottom: 16px;
  }
`;

const ProductIntro = ({ title, detail }) => {
  return (
    <StyledProductIntro>
      <h4 className="intro-title">{title}</h4>
      <p className="intro-detail">{detail}</p>
    </StyledProductIntro>
  );
};

export default ProductIntro;
