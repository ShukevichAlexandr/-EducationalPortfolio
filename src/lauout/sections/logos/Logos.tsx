import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from "../../../styles/Theme";
import { Icon } from "../../../components/icon/Icon";

export const Logos = () => {
return (
    <StyleLogos>
        <Container>
            <FlexWrapper maxWidth={'1237px'} minHeight={'52px'} margin={'0 auto'} gap="60px">
                <ResponsiveFlexWrapper1 direction={'column'} width={'136px'}>
                    <TextLogos>We are</TextLogos>
                    <MainTitleLogos>Featured in</MainTitleLogos>
                </ResponsiveFlexWrapper1>
                    <ResponsiveFlexWrapper2 width={'1015px'} gap={'40px'} justify={'space-between'} padding={'10px 0 0 0'}>
                    
                    <ResponsiveLogoWrapper1 gap={'40px'}>
                        <LogoIconWrapper1>
                            <LogoContainer>
                                <Icon iconId="logo1Svg" viewBox={'0 0 120 47.5'} width="200px"/>
                            </LogoContainer>
                        </LogoIconWrapper1>

                        <LogoIconWrapper2>
                            <LogoContainer>
                                <Icon iconId="logo2Svg" viewBox={'0 0 100 47.5'} width="200px" />
                            </LogoContainer>
                        </LogoIconWrapper2>
                    </ResponsiveLogoWrapper1>

                    <ResponsiveLogoWrapper2 gap={'40px'}>
                        <LogoIconWrapper3>
                            <LogoContainer>
                                <Icon iconId="logo3Svg" viewBox={'0 0 120 47.5'} width="200px"/>
                          </LogoContainer>
                        </LogoIconWrapper3>

                        <LogoIconWrapper4>
                            <LogoContainer>
                                <Icon iconId="logo4Svg" viewBox={'0 0 100 49'} width="200px"/>
                            </LogoContainer>
                        </LogoIconWrapper4>

                        <LogoIconWrapper5>                     
                            <LogoContainer>
                                <Icon iconId="logo5Svg" viewBox={'0 0 100 47.5'} width="200px"/>
                            </LogoContainer>
                        </LogoIconWrapper5>
                    </ResponsiveLogoWrapper2>

                    </ResponsiveFlexWrapper2>
                    
            </FlexWrapper>
        </Container>
    </StyleLogos>
)
}


const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
@media (max-width:500px) {
    min-height: 420px;
}
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
@media (max-width:1300px) {
    flex-wrap: wrap;
}

    @media (max-width:900px) {
       
    }
 
    @media ${theme.media.mobil} {
    flex-direction :column ;
    gap: 60px;
}`


const ResponsiveLogoWrapper1 = styled(FlexWrapper)`
      @media (max-width: 900px) {
        flex-direction: column;
        max-width: 300px;
    }
`

const ResponsiveLogoWrapper2 = styled(FlexWrapper)`
    @media (max-width: 900px) {
        flex-direction: column;
        max-width: 300px;
    }
`

const StyleLogos = styled.section`
    margin: 96px auto;
    max-width: 1440px;
    min-height: 52px;
`

const LogoContainer = styled.div`
    margin: 12px auto;
    width: 200px;
    height: 48px;
`

const LogoIconWrapper1 = styled.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`
const LogoIconWrapper2 = styled.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`
const LogoIconWrapper3 = styled.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`
const LogoIconWrapper4 = styled.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`
const LogoIconWrapper5 = styled.div`
    width: 200px;
    height: 32px;
    margin: 0 auto ;
`


const TextLogos = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: ${theme.colors.mediumGrey};
    padding-left: 80px;
`

const MainTitleLogos = styled.h4`
    color: ${theme.colors.black};
    font-family: 'Sen', sans-serif;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    color: ${theme.colors.mediumGrey};
    width: 240px;
    padding-left: 80px;
`

