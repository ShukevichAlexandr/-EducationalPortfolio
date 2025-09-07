import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import photo from "../../../assets/images/specialPostImg.webp"
import { S } from "./CpecialPost_Styles"

export const CpecialPost:React.FC = () => {
return (
    <S.CpecialPost>
        <Container>
            <S.ResponsiveFlexWrapper1>
                <S.Photo src={photo} alt="фон для секции" />
                <S.PositionWrapper>
                        <S.ResponsiveFlexWrapper2 direction={'column'}>
                        <S.CommitForBlock>Why we started </S.CommitForBlock>
                        <S.FavoriteTitle>It started out as a simple idea and evolved into our passion</S.FavoriteTitle>
                        <S.TextBlocks>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</S.TextBlocks>
                        <FlexWrapper>
                            <S.ButtonResponsive width={'269px'} height={'56px'} background={'#FFD050'}>{'Discover our story >'}</S.ButtonResponsive>
                        </FlexWrapper>                    
                    </S.ResponsiveFlexWrapper2>
                </S.PositionWrapper>

            </S.ResponsiveFlexWrapper1>
        </Container>
    </S.CpecialPost>
)
}

