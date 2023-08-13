import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";
import { styled } from "styled-components";
import LogoLink from "../common/LogoLink";

const RootHeader = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <LogoLink />
      </div>
      <div className="btn-container">
        <NavBar />
        <div className="login-btn">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #3072ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;
  top: 0;
  height: 64px;
  width: 100%;
  z-index: 100;

  .logo {
    margin-left: 25px;
  }

  .btn-container {
    display: flex;
  }

  .login-btn {
    margin-right: 25px;
  }
`;

export default RootHeader;
