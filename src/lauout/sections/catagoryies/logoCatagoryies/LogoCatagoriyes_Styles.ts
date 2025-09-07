import styled from "styled-components"
import { theme } from "../../../../styles/Theme"


type LogoCatagoriyesPropsType = {
    iconId?: string
    title?: string
    description?: string
    background?: string
    viewBox?: string; 
    border?: string
}



const IconWrapper = styled.div` 
margin-bottom: 14px; 
margin-top: 32px;
margin-left: 32px;
position: relative; 
width: 48px;
height: 48px;
z-index: 0;
&::before {
    content: '';
    display: inline-block;
    width: 48px;
    height: 48px;
    
    background-color: #FBF6EA;
    border-radius: 25%;
    transform:translate(-50%, -50%);

    position: absolute;

top: 50%;
left: 50%;
    transform-origin: top left  ;
    z-index: -1;

}`

const LogoCatagoryies = styled.div<LogoCatagoriyesPropsType>`
    background-color: ${props => props.background || '#FFFFFF'};
    border: ${props => props.border || 'none'};
    max-width: 296px;
    width: 100%;
    min-height: 228px;
    cursor: pointer;

    &:hover{
        background-color: #FFD050;
    }
`
const CatagoryTitle = styled.h3`
    padding-left: 32px;
    padding-top: 16px;
    color: ${theme.colors.black};
`
const CatagoryText = styled.p`
    margin-top: 4px;
    padding-left: 32px;
    max-width: 280px;
    font-family: 'Inter', sans-serif ;
    color: ${theme.colors.mediumGrey};   
    padding-bottom: 32px;
    color: #6D6E76;   
`


export const S = {
    IconWrapper,
    LogoCatagoryies,
    CatagoryTitle,
    CatagoryText
} 