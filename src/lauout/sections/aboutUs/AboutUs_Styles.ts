import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"



const AboutUs = styled.section`
margin-top: 130px;

@media (max-width:900px) {
    max-width: none;
    flex-direction: column;
    gap: 30px;
    min-height:850px ;
}
`

const ColorPaginationLeft = styled.div`
    background-color: ${theme.colors.yellow};
    width: 779px ;
    height: 23px;
`

const ColorPaginationRights = styled.div`
    background-color: ${theme.colors.purple};  
    width: 282px ;
    height: 23px;
`


const TitleLeftSide = styled.h2`
color: ${theme.colors.black};   
max-width: 460px;
padding: 16px 0;

@media (max-width:1200px) {
        max-width: 420px;
}

@media (max-width:900px) {
        max-width: 500px;
}

@media (max-width: 573px) {
    max-width: 380px;    
}
`

const TitleRightSide = styled.h2`
color: ${theme.colors.black};   
max-width: 460px;
padding:16px 0;
@media (max-width:1200px) {
    max-width: 420px;
}

@media (max-width:900px) {
    max-width: 500px;
}

@media (max-width: 573px) {
    max-width: 420px;       
}
`


const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:900px) {
    margin:0 auto;
    flex-direction: column;
    gap: 30px;
    max-width: 400px;
    padding: 0;
}
    

@media (max-width:500px) {
        margin:0 auto;
        padding:0;
        max-width: 330px;
    }

    @media (max-width:350px) {
        margin:0 auto;
        padding:0;
        max-width: 230px;
    }
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:900px) {
    max-width: 500px;
    padding:96px 0 0 0 ;
}

@media (max-width:450px) {
    max-width: 320px;
}

@media (max-width:350px) {
    max-width: 240px;
}
`

const ResponsiveFlexWrapper3 = styled(FlexWrapper)`

@media (max-width:900px) {
    max-width: 500px;
    padding: 40px 0 0 0;
}

@media (max-width:450px) {
    max-width: 320px;
}

@media (max-width:350px) {
    max-width: 240px;
}
`




const BackgroundBlock = styled.div`
    background-color: ${theme.colors.lavender};
    @media (max-width:900px) {
    flex-direction: column;
    gap: 30px;
    min-height:850px ;
}
`

const TextBlocks = styled.p`
    color: ${theme.colors.mediumGrey};    
    max-width: 460px;

    @media (max-width:1200px) {
        max-width: 420px;
}

    @media (max-width:900px) {
        max-width: 500px;
}

    @media (max-width:900px) {
        max-width: 600px;
}
`

const Link = styled.a`
    /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:18, Fmin:14})};
    letter-spacing: 0.19em;
    line-height: 178%; */

    font-family:'Sen', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.19em;
    line-height: 178%;

    @media (max-width:1200px) {
        font-size: 16px;
    }

    @media (max-width:1000px) {
        font-size: 15px;
    }

    @media (max-width:500px) {
        font-size: 14px;
    }


    padding-top: 16px;
    color: ${theme.colors.purple};
    max-width: 140px;
    margin-bottom: 60px;
    `
    const CommitForBlock = styled.span`
    /* ${font({family: "'Sen', sans-serif", weight: 600, Fmax:16, Fmin:12})};
    letter-spacing: 0.19em; */


    font-family:'Sen', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.19em;

    @media (max-width:1200px) {
        font-size: 15px;
    }

    @media (max-width:1000px) {
        font-size: 14px;
    }

    @media (max-width:500px) {
        font-size: 12px;
    }

    padding: 24px 0 8px ;
    max-width: 140px;
    height: 52px;
    color: ${theme.colors.black};
    `



export const S = {
    AboutUs,
    ColorPaginationLeft,
    ColorPaginationRights,
    TitleLeftSide,
    TitleRightSide,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    ResponsiveFlexWrapper3,
    BackgroundBlock,
    TextBlocks,
    Link,
    CommitForBlock
}