import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { FlexWrapper } from "../../components/FlexWrapper"




const Footer = styled.footer`
    background-color: #232536;
    max-width: 1440px;
    margin: 90px auto;
    ul{
    list-style: none;
    }
`


const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:1135px) {
    margin: auto auto;
    max-width: 560px;
    flex-direction: column;
    gap: 30px;
}
    @media ${theme.media.mobil} {

}`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:500px) {
    flex-direction: column;
    gap: 10px;
}

`


const ResponsiveFlexWrapper3 = styled(FlexWrapper)`

@media (max-width:500px) {
padding: 0 20px;
}
`

const MiniResponsiveFlexWrapper = styled(FlexWrapper)`

@media (max-width:690px) {
    flex-direction: column;
}
`

const   MainTitleFooter = styled.h2`
max-width: 562px;
min-width: 290px;
margin-right: 64px ;

@media (max-width:475px) {
        min-width: 200px;
}
`


const Field = styled.input`
    background-color:#232536;
    border: 2px solid ${theme.colors.borderColor};
    height: 56px;
    max-width: 323px;
    min-width: 260px;
    &::placeholder {
    padding-left: 20px;
    }

    @media (max-width:475px) {
        min-width: 200px;
}
`


const StyleBox = styled.div`
background-color:  ${theme.colors.darkGrey};
background-color: rgba(4C, 4C, 4C, 0,05);
`

const FooterText = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
color: ${theme.colors.mediumGrey};
max-width: 361px;
`

const SocialNetworkIconWrapper = styled.div`
    max-width: 16px;
    max-height: 16px;
    color: ${theme.colors.mediumGrey};
`


const IntaractiveBlock = styled.div`
    background-color: #383a4c;
`


export const S = {
    Footer,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    ResponsiveFlexWrapper3,
    MiniResponsiveFlexWrapper,
    MainTitleFooter,
    Field,
    StyleBox,
    FooterText,
    SocialNetworkIconWrapper,
    IntaractiveBlock
}