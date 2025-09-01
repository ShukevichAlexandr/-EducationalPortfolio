import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"

export const    AboutUs = () => {
return (
    <StyledAboutUs>
        <Container>
            <FlexWrapper max-width="1440px" direction={'row-reverse'} height={'23px'}>
            <ColorPaginationRights></ColorPaginationRights>
            <ColorPaginationLeft></ColorPaginationLeft>
            </FlexWrapper>
            <BackgroundBlock >
            <ResponsiveFlexWrapper1  gap={'100px'} maxWidth={'1200px'} width="100%"  padding="0 80px">
                <ResponsiveFlexWrapper2 className={'leftSideAboutAs'}  maxWidth={'515px'}  padding={'96px 0 0 0'} direction={'column'}>
                    <CommitForBlock>ABOUT US</CommitForBlock>
                    <TitleLeftSide>We are a community of content writers who share their learnings</TitleLeftSide>
                    <TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TextBlocks>
                    <Link href="">{'Read More >'}</Link>
                </ResponsiveFlexWrapper2>

                <ResponsiveFlexWrapper3 className={'RightSideAboutAs'} maxWidth={'516px'}  padding={'80px 0 0 0'} direction={'column'}>
                    <CommitForBlock>Our mision</CommitForBlock>
                    <TitleRightSide>Creating valuable content for creatives all around the world</TitleRightSide>
                    <TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</TextBlocks>
                </ResponsiveFlexWrapper3>
            </ResponsiveFlexWrapper1>
            </BackgroundBlock>
            
        </Container>
    </StyledAboutUs>
)
}

const StyledAboutUs = styled.section`
max-height: 523px;
margin-top: 130px;

@media (max-width:900px) {
    max-width: none;
    flex-direction: column;
    gap: 30px;
    min-height:1000px ;
}
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:900px) {
    margin-left: 80px;
    flex-direction: column;
    gap: 30px;
    max-width: 400px;
    padding: 0;
}
    

@media (max-width:500px) {
        padding:0;
        margin: 0 20px;
        max-width: 420px;
    }
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:900px) {
    max-width: 500px;
    padding:96px 0 0 0 ;
}
`

const ResponsiveFlexWrapper3 = styled(FlexWrapper)`

@media (max-width:900px) {
    max-width: 500px;
    padding: 40px 0 0 0;
}
`


const ColorPaginationLeft = styled.div`
    background-color: ${theme.colors.yellow};
    width: 779px ;
    height: 23px;
`

const ColorPaginationRights = styled.div`
    background-color: ${theme.colors.purple};  
    width: 282px ;
    height: 23px;
`

const BackgroundBlock = styled.div`
    background-color: ${theme.colors.lavender};
    @media (max-width:900px) {
    flex-direction: column;
    gap: 30px;
    min-height:1000px ;
}
`

const TextBlocks = styled.p`
    color: ${theme.colors.mediumGrey};    
    max-width: 460px;

    @media (max-width:1200px) {
        max-width: 420px;
}

@media (max-width:900px) {
        max-width: 500px;
}

    @media (max-width:900px) {
        max-width: 600px;
}
`

const Link = styled.a`
    padding-top: 16px;
    color: ${theme.colors.purple};
    max-width: 120px;
    
`
const CommitForBlock = styled.span`
padding: 24px 0 8px ;
max-width: 120px;
height: 52px;
    color: ${theme.colors.black};
`

const TitleLeftSide = styled.h2`
color: ${theme.colors.black};   
max-width: 460px;
padding: 16px 0;

@media (max-width:1200px) {
        max-width: 420px;
}

@media (max-width:900px) {
        max-width: 500px;
}

@media (max-width: 573px) {
max-width: 380px;    
}
`

const TitleRightSide = styled.h2`
color: ${theme.colors.black};   
max-width: 460px;
padding-bottom: 16px;
padding-top: 26px;
@media (max-width:1200px) {
        max-width: 420px;
}

@media (max-width:900px) {
        max-width: 500px;
}

@media (max-width: 573px) {
max-width: 420px;    
}
`
