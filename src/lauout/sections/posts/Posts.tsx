import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { LeftSide } from "./sides/LeftSide"
import { RightSide } from "./sides/RightSide"
import { theme } from "../../../styles/Theme"


export const Posts = () => {
return (
    <StyledPosts>
        <ResponsiveContainer padding={'0 80px'}>
            <MediaWrapper>
                <ResponsiveFlexWrapper gap={'30px'}>
                    <LeftSide/>                
                    <RightSide/>
                </ResponsiveFlexWrapper>
            </MediaWrapper>
        </ResponsiveContainer>    
    </StyledPosts>
)
}

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

const StyledPosts = styled.section`
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





