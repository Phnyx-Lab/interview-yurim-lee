import { Box, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ModeSelector from "../molecules/ModeSelector";
import SummaryForm from "../organism/SummaryForm";
import inputmain from "../../assets/icons/inputmain.png";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  position: relative;
`;

const DividerStyled = styled(Divider)`
  width: 100%;
  margin-bottom: 30px;
  background-color: #f7f7f7;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const Subtitle = styled(Typography)`
  font-size: 15px;
  color: #646464;
  margin: 5px 0 30px 0;
  font-weight: 300;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const TopSection = styled(Box)`
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
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  transition: height 0.5s ease-in-out;
`;

const InputTemplate = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Disappears when 10% out of view
  });

  useEffect(() => {
    if (!inView) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [inView]);

  return (
    <Container>
      <DividerStyled />
      
      {/* The Top Section disappears on scroll */}
      <TopSection isHidden={isHidden} ref={ref}>
        <img src={inputmain} alt="inputmain" />
        <Title>요약 정리</Title>
        <Subtitle>텍스트 또는 문서를 요약해 보세요!</Subtitle>
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