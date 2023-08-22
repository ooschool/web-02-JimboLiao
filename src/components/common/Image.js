import { styled } from "styled-components";

const imgRatio = 3 / 4; // height/ width

const Image = ({ $backgroundImageUrl, $backgroundSize, $imageRatio }) => {
  return (
    <StyledImage
      $backgroundImageUrl={$backgroundImageUrl}
      $backgroundSize={$backgroundSize}
      $imageRatio={$imageRatio}
    >
      <div className="image"></div>
    </StyledImage>
  );
};

const StyledImage = styled.div`
  width: 100%;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: ${(props) => 100 * props.$imageRatio}%;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${(props) => props.$backgroundSize};
    background-image: url(${(props) => props.$backgroundImageUrl});
  }
`;

const BackgroundImage = (props) => {
  return (
    <Image
      $backgroundImageUrl={props.$backgroundImageUrl}
      $backgroundSize="cover"
      $imageRatio={imgRatio}
      {...props}
    />
  );
};

const CardImage = (props) => {
  return (
    <Image
      $backgroundImageUrl={props.$backgroundImageUrl}
      $backgroundSize="contain"
      $imageRatio={imgRatio}
      {...props}
    />
  );
};

const LogoImage = (props) => {
  return (
    <Image
      $backgroundImageUrl={props.$backgroundImageUrl}
      $backgroundSize="contain"
      $imageRatio={1}
      {...props}
    />
  );
};

const ProductImage = (props) => {
  return (
    <Image
      $backgroundImageUrl={props.$backgroundImageUrl}
      $backgroundSize="contain"
      $imageRatio={imgRatio}
      {...props}
    />
  );
};

export { BackgroundImage, CardImage, LogoImage, ProductImage };
