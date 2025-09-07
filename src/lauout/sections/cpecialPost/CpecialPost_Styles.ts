import styled from "styled-components"
import { Button } from "../../../components/Button"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"

const CpecialPost = styled.section`
    max-width: 1440px;
    width: 100%;
    margin: 128px auto;
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
min-height: 920px;
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
    
    padding: 0 80px;

    @media (max-width: 900px) {
        padding: 0 40px;  
    }

    @media (max-width: 550px) {
        padding: 0 20px;  
    }

    @media (max-width: 550px) {
        padding: 0 5px;  
    }
`

const ButtonResponsive = styled(Button)`
    @media (max-width: 600px) {
            margin-right: 20px ;  
    }
`

const Photo = styled.img`
    max-width: 950px;
    width: 100%;
    height: 705px;
    padding-left: 80px;
    object-fit: cover;
    @media (max-width: 930px) {
            padding: 0 ;  
    }
    `

const CommitForBlock = styled.span`
        color: ${theme.colors.black};
        padding: 80px 0 24px ;
        max-width: 220px;
        @media (max-width: 1000px) {
            padding: 80px 0 24px 0;    
        }
`

const FavoriteTitle = styled.h1`
    /* ${font({family: "'inter', sans-serif", weight: 700, Fmax:48, Fmin:20})};
    letter-spacing: -0.004em; */

    font-family:'inter', sans-serif;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -0.004em;


    @media (max-width:1200px) {
        font-size: 40px;
    }

    @media (max-width:1000px) {
        font-size: 32px;
    }

    @media (max-width:500px) {
        font-size: 24px;
    }



    color: ${theme.colors.black};
    padding: 0 80px 0 0;
    @media (max-width: 1000px) {
            padding: 0 0 16px 0;    
        }
`

const TextBlocks = styled.p`
    color: ${theme.colors.mediumGrey};      
    padding: 0 0 32px 0;
    @media (max-width: 1000px) {
            padding: 0 0 32px 0;    
        }
`

const PositionWrapper = styled.div`
    margin:121px 0 0 0;
    max-width: 706px;
    max-height: 584px;
    height: 100%;
    position: absolute;
    left: 45%;
    right: 0;
    display: flex;
    flex-grow: 1;
        
    background-color: ${theme.colors.font};


    @media (max-width: 600px) {
        left: 35%;    
        }
`



export const S = {
    CpecialPost,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    ButtonResponsive,
    Photo,
    CommitForBlock,
    FavoriteTitle,
    TextBlocks,
    PositionWrapper
}