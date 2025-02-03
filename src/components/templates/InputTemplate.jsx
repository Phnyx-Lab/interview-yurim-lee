import { Box, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import ModeSelector from "../molecules/ModeSelector";
import SummaryForm from "../organism/SummaryForm";
import inputmain from "../../assets/icons/inputmain.png";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; /* Fullscreen height */
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  position: relative;
`;

const TopSection = styled(Box, { shouldForwardProp: (prop) => prop !== "isHidden" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: ${({ isHidden }) => (isHidden ? "translateY(-50px)" : "translateY(0)")};
  opacity: ${({ isHidden }) => (isHidden ? "0" : "1")};
  height: ${({ isHidden }) => (isHidden ? "0px" : "auto")};
  overflow: hidden;
`;

const SummaryContainer = styled(Box)`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: height 0.5s ease-in-out;
`;

const InputTemplate = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Divider sx={{ width: "150%", marginBottom: "30px", backgroundColor: "#f7f7f7" }} />

      {/* The Top Section disappears on scroll */}
      <TopSection isHidden={isHidden}>
        <img src={inputmain} alt="inputmain" />
        <Typography variant="h5" fontWeight="bold" mt={2}>
          요약 정리
        </Typography>
        <Typography variant="body2" color="#646464" mt={1} mb={3} fontWeight="300">
          텍스트 또는 문서를 요약해 보세요!
        </Typography>
        <ModeSelector />
      </TopSection>

      {/* SummaryForm Expands When TopSection is Hidden */}
      <SummaryContainer>
        <SummaryForm isExpanded={isHidden} />
      </SummaryContainer>
    </Container>
  );
};

export default InputTemplate;