import { styled } from "styled-components";
import LogoLink from "../../components/LogoLink";
import {
  StyledColumn,
  StyledContainer,
  StyledRow,
} from "../../components/StyledLayout";
import { StyledButton } from "../../components/StyledButton";
import Image from "../../components/Image";
import aboutImg from "../../images/about-1.png";
import productImg_1_1 from "../../images/products-1-1.png";
import productImg_1_2 from "../../images/products-1-2.png";
import productImg_1_3 from "../../images/products-1-3.png";
import productImg_1_4 from "../../images/products-1-4.png";
import productImg_1_5 from "../../images/products-1-5.png";
import productImg_2_1 from "../../images/products-2-1.png";
import productImg_2_2 from "../../images/products-2-2.png";
import ProductCard from "../../components/ProductCard";
import jumbotronImg from "../../images/jumbotron-1.png";

const brand1_products = [
  {
    id: 101,
    url: productImg_1_1,
    title: "Shampoo",
    price: 230,
    des: "ajoppe lsttdo jfek bvnoo",
  },
  {
    id: 102,
    url: productImg_1_2,
    title: "Conditioner",
    price: 180,
    des: "abouc gooct povgooct pov okr bvn joggert avvieate overation",
  },
  {
    id: 103,
    url: productImg_1_3,
    title: "Pomade",
    price: 350,
    des: "rt avvi eate overation gert",
  },
  {
    id: 104,
    url: productImg_1_4,
    title: "Shampoo",
    price: 400,
    des: "fjeitg oostw gowb jodeg jgeatt opyedg",
  },
  {
    id: 105,
    url: productImg_1_5,
    title: "Conditioner",
    price: 360,
    des: "eitg oostw go eate overati oostw gowb jod",
  },
];

const brand2_products = [
  {
    id: 201,
    url: productImg_2_1,
    title: "Hair oil",
    price: 450,
    des: "ggert avvieate overati",
  },
  {
    id: 202,
    url: productImg_2_2,
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

const brand1_chunks = chunkArray(brand1_products, 3);
const brand2_chunks = chunkArray(brand2_products, 3);

const Home = () => {
  return (
    <main>
      {/* jumbotron */}
      <StyledJumbotron>
        <div className="jumbotron__mask"></div>
        <div className="jumbotron__title">
          <LogoLink />
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
              <Image $backgroundImageUrl={aboutImg}></Image>
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
          {brand1_chunks.map((chunk, rowIdx) => (
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
          {brand2_chunks.map((chunk, rowIdx) => (
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
  background-image: url(${jumbotronImg});

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
export default Home;
