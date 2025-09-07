import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const StyledMain = styled.section`
  min-height: 720px;
  height: 100%;
  display: flex; 
`



const PositionWraper = styled.div`
  position: absolute;
  top: 208px;
  padding: 0 80px;
  z-index: 2;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`

const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Полупрозрачная черная тень
  z-index: 1;
  pointer-events: none; // Не взаимодействуем с ним мышкой
  visibility: hidden;   // Скрываем изначально
  transition: visibility 0.3s ease-in-out; // Плавное появление при hover
`

const ImageContainer = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 720px;
  overflow: hidden;
  
  @media (max-width: 450px) {
    height: 820px;
  }
`


const Photo = styled.img`
  max-width: 1440px;
  width: 100%;
  max-height: 720px;
  object-fit: cover;
  transform: scaleX(-1);

  &:hover + ${ShadowOverlay} {
    visibility: visible; // Показываем затемнение при наведении
  }

  @media (max-width: 450px) {
    height: 820px;
  }
`

const MainTitle = styled.h1`
  /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:56, Fmin:36})};
  letter-spacing: -0.035em; */

  color: ${theme.colors.font};
  text-align: left ;
  max-width: 804px;

  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 56px;
  letter-spacing: -0.035em;
  
  @media (max-width:1200px) {
    font-size: 50px;
  }

  @media (max-width:1000px) {
    font-size: 44px;
  }

  @media (max-width:500px) {
    font-size: 38px;
  }
`

const SmallText = styled.p`
max-width: 650px;
width: 100%;
`

const PostMetadata = styled.label`
  
`

const Name = styled.a`
color: ${theme.colors.yellow};
`

const UpperCaseText = styled.span`
/* ${font({family: "'Inter', sans-serif", weight: 600, Fmax:16, Fmin:12})};
letter-spacing: 0.187em;
line-height: 20px; */

font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.187em;
  
  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
`
const BoldWord = styled.span`
  /* ${font({family: "'Inter', sans-serif", weight: 900, Fmax:16, Fmin:12})};
  letter-spacing: 0.187em;
  line-height: 20px;  */

font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 20px; 
  font-size: 16px;
  letter-spacing: 0.187em;
  
  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 13px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
`

export const S = {
    StyledMain,
    PositionWraper,
    ShadowOverlay,
    ImageContainer,
    Photo,
    MainTitle,
    SmallText,
    PostMetadata,
    Name,
    UpperCaseText,
    BoldWord
}


