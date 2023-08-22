import { Link } from "react-router-dom";
import { LogoImage } from "./Image";
import { logo1Img } from "../../images";
import { styled } from "styled-components";

const LogoLink = ({ $logoWidth }) => {
  return (
    <Link to="/">
      <Brand $logoWidth={$logoWidth}>
        <LogoImage $backgroundImageUrl={logo1Img}></LogoImage>
      </Brand>
    </Link>
  );
};

const Brand = styled.div`
  width: ${(props) => props.$logoWidth};
`;

export default LogoLink;
