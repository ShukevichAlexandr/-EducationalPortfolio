import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { theme } from "../../../styles/Theme"

export const JoinOurTeam = () => {
return (
    <StyleJoinOurTeam>
        <Container>
            <FlexWrapper  direction={'column'} maxWidth={'400px'}>
                <InviteTitle>Join our team to be a part of our story</InviteTitle>
                <InviteText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</InviteText>
                <Button margin={'20px auto 0'}>Join Now</Button>
            </FlexWrapper>    
        </Container>        
    </StyleJoinOurTeam>
)
}


const StyleJoinOurTeam = styled.section`
margin: 128px auto;
    max-width: 414px;
`

const InviteTitle = styled.h2`
color: ${theme.colors.black};    
text-align: center;
`

const InviteText = styled.p`
margin-top: 10px;
max-width: 400px;
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
color: ${theme.colors.mediumGrey};
text-align: center;
`
