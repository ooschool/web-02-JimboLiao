import { styled } from "styled-components";
import NavBar from "../common/NavBar";

const RootFooter = () => {
  return (
    <StyledFooter>
      <NavBar />
      <div className="contact-btn">
        <div className="facebook-link">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <div className="map-link">
          <a href="https://maps.google.com" target="_blank">
            <i className="fa-solid fa-map-location-dot"></i>
          </a>
        </div>
      </div>
      <div>
        <p>copyright 2023</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #3072ff;
  padding: 30px 25px;
  color: whitesmoke;

  .contact-btn {
    padding-top: 20px;
    padding-bottom: 50px;
    display: flex;
    font-size: 25px;
  }
  .facebook-link {
    margin-right: 15px;
  }
  p {
    text-align: center;
  }
`;

export default RootFooter;
