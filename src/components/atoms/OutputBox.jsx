import { Box } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Wrapper = styled(Box)`
  flex: 1; /* Matches TextInput */
  height: ${({ isExpanded }) => (isExpanded ? "100%" : "70%")}; /* Adjusts height */
  background-color: #f9fafc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.3s ease-in-out;
`;

const OutputBox = ({ isExpanded }) => {
  return (
    <Wrapper isExpanded={isExpanded}>
        {/* <p>OutputBox</p> */}
    </Wrapper>
  );
};
OutputBox.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default OutputBox;
