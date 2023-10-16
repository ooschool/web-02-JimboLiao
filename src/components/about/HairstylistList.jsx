import { HairstylistImage } from "../common";
import { styled } from "styled-components";
import { Grid } from "@mui/material";
import axios from "axios";
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
    axios
      .get(`http://localhost:4000/hairstylists`)
      .then((response) => {
        // 確保 response.data 是一個陣列
        if (Array.isArray(response.data)) {
          setHairstylists(response.data);
        } else {
          console.error("Error: received data is not an array", response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
