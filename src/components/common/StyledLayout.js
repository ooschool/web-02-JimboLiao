import { styled } from "styled-components";

const GRIDBASE = 12;
const GUTTERWIDTHPX = 32;

const StyledContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${GUTTERWIDTHPX / 2}px;
  padding-right: ${GUTTERWIDTHPX / 2}px;
  text-align: center;
`;

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${-GUTTERWIDTHPX / 2}px;
  margin-right: ${-GUTTERWIDTHPX / 2}px;
  &:not(:last-child) {
    margin-bottom: 64px;
  }
`;

const StyledColumn = styled.div`
  padding-left: ${GUTTERWIDTHPX / 2}px;
  padding-right: ${GUTTERWIDTHPX / 2}px;
  max-width: ${(props) => ((100 * props.$num) / GRIDBASE).toString()}%;
  flex: 0 0 ${(props) => ((100 * props.$num) / GRIDBASE).toString()}%;
`;

export { StyledColumn, StyledRow, StyledContainer };
