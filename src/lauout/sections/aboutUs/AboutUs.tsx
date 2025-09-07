import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { S } from "./AboutUs_Styles"

export const AboutUs:React.FC = () => {
return (
    <S.AboutUs id="about-us">
        <Container>

            <FlexWrapper max-width="1440px" direction={'row-reverse'} height={'23px'}>
                <S.ColorPaginationRights></S.ColorPaginationRights>
                <S.ColorPaginationLeft></S.ColorPaginationLeft>
            </FlexWrapper>

            <S.BackgroundBlock >

                <S.ResponsiveFlexWrapper1  gap={'30px'} maxWidth={'1200px'} width="100%"  padding="0 80px">

                    <S.ResponsiveFlexWrapper2 className={'leftSideAboutAs'}  maxWidth={'515px'}  padding={'80px 0 0 0'} direction={'column'}>
                        <S.CommitForBlock>ABOUT US</S.CommitForBlock>
                        <S.TitleLeftSide>We are a community of content writers who share their learnings</S.TitleLeftSide>
                        <S.TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</S.TextBlocks>
                        <S.Link href="">{'Read More >'}</S.Link>
                    </S.ResponsiveFlexWrapper2>

                    <S.ResponsiveFlexWrapper3 className={'RightSideAboutAs'} maxWidth={'516px'}  padding={'80px 0 0 0'} direction={'column'}>
                        <S.CommitForBlock>Our mision</S.CommitForBlock>
                        <S.TitleRightSide>Creating valuable content for creatives all around the world</S.TitleRightSide>
                        <S.TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</S.TextBlocks>
                    </S.ResponsiveFlexWrapper3>

``                 </S.ResponsiveFlexWrapper1>

            </S.BackgroundBlock>   
                    
        </Container>
    </S.AboutUs>
)
}


