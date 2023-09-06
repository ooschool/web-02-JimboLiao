import { StyledRow, StyledColumn, HairstylistImage } from "../common";
import { hairstylists } from "../../data/hairstylists";
import { styled } from "styled-components";

const HairstylistList = () => {
  return (
    <StyledRow>
      {hairstylists.map((hairstylist) => (
        <StyledColumn $num={6}>
          <HairstylistImageContainer>
            <HairstylistImage $backgroundImageUrl={hairstylist.imgUrl} />
          </HairstylistImageContainer>
          <HairstylistDescription>
            <p>{hairstylist.description}</p>
          </HairstylistDescription>
        </StyledColumn>
      ))}
    </StyledRow>
  );
};

const HairstylistImageContainer = styled.div`
  padding-bottom: 8px;
`;
const HairstylistDescription = styled.div`
  text-align: left;
`;

export default HairstylistList;
