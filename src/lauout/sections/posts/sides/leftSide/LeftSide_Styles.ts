import { theme } from "../../../../../styles/Theme"
import styled from "styled-components"


const StyleLeftSide = styled.div`
    max-width: 734px;
    width: 100%;
    min-height: 700px;
`


const Photo = styled.img`

    max-width: 669px;
    min-width: 360px;
    height: 352px;
    width: 100%;
    object-fit: cover;
    padding-bottom: 32px;

    @media (max-width:400px) {
        max-width: 360px;
        min-width: 260px;
        height: 260px;
    }

    @media (max-width:300px) {
        max-width: 240px;
        min-width: 220px;
        height: 240px;
    }
`

const SubTitle = styled.h2`
    color: black;
    max-width: 650px;
    padding-bottom: 16px;
`

const PostMetadata = styled.label`
    color: black;
    padding-bottom: 16px;
`

const Name = styled.a`
color: ${theme.colors.purple};
`

const TextFeaturedPost = styled.p`
    color: ${theme.colors.mediumGrey};
    padding-bottom: 32px;
`



export const S = {
    StyleLeftSide,
    Photo,
    SubTitle,
    PostMetadata,
    Name,
    TextFeaturedPost
}