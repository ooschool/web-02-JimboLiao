import {
  brand1Product1Img,
  brand1Product2Img,
  brand1Product3Img,
  brand1Product4Img,
  brand1Product5Img,
  brand2Product1Img,
  brand2Product2Img,
} from "../images";

const brandNames = ["Paul Michael", "Moroccanoil"];

const brands = [
  {
    id: "001",
    brandName: brandNames[0],
    description:
      "asjdfl joe commant mountter comenet coatpe jlcgjeo abberaviation volunt runambur teeosse zoe flusert lppuscri sop fjteak abektor commauetn",
  },
  {
    id: "002",
    brandName: brandNames[1],
    description:
      "asjdfl joe commant mountter comenet coatpe jlcgjeo abberaviation volunt runambur teeosse zoe flusert lppuscri sop fjteak abektor commauetn",
  },
];

const productCategory = ["Shampoo", "Conditioner", "Pomade", "Hair oil"];

const products = [
  {
    id: "101",
    productName: "product name",
    category: "Shampoo",
    brand: brands[0].brandName,
    price: 230,
    imgUrl: brand1Product1Img,
    reserve: 5,
    description: "ajoppe lsttdo jfek bvnoo",
    detail:
      "jfeog jdoglw ccojtex lj4tje gfjiordsjlkg, jorvhe febbwemy, dljtwao. docmteh dktjeosy kldt lemmor kdwaa thep eojtole, jlteo. jifoyek jtiee, lkdmemy. jkydjomyeo, klsafjlye kdlsgre omportjd yjelxoysemy aahnkle mdktla  jkdoaaam rhyel jym lpydblrj igorjlahykl jooer, yjoas. jaltjam kejtoa jdia klrtjl comte jyoahyelv  opye eitjtoa ekjymme layeo meoyte yetelah.",
  },
  {
    id: "102",
    productName: "product name",
    category: "Conditioner",
    brand: brands[0].brandName,
    price: 180,
    imgUrl: brand1Product2Img,
    reserve: 3,
    description: "abouc gooct povgooct pov okr bvn joggert avvieate overation",
    detail:
      "fjl4ljy jfoejy e0y3ol yjo jrla gjojr4yos jlk, rjroz. rjioysfkep jettommerance loppounity saltum autioppor pacomb boxrinch peacossunity fearoue jamaoran. Contiunity fearouse egominary he febbwemy, dljtwao. docmteh ninjility ",
  },
  {
    id: "103",
    productName: "product name",
    category: "Pomade",
    brand: brands[0].brandName,
    price: 350,
    imgUrl: brand1Product3Img,
    reserve: 3,
    description: "rt avvi eate overation gert",
    detail:
      "fjl4ljy jfoejy e0y3ol yjo jrla gjojr4yos jlk, rjroz. rjioysfkep jettommer pounity saltum autiopp ance loppounity saltum autioppor pacomb boxrinch peacossue jamaoran. Contiunity fearouse egominary ninjility ",
  },
  {
    id: "104",
    productName: "product name",
    category: "Shampoo",
    brand: brands[0].brandName,
    price: 400,
    imgUrl: brand1Product4Img,
    reserve: 3,
    description: "fjeitg oostw gowb jodeg jgeatt opyedg",
    detail:
      "fjl4lgjojr4yos jlk, rjroz. rjioysfkep jettommerance loppounity saltum autioppor pacomb boxrinch peacossue jamaoran. Contiunity fearouse egominary ninjility ",
  },
  {
    id: "105",
    productName: "product name",
    category: "Conditioner",
    brand: brands[0].brandName,
    price: 360,
    imgUrl: brand1Product5Img,
    reserve: 3,
    description: "eitg oostw go eate overati oostw gowb jod",
    detail:
      "jfoejy e0y3ol yjo jrla gk, rjroz. rjioysfkep jettommerance loppounity saltum autioppor pacomb boxrinch peacossue jamaoran. Contiunity fearouse egominary ninjility ",
  },
  {
    id: "201",
    productName: "product name",
    category: "Hair oil",
    brand: brands[1].brandName,
    price: 450,
    imgUrl: brand2Product1Img,
    reserve: 3,
    description: "ggert avvieate overati",
    detail:
      "fjl4ljy j. rjioysfkep jettommerance loppounity saltum autioppor pacomb boxrinch peacossy3ol yjo jrla gjojr4yos jlk, rjroz. rjioysfkep jettommerance loppounity saltum autioppor pacomb boxrinch peacossue jamaoran. Contiunity fearouse egominary ninjility ",
  },
  {
    id: "202",
    productName: "product name",
    category: "Hail oil",
    brand: brands[1].brandName,
    price: 350,
    imgUrl: brand2Product2Img,
    reserve: 3,
    description: "fjeitg oostw gow",
    detail:
      ". rjioysfkep jettoml yjo jrla gjojr4yos jlk, rjroz. rjioysfkep jettommerance loppounity saltum autioppor pacomb boxrinch peacossue jamaoran. Contiunity fearouse egominary ninjility ",
  },
];

function getProductsByBrand(brand) {
  let brandProducts = [];
  products.forEach((product) => {
    if (product.brand === brand) {
      brandProducts.push(product);
    }
  });
  return brandProducts;
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId) || null;
}

export function getBrandByBrandName(brandName) {
  return brands.find((brand) => brand.brandName === brandName) || null;
}

const brand1Products = getProductsByBrand(brands[0].brandName);
const brand2Products = getProductsByBrand(brands[1].brandName);

export {
  brandNames,
  brands,
  brand1Products,
  brand2Products,
  productCategory,
  products,
};
