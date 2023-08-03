import { styled } from "styled-components";

const IMGRATIO = 3 / 4; // height/ width

const Image = (props) => {
  return (
    <StyledBackgroundImage
      $backgroundImageUrl={props.$backgroundImageUrl}
      $contain={props.$contain}
    >
      <div className="image"></div>
    </StyledBackgroundImage>
  );
};

const StyledBackgroundImage = styled.div`
  width: 100%;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: ${100 * IMGRATIO}%;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${(props) => (props.$contain ? "contain" : "cover")};
    background-image: url(${(props) => props.$backgroundImageUrl});
  }
`;

export default Image;
