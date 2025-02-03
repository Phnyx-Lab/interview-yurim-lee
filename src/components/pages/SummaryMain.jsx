import styled from '@emotion/styled';
import SideMenu from '../templates/SideMenu';
import InputTemplate from '../templates/InputTemplate';


//Parent component
const SummaryMain = () => {
  return (
    <Wrapper>
      <SideMenu />
      <InputTemplate />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #151419 ;
    `;

export default SummaryMain
