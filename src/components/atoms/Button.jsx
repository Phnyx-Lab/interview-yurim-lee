import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledButton = styled(MuiButton)`
  width: 100px;
  height: 40px;
  background-color: #7579EE;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  box-shadow:none;
  &:hover {
    background-color: #686cd9;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton variant="contained" disableFocusRipple disableRipple onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;