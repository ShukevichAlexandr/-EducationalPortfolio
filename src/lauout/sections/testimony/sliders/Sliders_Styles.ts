import { FlexWrapper } from '../../../../components/FlexWrapper';
import styled from 'styled-components';

const Sliders = styled.div`
    display: flex;
    position: relative;

    @media (max-width:1250px) {
    flex-direction: column;
}
    
`
const ResponsiveFlexWrapper = styled(FlexWrapper)`
  align-items: flex-end;
  margin: auto 0;
  width: 140px;
  position: absolute;
  right: 20px;
  bottom: 76px;
  height: 68px;


  @media (max-width:1250px) {
    /* max-width: 300px;
    margin: 0 0 40px 120px; */
      right: 20px;
  bottom: 76px;
}


  @media (max-width:1000px) {
    /* max-width: 300px;
    margin: 0 0 40px 120px; */
      right: -20px;
  bottom: 76px;
}

  @media (max-width:875px) {
      right: 80px;
  bottom: 76px;
}

  @media (max-width:465px) {
      right: 20px;
  bottom: 76px;
}



@media (max-width:400px) {
    right: -5px;
    bottom: 76px;
}


@media (max-width:400px) {
    right: -25px;
    bottom: 76px;
}

`



const ButtonBackBlock = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
`


const BtnNext = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: black;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;

    &:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`
const BtnPrev = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: aliceblue;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;

&:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`
export const S = {
    Sliders,
    ResponsiveFlexWrapper,
    ButtonBackBlock,
    BtnNext,
    BtnPrev
}