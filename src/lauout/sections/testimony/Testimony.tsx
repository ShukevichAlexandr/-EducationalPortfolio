import styled from "styled-components"
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/images/JonatanVallem.webp'; 
import { theme } from "../../../styles/Theme";
import arrowLeft from '../../../assets/images/svg/ArrowLeft.svg'
import arrowRight from '../../../assets/images/svg/ArrowRirht.svg'

export const Testimony = () => {
return (
    <StyleTestimony>
        <Container>

            <ResponsiveFlexWrapper1 padding={'0 80px'} >
                <FlexWrapper>
                <ResponsiveFlexWrapper4 direction={'column'} maxWidth={'349px'} margin={'92px 120px 0 0'} minWidth={'225px'}>
                        <DescriptionBlock>TESTIMONIALs</DescriptionBlock>
                        <MainTitleTestimony>What people say about our blog</MainTitleTestimony>
                        <TextTestimony>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</TextTestimony>
                
                </ResponsiveFlexWrapper4>
                <CenterLine/>
                </FlexWrapper>

                

                <ResponsiveFlexWrapper3 direction="column" maxWidth="555px" margin={'0 0 0 120px'}>
                    <SubTitleTestimony>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</SubTitleTestimony>
                    <ResponsiveFlexWrapper2 margin={'0 0 75px 0'} maxWidth={'260px'} >
                        <FlexWrapper gap={'16px'} maxWidth={'250px'} >
                                <Photo src={photo} alt="" />
                                <FlexWrapper direction={'column'} maxWidth={'193px'} margin={'0 141px 0 0'}>
                                    <AutorsName>Jonathan Vallem</AutorsName>
                                    <Address>New york, USA</Address>
                                </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper height={'62px'} align={'center'}  gap={'24px'}  margin={'0 auto'} maxWidth={'250px'}>
                            <ButtonBackBlock>
                                <BackButton><img src={arrowLeft} alt="" /></BackButton>
                            </ButtonBackBlock>
                            <ButtonNextBlock>
                                 <NextButton><img src={arrowRight} alt="" /></NextButton>
                            </ButtonNextBlock>
                        </FlexWrapper>

                    </ResponsiveFlexWrapper2>

                </ResponsiveFlexWrapper3>

            </ResponsiveFlexWrapper1>
        </Container>
    </StyleTestimony>
)
}

const StyleTestimony = styled.section`
margin: 96px auto;
    max-width:1440px ;
    height: 100%;
    background-color: ${theme.colors.lightYellow};
`
const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:875px) {
    flex-direction: column;
}

@media (max-width:500px) {
    padding: 0 20px;
}
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:1120px) {
    flex-wrap: wrap;
}
`


const ResponsiveFlexWrapper3 = styled(FlexWrapper)`

@media (max-width:1000px) {
    max-width: 300px;
}
    @media (max-width: 875px){
    max-width: 600px;
    margin: 0 auto;
}

`

const ResponsiveFlexWrapper4 = styled(FlexWrapper)`

    @media (max-width: 875px){
    max-width: 600px;
    margin: 92px auto 0;
}

`

const CenterLine = styled.div`
    background-color: #DCDCDC; 
    width: 1px;                
    height: 310px;            
    margin:auto 0 ;
    transform: translateX(-50%); /* Для точного централирования */

    @media (max-width:875px) {              
        height: 0; 
        width: 0;
}
`




const Photo = styled.img`
width: 48px;
height: 48px;
object-fit: cover;
border-radius: 50%;
position: relative;
`


const TextTestimony = styled.p`
color: ${theme.colors.mediumGrey};

@media (max-width:875px) {
        margin: 0 auto ;
}
`

const Address = styled.span`
color: ${theme.colors.mediumGrey};
`

const SubTitleTestimony = styled.h4`
max-width: 400px;
min-height: 280px;

color: ${theme.colors.black};
margin:80px 0 0 0;

@media (max-width:875px) {
        margin: 80px auto 0;
        max-width: 600px;
        min-height: 150px;
}

`
const MainTitleTestimony = styled.h2`
color: ${theme.colors.black};
margin-bottom: 10px;
@media (max-width:875px) {
        margin: 0 auto 10px;
}
`


const AutorsName = styled.h4`
width: 193px;
color: ${theme.colors.black};
`


const DescriptionBlock = styled.span`
margin-bottom: 10px;
letter-spacing: 3px;
text-transform: uppercase;
color: ${theme.colors.black};

@media (max-width:875px) {
        margin: 0 auto 10px;
}
`


const ButtonBackBlock = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
`



const BackButton = styled.button`
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

const ButtonNextBlock = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
`


const NextButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: black;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;


    &:Hover{
        position: absolute;
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px; 
        transition: 0.5s ;
    }
`



