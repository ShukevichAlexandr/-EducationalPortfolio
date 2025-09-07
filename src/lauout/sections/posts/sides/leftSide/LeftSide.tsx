import { Button } from "../../../../../components/Button"
import { FlexWrapper } from "../../../../../components/FlexWrapper"
import photo from "../../../../../assets/images/featuredPostImg.webp"
import { S } from "./LeftSide_Styles"


export const LeftSide:React.FC = () => {
return (
    <S.StyleLeftSide>
    <FlexWrapper direction={'column'} height={'48px'} gap={'32px'}>
                        <S.SubTitle>Featured Post</S.SubTitle>
                        <FlexWrapper padding="0 0 0 20px" direction={'column'} maxWidth={'733px'}>
                            <S.Photo src={photo} alt="" />
                            <S.PostMetadata htmlFor="featuredPost" className="postMetadata">By <S.Name className="nameAutor" href="">John Doe</S.Name> | May23, 2022</S.PostMetadata>


                            <FlexWrapper direction={'column'} minHeight={'320px'}>
                                <S.SubTitle id="featuredPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</S.SubTitle>
                                <S.TextFeaturedPost className={'textFeaturedPost'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</S.TextFeaturedPost>
                                <Button  background={'#FFD050'}>{'Read More >'}</Button>
                            </FlexWrapper>

                                
                            </FlexWrapper>

                    </FlexWrapper>

    </S.StyleLeftSide>
)
}





