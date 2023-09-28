import { StyledRow, StyledColumn, HairstylistImage } from "../common";
import { hairstylists } from "../../data/hairstylists";
import { styled } from "styled-components";
import { Grid } from "@mui/material";

const StyledImgContainer = styled.div`
  padding-bottom: 8px;
`;
const StyledDescriptionContainer = styled.div`
  text-align: left;
`;

const HairstylistList = () => {
  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {hairstylists.map((hairstylist) => (
        <Grid item xs={12} md={6}>
          <StyledImgContainer>
            <HairstylistImage $backgroundImageUrl={hairstylist.imgUrl} />
          </StyledImgContainer>
          <StyledDescriptionContainer>
            <p>{hairstylist.description}</p>
          </StyledDescriptionContainer>
        </Grid>
      ))}
    </Grid>
  );
};

export default HairstylistList;
