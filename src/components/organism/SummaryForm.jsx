import { Box } from "@mui/material";
import styled from "@emotion/styled";
import TextInput from "../molecules/TextInput";
import OutputBox from "../atoms/OutputBox";
import SelectBox from "../atoms/SelectBox";

const Container = styled(Box, { shouldForwardProp: (prop) => prop !== "isExpanded" })`
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: ${({ isExpanded }) => (isExpanded ? "85vh" : "50vh")}; /* Expands when top disappears */
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: height 0.5s ease-in-out;
`;

const Section = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SummaryForm = ({ isExpanded }) => {
  return (
    <Container isExpanded={isExpanded}>
      <Section>
        <TextInput isExpanded={isExpanded} />
      </Section>
      <Section>
        <OutputBox isExpanded={isExpanded} />
      </Section>
    </Container>
  );
};

export default SummaryForm;