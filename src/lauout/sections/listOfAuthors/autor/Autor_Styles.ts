import styled from "styled-components"
import { theme } from "../../../../styles/Theme";


type AutorPropsType = {
    iconId?: string
    title?: string
    description?: string
    background?: string
    viewBox?: string; 
    photo?: string
}



const Autor = styled.div<AutorPropsType>`
    background-color: ${props => props.background || '#F4F4F4'};
    max-width: 296px;
    max-height: 324px;
    width: 100%;
    cursor: pointer;

    &:hover{
    background-color: #FBF6EA;
    }
`
const SocialNetworkIconWrapper = styled.div`
    max-width: 16px;
    max-height: 16px;
`


const Photo = styled.img`
    margin: 40px auto 0;
    display: block;
    object-fit: cover;
    border-radius: 50%;
    width: 128px; // Выравниваем картинку по ширине
    height: 128px; // Сохраняем пропорции картинки
`

const AutorTitle = styled.h3`
    color: ${theme.colors.black};
    margin: 20px auto 0;
`

const AutorText = styled.p`
    color: ${theme.colors.mediumGrey};
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;

`


export const S = {
    Autor,
    SocialNetworkIconWrapper,
    Photo,
    AutorTitle,
    AutorText
}