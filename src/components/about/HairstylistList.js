import { StyledRow, StyledColumn, HairstylistImage } from "../common";
import { hairstylists } from "../../data/hairstylists";
import { styled } from "styled-components";

const StyledImgContainer = styled.div`
  padding-bottom: 8px;
`;
const StyledDescriptionContainer = styled.div`
  text-align: left;
`;

const HairstylistList = () => {
  return (
    <StyledRow>
      {hairstylists.map((hairstylist) => (
        <StyledColumn $num={6}>
          <StyledImgContainer>
            <HairstylistImage $backgroundImageUrl={hairstylist.imgUrl} />
          </StyledImgContainer>
          <StyledDescriptionContainer>
            <p>{hairstylist.description}</p>
          </StyledDescriptionContainer>
        </StyledColumn>
      ))}
    </StyledRow>
  );
};

export default HairstylistList;
