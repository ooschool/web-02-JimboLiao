import { Link } from "react-router-dom";
import { LogoImage } from "./Image";
import { logo1Img } from "../../images";
import { styled } from "styled-components";

const StyledBrand = styled.div`
  width: ${(props) => props.$logoWidth};
`;

const LogoLink = ({ $logoWidth }) => {
  return (
    <Link to="/">
      <StyledBrand $logoWidth={$logoWidth}>
        <LogoImage $backgroundImageUrl={logo1Img}></LogoImage>
      </StyledBrand>
    </Link>
  );
};

export default LogoLink;
