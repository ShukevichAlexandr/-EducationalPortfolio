import styled from "styled-components";
import photo from '../../../assets/images/mainImg.webp'; 
import { Container } from "../../../components/Container"; 
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";





export const Main = () => {
  return (
    <StyledMain> 
      <Container>
        <ImageContainer>
          <Photo src={photo} alt="mainPhoto" />
          <ShadowOverlay/>
        </ImageContainer>
        <PositionWraper>
        <FlexWrapper direction="column" gap={"15px"} maxWidth="804px" minHeight="400px" justify={'space-between'}>
            <UpperCaseText >POSTED ON <BoldWord>STARTUP</BoldWord></UpperCaseText>
            <MainTitle id="postedOnStartup">Step-by-step guide to choosing great font pairs</MainTitle>
            <PostMetadata htmlFor="postedOnStartup" className="postMetadata">By <Name className="nameAutor" href="">James West</Name> | May 23, 2022</PostMetadata>
            <SmallText >Duis aute irute dolor in reprehenderit in voluptate valit essce cillum dolor eu
              fugiat nulia pariatur. Excepteur sint occaecat cupidatat non proident.</SmallText>
              <Button  background={'#FFD050'}>{'Read More >'}</Button> 
          </FlexWrapper>
        </PositionWraper>
      </Container>
    </StyledMain>
  );
};


// const Responsive

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
`;


const Photo = styled.img`
  max-width: 1440px;
  width: 100%;
  height: 720px;
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
  ${font({family: "'Sen', sans-serif", weight: 700, Fmax:56, Fmin:36})};
    color: ${theme.colors.font};
  letter-spacing: -0.035em;
  text-align: left ;
  max-width: 804px;
  
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
${font({family: "'Inter', sans-serif", weight: 600, Fmax:16, Fmin:12})};
letter-spacing: 0.187;
line-height: 20px;
`
const BoldWord = styled.span`
${font({family: "'Inter', sans-serif", weight: 900, Fmax:16, Fmin:12})};
letter-spacing: 0.187;
line-height: 20px; 
`

export default Main;
