import { Box, TextField } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box, { shouldForwardProp: (prop) => prop !== "isExpanded" })`
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

const TextInput = ({ isExpanded }) => {
  return (
    <Container isExpanded={isExpanded}>
      <StyledTextArea multiline rows={isExpanded ? 40 : 20} placeholder="요약할 텍스트를 입력해 주세요" variant="outlined" />
    </Container>
  );
};

export default TextInput;