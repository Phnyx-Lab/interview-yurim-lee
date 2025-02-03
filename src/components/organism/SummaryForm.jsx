import { Box } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import TextInput from "../molecules/TextInput";
import OutputBox from "../atoms/OutputBox";
import SelectBox from "../atoms/SelectBox";

const Container = styled(Box)`
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
  flex: 1; /* Ensures both sections take equal space */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SelectBoxContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 12px;
`;

const SummaryForm = ({ isExpanded }) => {
  const selectLanguageOptions = [
    { value: "korean", label: "한국어" },
    { value: "english", label: "영어" },
    { value: "chinese", label: "중국어" },
  ];

  return (
    <Container isExpanded={isExpanded}>
      <Section>
        <TextInput isExpanded={isExpanded} />
      </Section>

      <Section>
        <SelectBoxContainer>
          <SelectBox options={selectLanguageOptions} defaultValue="korean" />
        </SelectBoxContainer>
        <OutputBox isExpanded={isExpanded} />
      </Section>
    </Container>
  );
};
SummaryForm.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default SummaryForm;
