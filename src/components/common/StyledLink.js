import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  height: 36px;
  line-height: 36px;
  padding: 0 32px;
  min-width: 64px;
  border-radius: 5px;

  font-size: 16px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0;
  overflow: hidden;

  border: 1px solid #3072ff;
  background-color: ${(props) => (props.$primary ? "#3072ff" : "whitesmoke")};
  color: ${(props) => (props.$primary ? "whitesmoke" : "#3072ff")};
`;

export default StyledLink;
