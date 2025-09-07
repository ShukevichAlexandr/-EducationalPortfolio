import styled from "styled-components"
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from "../../../styles/Theme";




const Logos = styled.section`
    margin: 96px auto;
    max-width: 1440px;
    min-height: 52px;
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
      @media (max-width:500px) {
        flex-direction: column;
    }
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
@media (max-width:500px) {
    margin: 0 auto;
    min-height: 80px;
}

@media (max-width:500px) {
    margin: 0;
    min-height: 80px;
}
`


const ResponsiveFlexWrapper3 = styled(FlexWrapper)`
    @media (max-width:1300px) {
        flex-wrap: wrap;
    }

 
    @media ${theme.media.mobil} {
    flex-direction :column ;
    gap: 30px;
    }

    @media (max-width:500px) {
    margin: 0 auto 30px;
    max-width: 300px;
    }

    @media (max-width:350px) {
    margin: 0 0 0 30px;
    max-width: 200px;
    }

`


const ResponsiveLogoWrapper1 = styled(FlexWrapper)`
      @media (max-width: 900px) {
        flex-direction: column;
        max-width: 300px;
        gap: 30px;
    }
`

const ResponsiveLogoWrapper2 = styled(FlexWrapper)`
    @media (max-width: 900px) {
        flex-direction: column;
        max-width: 300px;
    }
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

    @media (max-width:500px) {
        padding-left: 20px;
    }
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

    @media (max-width:500px) {
        padding-left: 20px;
    }
`



export const S = {
    Logos,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    ResponsiveFlexWrapper3,
    ResponsiveLogoWrapper1,
    ResponsiveLogoWrapper2,
    LogoContainer,
    LogoIconWrapper1,
    LogoIconWrapper2,
    LogoIconWrapper3,
    LogoIconWrapper4,
    LogoIconWrapper5,
    TextLogos,
    MainTitleLogos
}