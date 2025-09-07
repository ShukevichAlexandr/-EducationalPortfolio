import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"


const ResponsiveContainer = styled(Container)`
@media (max-width: 500px) {
    padding: 0;
}
    
`

const ResponsiveFlexWrapper = styled(FlexWrapper)`
    @media (max-width:900px) {
    flex-direction :column ;
    gap: 60px;
    min-height: 1650px;
}

@media ${theme.media.tablet} {
    flex-direction :column ; 
}
`

const Posts = styled.section`
    max-width: 1440px;
    width: 100%;
    margin: 130px auto;
    @media (max-width:860px){
    min-height: 1650px;
    
    }
    
    @media ${theme.media.tablet}{
    min-height: 1000px;
    
    }
`

const MediaWrapper = styled.div`
    min-height: 800px;

    @media ${theme.media.mobil}{
    min-height: 1600px;
    }
`


export const S = {
    Posts,
    ResponsiveContainer,
    ResponsiveFlexWrapper,
    MediaWrapper,
}