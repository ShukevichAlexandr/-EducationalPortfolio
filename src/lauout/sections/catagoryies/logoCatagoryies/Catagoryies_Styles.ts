import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme"


const Catagoryies = styled.section`
    margin: 128px auto;
    width: 100%;
    min-height: 324px;
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
@media (max-width:784px) {
    min-height: 1200px;
}
`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
@media (max-width:1175px) {
    flex-wrap: wrap;
}

@media (max-width:784px) {
    min-height: 1020px;
    justify-content: space-around;
}
    @media (max-width:500px) {
    padding: 0 20px;
}
`

const TitleCatagoryies = styled.h2`
    color: ${theme.colors.black};
    margin: 0 auto;
    padding-bottom:48px ;
`

const MiniResponsiveFlexWrapper = styled(FlexWrapper)`
@media (max-width:1175px) {
    flex-wrap: wrap;
    justify-content: space-around;
}
`


export const S = {
    Catagoryies,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    TitleCatagoryies,
    MiniResponsiveFlexWrapper
} 