import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { S } from "./JoinOurTeam_Styles"


export const JoinOurTeam:React.FC = () => {
return (
    <S.JoinOurTeam>
        <Container>
            <FlexWrapper  direction={'column'} maxWidth={'400px'}>
                <S.InviteTitle>Join our team to be a part of our story</S.InviteTitle>
                <S.InviteText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</S.InviteText>
                <Button margin={'32px auto 0'}>Join Now</Button>
            </FlexWrapper>    
        </Container>        
    </S.JoinOurTeam>
)
}


