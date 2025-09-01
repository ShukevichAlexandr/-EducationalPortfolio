import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import photo from "../../../assets/images/specialPostImg.webp"
import { Button } from "../../../components/Button"
import { theme } from "../../../styles/Theme"

export const CpecialPost = () => {
return (
    <StyleCpecialPost>
        <Container>
            <ResponsiveFlexWrapper1>
                <Photo src={photo} alt="" />
                <PositionWrapper>
                        <FlexWrapper direction={'column'}>
                        <CommitForBlock>Why we started </CommitForBlock>
                        <FavoriteTitle>It started out as a simple idea and evolved into our passion</FavoriteTitle>
                        <TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</TextBlocks>
                        <ResponsiveFlexWrapper2>

                        <ButtonResponsive width={'269px'} height={'56px'} background={'#FFD050'} margin={'0 0 0 80px'}>{'Discover our story >'}</ButtonResponsive>
                        </ResponsiveFlexWrapper2>                    
                    </FlexWrapper>
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

@media (max-width:675px) {
   min-height: 1000px;
}
    @media ${theme.media.mobil} {
   
}`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:675px) {
   min-height: 1000px;
}
    @media ${theme.media.mobil} {
   
}`

const ButtonResponsive = styled(Button)`
    margin: 0 0 0 20px;
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
        padding: 80px 0 24px 80px;
        max-width: 220px;
        @media (max-width: 1000px) {
            padding: 20px 0 24px 20px;    
        }
`

const FavoriteTitle = styled.h1`
    color: ${theme.colors.black};
    padding: 0 80px 16px;
    @media (max-width: 1000px) {
            padding: 0 20px 16px;;    
        }
`
const TextBlocks = styled.p`
    color: ${theme.colors.mediumGrey};      
    padding: 0 80px 32px ;
    @media (max-width: 1000px) {
            padding: 0 20px 32px;;    
        }
`

const PositionWrapper = styled.div`
margin:121px 0 0 0;
max-width: 706px;
max-height: 584px;
    /* width: 100%; */
    height: 100%;
    position: absolute;
    left: 45%;
    right: 0;
    display: flex;
    flex-grow: 1;
        
    background-color: ${theme.colors.font};
`