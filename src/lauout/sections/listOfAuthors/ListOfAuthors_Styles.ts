import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";


const ListOfAuthors = styled.section`
    margin: 128px auto;
    max-width: 1440px;
    width: 100%;
    @media (max-width:784px) {
    max-height: 1444px;
}
`

const MainTitleAutors = styled.h2`
    margin: 0 auto;
    color: ${theme.colors.black};
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
    @media (max-width:785px) {
        min-height: 1480px;
    }
`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
    @media (max-width:785px) {
        flex-wrap: wrap;
    }

    @media (max-width:500px) {
        padding: 0 20px;
    }
`

const MiniResponsiveFlexWrapper = styled(FlexWrapper)`
    @media (max-width:1175px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`


export const S = {
    ListOfAuthors,
    MainTitleAutors,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    MiniResponsiveFlexWrapper
}