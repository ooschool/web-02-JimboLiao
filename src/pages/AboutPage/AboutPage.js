import { styled } from "styled-components";
import { about1Img } from "../../images";
import { useEffect } from "react";
import {
  StyledRow,
  StyledContainer,
  StyledColumn,
  BackgroundImage,
} from "../../components/common";
import { HairstylistList } from "../../components/about";
import { Grid } from "@mui/material";

const StyledAboutStory = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  .about-story__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
  .about-story__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      padding-bottom: 20px;
      font-size: 24px;
      text-align: center;
    }
    p {
      font-size: 16px;
      text-align: justify;
    }
  }
`;

const StyledAboutHairstylists = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  .about-hairstylists__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
`;

const StyledAboutContact = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  .about-contacts__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
  .about-contacts__description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      line-height: 24px;
    }
  }
`;
const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 320px;
`;

const AboutPage = () => {
  // window scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <StyledAboutStory>
        <StyledContainer>
          <div className="about-story__title">
            <h2>Our Story</h2>
          </div>
          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item xs={12} md={6}>
              <div className="about-story__content">
                <h3>Since 1999</h3>
                <p>
                  feeltc jllee jede scoot koop jssgo cdoee cxool koop jssg
                  cdoeede scode sco joo cxoolo op jssgo cdoeede sco jdie kdke
                  cxoolltc jllltc jll go cdoeedgo cdoeed
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <BackgroundImage $backgroundImageUrl={about1Img} />
            </Grid>
          </Grid>
        </StyledContainer>
      </StyledAboutStory>

      <StyledAboutHairstylists>
        <StyledContainer>
          <div className="about-hairstylists__title">
            <h2>Hairstylists</h2>
          </div>
          <HairstylistList />
        </StyledContainer>
      </StyledAboutHairstylists>
      <StyledAboutContact>
        <StyledContainer>
          <div className="about-contacts__title">
            <h2>Contact us</h2>
          </div>
          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item xs={12} md={6}>
              <StyledIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.2727851481673!2d120.43649137519725!3d24.056696578462606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346946088f1e1a99%3A0xfcd8db491c82e69d!2z6auu6LyvIOWJqueHmeafkw!5e0!3m2!1szh-TW!2stw!4v1693986062145!5m2!1szh-TW!2stw"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></StyledIframe>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="about-contacts__description">
                <p>Address : 彰化縣鹿港鎮鹿東路40號</p>
                <p>TEL : 04-7777569</p>
              </div>
            </Grid>
          </Grid>
        </StyledContainer>
      </StyledAboutContact>
    </main>
  );
};

export default AboutPage;
