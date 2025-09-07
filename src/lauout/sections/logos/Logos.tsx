import { Container } from "../../../components/Container"
import { Icon } from "../../../components/icon/Icon";
import { S } from "./Logos_Styles";


export const Logos:React.FC = () => {
return (
    <S.Logos>
        <Container>
            <S.ResponsiveFlexWrapper1 maxWidth={'1237px'} minHeight={'52px'} margin={'0 auto'} gap="60px">
                <S.ResponsiveFlexWrapper2 direction={'column'} width={'136px'}>
                    <S.TextLogos>We are</S.TextLogos>
                    <S.MainTitleLogos>Featured in</S.MainTitleLogos>
                </S.ResponsiveFlexWrapper2>
                    <S.ResponsiveFlexWrapper3 maxWidth={'1015px'} gap={'30px'} justify={'space-between'}>
                    
                    <S.ResponsiveLogoWrapper1 gap={'0px'}>
                        <S.LogoIconWrapper1>
                            <S.LogoContainer>
                                <Icon iconId="logo1Svg" viewBox={'0 0 120 47.5'} width="200px"/>
                            </S.LogoContainer>
                        </S.LogoIconWrapper1>

                        <S.LogoIconWrapper2>
                            <S.LogoContainer>
                                <Icon iconId="logo2Svg" viewBox={'0 0 100 47.5'} width="200px" />
                            </S.LogoContainer>
                        </S.LogoIconWrapper2>
                    </S.ResponsiveLogoWrapper1>

                    <S.ResponsiveLogoWrapper2 gap={'30px'}>
                        <S.LogoIconWrapper3>
                            <S.LogoContainer>
                                <Icon iconId="logo3Svg" viewBox={'0 0 120 47.5'} width="200px"/>
                          </S.LogoContainer>
                        </S.LogoIconWrapper3>

                        <S.LogoIconWrapper4>
                            <S.LogoContainer>
                                <Icon iconId="logo4Svg" viewBox={'0 0 100 49'} width="200px"/>
                            </S.LogoContainer>
                        </S.LogoIconWrapper4>

                        <S.LogoIconWrapper5>                     
                            <S.LogoContainer>
                                <Icon iconId="logo5Svg" viewBox={'0 0 100 47.5'} width="200px"/>
                            </S.LogoContainer>
                        </S.LogoIconWrapper5>
                    </S.ResponsiveLogoWrapper2>

                    </S.ResponsiveFlexWrapper3>
                    
            </S.ResponsiveFlexWrapper1>
        </Container>
    </S.Logos>
)
}



