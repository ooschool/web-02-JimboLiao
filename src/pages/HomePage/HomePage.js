import { styled } from "styled-components";
import {
  brand1Product1Img,
  brand1Product2Img,
  brand1Product3Img,
  brand1Product4Img,
  brand1Product5Img,
  brand2Product1Img,
  brand2Product2Img,
  about1Img,
  jumbotron1Img,
} from "../../images";
import {
  LogoLink,
  StyledContainer,
  StyledColumn,
  StyledRow,
  StyledButton,
  BackgroundImage,
} from "../../components/common";
import { ProductCard } from "../../components/products";

const brand1Products = [
  {
    id: 101,
    url: brand1Product1Img,
    title: "Shampoo",
    price: 230,
    des: "ajoppe lsttdo jfek bvnoo",
  },
  {
    id: 102,
    url: brand1Product2Img,
    title: "Conditioner",
    price: 180,
    des: "abouc gooct povgooct pov okr bvn joggert avvieate overation",
  },
  {
    id: 103,
    url: brand1Product3Img,
    title: "Pomade",
    price: 350,
    des: "rt avvi eate overation gert",
  },
  {
    id: 104,
    url: brand1Product4Img,
    title: "Shampoo",
    price: 400,
    des: "fjeitg oostw gowb jodeg jgeatt opyedg",
  },
  {
    id: 105,
    url: brand1Product5Img,
    title: "Conditioner",
    price: 360,
    des: "eitg oostw go eate overati oostw gowb jod",
  },
];

const brand2Products = [
  {
    id: 201,
    url: brand2Product1Img,
    title: "Hair oil",
    price: 450,
    des: "ggert avvieate overati",
  },
  {
    id: 202,
    url: brand2Product2Img,
    title: "Hail oil",
    price: 350,
    des: "fjeitg oostw gow",
  },
];

// slice array into smaller arrays
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const brand1Chunks = chunkArray(brand1Products, 3);
const brand2Chunks = chunkArray(brand2Products, 3);

const HomePage = () => {
  return (
    <main>
      {/* jumbotron */}
      <StyledJumbotron>
        <div className="jumbotron__mask"></div>
        <div className="jumbotron__title">
          <LogoLink logoWidth={"128px"} />
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
                  <StyledButton $primary to={"/about"}>
                    More
                  </StyledButton>
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
          <div className="products-summary__subtitle">
            <h3>PAUL MITCHELL</h3>
          </div>
          {brand1Chunks.map((chunk, rowIdx) => (
            <StyledRow key={rowIdx}>
              {chunk.map((product) => (
                <StyledColumn $num={4} key={product.id}>
                  <ProductCard
                    $backgroundImageUrl={product.url}
                    cardTitle={product.title}
                    price={product.price}
                    des={product.des}
                  />
                </StyledColumn>
              ))}
            </StyledRow>
          ))}
          <div className="products-summary__subtitle">
            <h3>MOROCCANOIL</h3>
          </div>
          {brand2Chunks.map((chunk, rowIdx) => (
            <StyledRow key={rowIdx}>
              {chunk.map((product) => (
                <StyledColumn $num={4} key={product.id}>
                  <ProductCard
                    $backgroundImageUrl={product.url}
                    cardTitle={product.title}
                    price={product.price}
                    des={product.des}
                  />
                </StyledColumn>
              ))}
            </StyledRow>
          ))}
          <footer className="products-summary__footer">
            <p>Find the best product for you!</p>
            <StyledButton $primary to={"/products"}>
              Search
            </StyledButton>
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
      padding-bottom: 12px;
    }
  }
`;
export default HomePage;
