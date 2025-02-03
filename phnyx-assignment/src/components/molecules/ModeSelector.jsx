import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import file from "../../assets/icons/file.png";
import texticon from "../../assets/icons/texticon.png";
import website from "../../assets/icons/website.png";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  border-radius: 24px;
  padding: 4px;
  width: 449px;
  height: 40px;
  background-color: #f9fafc;
`;

const StyledToggleButton = styled(ToggleButton)`
  && {
    text-transform: none;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 20px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px; /* 아이콘과 텍스트 간격 줄이기 */
    transition: all 0.3s ease;
    border: none;
    width: 33.3%;
    background-color: #f9fafc;

    &:hover {
      cursor: pointer;
    }

    &.Mui-selected {
      background-color: #fff;
      color: #6246ea;
      font-weight: 600;
      box-shadow: 0px 0px 6px rgba(98, 70, 234, 0.2);
      border: none;
      border-radius: 20px;
      z-index: 1000;
    }

    img {
      width: 16px;
      height: 16px;
      vertical-align: middle;
    }
  }
`;

const ModeSelector = () => {
  const [mode, setMode] = useState("text");

  const handleModeChange = (_, newMode) => {
    if (newMode !== null) setMode(newMode);
  };

  return (
    <Container>
      <StyledToggleButtonGroup value={mode} exclusive onChange={handleModeChange}>
        <StyledToggleButton value="text" disableRipple disableFocusRipple>
          <img src={texticon} alt="texticon" />
          <span>텍스트</span>
        </StyledToggleButton>
        <StyledToggleButton value="document" disableRipple disableFocusRipple>
          <img src={file} alt="file" />
          <span>문서</span>
        </StyledToggleButton>
        <StyledToggleButton value="website" disableRipple disableFocusRipple>
          <img src={website} alt="website" />
          <span>웹사이트</span>
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Container>
  );
};

export default ModeSelector;