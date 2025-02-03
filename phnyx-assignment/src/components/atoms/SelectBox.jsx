 /* eslint-disable react/prop-types */
import { Select, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { KeyboardArrowDown } from "@mui/icons-material";

const StyledSelect = styled(Select)`
  background-color: transparent;
  font-size: 15px;
  font-weight: 400;
  color: #3c3c3c;

  & .MuiOutlinedInput-notchedOutline {
    border: none; 
  }

  &:hover {
    background-color: transparent;
  }

  &.Mui-focused {
    background-color: transparent;
    box-shadow: none;
  }

  & .MuiSelect-select {
    display: flex;
    align-items: center;
    padding-right: 0px !important; 
  }

  & .MuiSelect-icon {
    color: #808080;
    margin-left: -80px; 
  }
`;

const SelectBox = ({ options, defaultValue }) => {
  return (
    <StyledSelect
      defaultValue={defaultValue}
      IconComponent={KeyboardArrowDown} 
      sx={{ minWidth: 120, height: 40 }}
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default SelectBox;