import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import photo from "../../../assets/images/specialPostImg.webp"
import { Button } from "../../../components/Button"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

export const CpecialPost = () => {
return (
    <StyleCpecialPost>
        <Container>
            <ResponsiveFlexWrapper1>
                <Photo src={photo} alt="" />
                <PositionWrapper>
                        <ResponsiveFlexWrapper3 direction={'column'}>
                        <CommitForBlock>Why we started </CommitForBlock>
                        <FavoriteTitle>It started out as a simple idea and evolved into our passion</FavoriteTitle>
                        <TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</TextBlocks>
                        <ResponsiveFlexWrapper2>

                        <ButtonResponsive width={'269px'} height={'56px'} background={'#FFD050'}>{'Discover our story >'}</ButtonResponsive>
                        </ResponsiveFlexWrapper2>                    
                    </ResponsiveFlexWrapper3>
                </PositionWrapper>

            </ResponsiveFlexWrapper1>
        </Container>
    </StyleCpecialPost>
)
}

const StyleCpecialPost = styled.section`
    max-width: 1440px;
    width: 100%;
    margin: 128px auto;
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
min-height: 920px;
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

`


const ResponsiveFlexWrapper3 = styled(FlexWrapper)`
    padding: 0 80px;

    @media (max-width: 900px) {
        padding: 0 40px;  
    }

    @media (max-width: 550px) {
        padding: 0 20px;  
    }

    @media (max-width: 550px) {
        padding: 0 5px;  
    }

`

const ButtonResponsive = styled(Button)`

    @media (max-width: 600px) {
            margin-right: 20px ;  
    }
`
const Photo = styled.img`
    max-width: 950px;
    width: 100%;
    height: 705px;
    padding-left: 80px;
    object-fit: cover;
    @media (max-width: 930px) {
            padding: 0 ;  
    }

`

const CommitForBlock = styled.span`
        color: ${theme.colors.black};
        padding: 80px 0 24px ;
        max-width: 220px;
        @media (max-width: 1000px) {
            padding: 80px 0 24px 0;    
        }
`

const FavoriteTitle = styled.h1`
    ${font({family: "'inter', sans-serif", weight: 700, Fmax:48, Fmin:20})};
    letter-spacing: -0.004em;



    color: ${theme.colors.black};
    padding: 0 80px 0 0;
    @media (max-width: 1000px) {
            padding: 0 0 16px 0;    
        }
`
const TextBlocks = styled.p`
    color: ${theme.colors.mediumGrey};      
    padding: 0 0 32px 0;
    @media (max-width: 1000px) {
            padding: 0 0 32px 0;    
        }
`

const PositionWrapper = styled.div`
    margin:121px 0 0 0;
    max-width: 706px;
    max-height: 584px;
    height: 100%;
    position: absolute;
    left: 45%;
    right: 0;
    display: flex;
    flex-grow: 1;
        
    background-color: ${theme.colors.font};


    @media (max-width: 600px) {
        left: 35%;    
        }
`