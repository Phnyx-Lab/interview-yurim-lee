import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled(Box, { shouldForwardProp: (prop) => prop !== "isExpanded" })`
  flex: 1;
  height: ${({ isExpanded }) => (isExpanded ? "100%" : "70%")};
  background-color: #f9fafc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.3s ease-in-out;
`;

const OutputBox = ({ isExpanded }) => {
  return <Wrapper isExpanded={isExpanded}>{/* Content */}</Wrapper>;
};

export default OutputBox;