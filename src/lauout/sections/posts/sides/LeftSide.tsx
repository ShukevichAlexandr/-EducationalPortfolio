import { Button } from "../../../../components/Button"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme"
import photo from "../../../../assets/images/featuredPostImg.webp"
import styled from "styled-components"


export const LeftSide = () => {
return (
    <StyleLeftSide>
    <FlexWrapper direction={'column'} height={'48px'} gap={'32px'}>
                        <SubTitle>Featured Post</SubTitle>
                        <FlexWrapper padding="0 0 0 20px" direction={'column'} maxWidth={'733px'}>
                            <Photo src={photo} alt="" />
                            <PostMetadata htmlFor="featuredPost" className="postMetadata">By <Name className="nameAutor" href="">John Doe</Name> | May23, 2022</PostMetadata>


                            <FlexWrapper direction={'column'} minHeight={'320px'}>
                                <SubTitle id="featuredPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</SubTitle>
                                <TextFeaturedPost className={'textFeaturedPost'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</TextFeaturedPost>
                                <Button width={'204px'} height={'56px'} background={'#FFD050'}>{'Read More >'}</Button>
                            </FlexWrapper>

                                
                            </FlexWrapper>

                    </FlexWrapper>

    </StyleLeftSide>
)
}



const StyleLeftSide = styled.div`
    max-width: 733px;
    width: 100%;
    min-height: 805px;
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:875px) {
    flex-direction: column;
}
    @media ${theme.media.mobil} {
   
}`

const Photo = styled.img`

    max-width: 669px;
    min-width: 360px;
    height: 352px;
    width: 100%;
    object-fit: cover;
    padding-bottom: 32px;
`

const SubTitle = styled.h2`
    color: black;
    max-width: 650px;
    padding-bottom: 16px;
    @media (max-width:500px) {
        padding-left: 20px;
    }
`

const PostMetadata = styled.label`
    color: black;
    padding-bottom: 16px;
`

const Name = styled.a`
color: ${theme.colors.purple};
`

const TextFeaturedPost = styled.p`
    color: ${theme.colors.mediumGrey};
    padding-bottom: 32px;
`

