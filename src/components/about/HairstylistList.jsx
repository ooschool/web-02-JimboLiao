import { HairstylistImage } from "../common";
import { styled } from "styled-components";
import { Grid } from "@mui/material";
import { getHairstylistsApi } from "../../api";
import { useState, useEffect } from "react";

const StyledImgContainer = styled.div`
  padding-bottom: 8px;
`;
const StyledDescriptionContainer = styled.div`
  text-align: left;
`;

const HairstylistList = () => {
  const [hairstylists, setHairstylists] = useState([]);
  useEffect(() => {
    const getAndSetHairstylists = async () => {
      const data = await getHairstylistsApi();
      setHairstylists(data);
    };
    getAndSetHairstylists();
  }, []);

  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {hairstylists?.map((hairstylist) => (
        <Grid item xs={12} md={6} key={hairstylist.id}>
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
