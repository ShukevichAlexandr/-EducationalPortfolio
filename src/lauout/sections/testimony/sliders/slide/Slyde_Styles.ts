import { FlexWrapper } from "../../../../../components/FlexWrapper"
import { theme } from "../../../../../styles/Theme"
import styled from "styled-components"






const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:1250px) {
    max-width: 400px;
}

@media (max-width:1000px) {
    max-width: 300px;
}
    @media (max-width: 875px){
    max-width: 700px;
    margin: 0 auto;
}

    @media (max-width: 600px){
    max-width: 400px;
    margin: 0 auto;
}

    @media (max-width: 460px){
    max-width: 250px;
    margin: 0 auto;
}

`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:1100px) {
    flex-wrap: wrap;
}

`

const SubTitleTestimony = styled.h4`
max-width: 470px;
color: ${theme.colors.black};
margin:80px 0 120px 0;

@media (max-width:875px) {
        max-width: 700px;
        min-width: 200px;
        margin:80px 0 120px 0;
}
`

const Photo = styled.img`
width: 48px;
height: 48px;
object-fit: cover;
border-radius: 50%;
position: relative;
`

const AutorsName = styled.h4`
width: 120px;
color: ${theme.colors.black};
`

const Address = styled.span`
color: ${theme.colors.mediumGrey};
`


const ButtonBackBlock = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
`

const BackButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: aliceblue;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;
    
    &:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`
const ButtonNextBlock = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
`

const NextButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: black;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;


    &:Hover{
        position: absolute;
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px; 
        transition: 0.5s ;
    }
`



export const Sl = {
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    SubTitleTestimony,
    Photo,
    AutorsName,
    Address,
    ButtonBackBlock,
    BackButton,
    ButtonNextBlock,
    NextButton
}