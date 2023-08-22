import { styled } from "styled-components";
import { about1Img, jumbotron1Img } from "../../images";
import {
  LogoLink,
  StyledContainer,
  StyledColumn,
  StyledRow,
  StyledLink,
  BackgroundImage,
} from "../../components/common";
import { brands, brand1Products, brand2Products } from "../../data/products";
import { ProductSummary } from "../../components/products";
const allBrandProducts = [brand1Products, brand2Products];

const HomePage = () => {
  return (
    <main>
      {/* jumbotron */}
      <StyledJumbotron>
        <div className="jumbotron__mask"></div>
        <div className="jumbotron__title">
          <LogoLink $logoWidth={"128px"} />
        </div>
      </StyledJumbotron>

      {/* about-summary */}
      <StyledAboutSummary>
        <StyledContainer>
          <div className="about-summary__title">
            <h2>About</h2>
          </div>
          <StyledRow>
            <StyledColumn $num={6}>
              <div className="about-summary__content">
                <h3>Since 1999</h3>
                <p>
                  feeltc jllee jede scoot koop jssgo cdoee cxool koop jssg
                  cdoeede scode sco joo cxoolo op jssgo cdoeede sco jdie kdke
                  cxoolltc jllltc jll go cdoeedgo cdoeed
                </p>
                <div>
                  <StyledLink $primary to={"/about"}>
                    More
                  </StyledLink>
                </div>
              </div>
            </StyledColumn>
            <StyledColumn $num={6}>
              <BackgroundImage $backgroundImageUrl={about1Img} />
            </StyledColumn>
          </StyledRow>
        </StyledContainer>
      </StyledAboutSummary>

      {/* products-summary */}
      <StyledProductSummary>
        <StyledContainer>
          <div className="products-summary__title">
            <h2>Products</h2>
          </div>
          <ProductSummary brands={brands} allBrandProducts={allBrandProducts} />
          <footer className="products-summary__footer">
            <p>Find the best product for you!</p>
            <StyledLink $primary to={"/products"}>
              Search
            </StyledLink>
          </footer>
        </StyledContainer>
      </StyledProductSummary>
    </main>
  );
};

const StyledJumbotron = styled.section`
  padding: 240px 0px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${jumbotron1Img});

  .jumbotron__mask {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .jumbotron__title {
    font-size: 48px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledAboutSummary = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .about-summary__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
  .about-summary__content {
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
      padding-bottom: 12px;
      font-size: 16px;
      text-align: justify;
    }
  }
`;

const StyledProductSummary = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;

  .products-summary__title {
    padding-bottom: 32px;
    font-size: 32px;
    text-align: center;
  }
  .products-summary__subtitle {
    padding-bottom: 20px;
    font-size: 30px;
    text-align: center;
  }
  .products-summary__footer {
    p {
      font-size: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
`;
export default HomePage;
