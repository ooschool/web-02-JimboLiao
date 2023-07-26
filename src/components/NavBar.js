import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavBar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    align-items: center;
  }

  ul > li {
    margin-right: 25px;
  }
`;
