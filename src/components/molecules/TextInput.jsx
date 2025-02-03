import { Box, Typography, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Button from "../atoms/Button";
import SelectBox from "../atoms/SelectBox";
import { useState } from "react";
import PropTypes from "prop-types";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1; 
  gap: 12px;
  border-radius: 10px;
  background-color: white;
  position: relative;
  height: ${({ isExpanded }) => (isExpanded ? "100%" : "70%")}; 
  transition: height 0.3s ease-in-out;
`;

const StyledTextArea = styled(TextField)`
  width: 100%;
  height: 100%;
  flex: 1; 
  border-radius: 10px;
  background-color: white;

  & .MuiOutlinedInput-root {
    border-radius: 10px;
    font-size: 14px;
    padding: 12px;
    height: 100%;
  }

  & .MuiOutlinedInput-root.Mui-focused {
    border-color: #6246ea;
    box-shadow: none;
  }
`;

const OptionbarContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const AbsoluteContainer = styled(Box)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CharacterCounter = styled(Typography)`
  font-size: 12px;
  color: gray;
`;

const TextInput = ({ isExpanded }) => {
  const [countText, setCountText] = useState(0);

  return (
    <Container isExpanded={isExpanded}>
      {/* Option Selection Bar */}
      <OptionbarContainer>
        <SelectBox
          options={[
            { value: "normal", label: "기본" },
            { value: "italic", label: "격자" },
            { value: "aligned", label: "초록" },
            { value: "list", label: "표" },
          ]}
          defaultValue="normal"
        />

        <SelectBox
          options={[
            { value: "short", label: " 짧게" },
            { value: "normal", label: "보통" },
            { value: "long", label: "길게" },
          ]}
          defaultValue="normal"
        />
      </OptionbarContainer>

      <Box position="relative" height="100%">
        <StyledTextArea
          multiline
          rows={isExpanded ? 40 : 20} 
          placeholder="요약할 텍스트를 입력해 주세요"
          variant="outlined"
          onChange={(e) => setCountText(e.target.value.length)}
        />

        <AbsoluteContainer>
          <CharacterCounter>{countText}/20000</CharacterCounter>
          <Button onClick={() => console.log("요약하기 버튼 클릭")}>
            요약하기
          </Button>
        </AbsoluteContainer>
      </Box>
    </Container>
  );
};
TextInput.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default TextInput;
