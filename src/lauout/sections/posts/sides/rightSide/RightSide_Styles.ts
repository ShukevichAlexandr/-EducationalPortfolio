import styled from "styled-components"
import { FlexWrapper } from '../../../../../components/FlexWrapper';




const RightSide = styled.div`
    max-width: 516px;
    width: 100%;

    @media (max-width:600px) {
        margin: 0 auto ;
    }
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
margin: 0 auto;
    @media (max-width:300px) {
        max-width: 400px;
        gap: 0;
    }
`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
margin: 0 auto;
    @media (max-width:500px) {
        max-width: 400px;
    }

    @media (max-width:330px) {
    max-width: 200px;

  }
`

const SubTitle = styled.h2`
    color: black;
    max-width: 650px;

    @media (max-width:900px) {
        padding-left: 20px;
    }

`

const Link = styled.a`
    text-decoration: none;
    @media (max-width:500px) {
        padding-right: 20px;
    }
`

export const S = {
    RightSide,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    SubTitle,
    Link
}