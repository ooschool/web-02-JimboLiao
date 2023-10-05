import { Link } from "react-router-dom";
import { styled } from "styled-components";

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

const NavBar = ({ pages }) => {
  return (
    <StyledNav>
      <ul>
        {pages &&
          pages.map((page, index) => (
            <li key={index}>
              <Link to={`/${page}`}>{page.toUpperCase()}</Link>
            </li>
          ))}
      </ul>
    </StyledNav>
  );
};

export default NavBar;
