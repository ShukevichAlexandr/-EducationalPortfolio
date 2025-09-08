import photo from '../../../assets/images/mainImg.webp'; 
import { Container } from "../../../components/Container"; 
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { S } from './Main_Styles';





export const Main:React.FC = () => {
  return (
    <S.StyledMain  id="main"> 
      <Container>
        <S.ImageContainer>
          <S.Photo src={photo} alt="фотография избранного поста" />
          <S.ShadowOverlay/>
          </S.ImageContainer>
          <S.PositionWraper>
          <FlexWrapper direction="column"  maxWidth="804px" minHeight="400px" >
            <S.UpperCaseText >POSTED ON <S.BoldWord>STARTUP</S.BoldWord></S.UpperCaseText>
            <S.MainTitle id="postedOnStartup">Step-by-step guide to choosing great font pairs</S.MainTitle>
            <S.PostMetadata htmlFor="postedOnStartup" className="postMetadata">By <S.Name className="nameAutor" href="">James West</S.Name> | May 23, 2022</S.PostMetadata>
            <S.SmallText >Duis aute irute dolor in reprehenderit in voluptate valit essce cillum dolor eu
              fugiat nulia pariatur. Excepteur sint occaecat cupidatat non proident.</S.SmallText>
              <Button>{'Read More >'}</Button> 
          </FlexWrapper>
        </S.PositionWraper>
      </Container>
    </S.StyledMain>
  );
};





