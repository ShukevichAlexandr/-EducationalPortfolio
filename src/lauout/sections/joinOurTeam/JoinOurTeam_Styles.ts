import styled from "styled-components"
import { theme } from "../../../styles/Theme"


const JoinOurTeam = styled.section`
margin: 128px auto;
    max-width: 414px;
`

const InviteTitle = styled.h2`
color: ${theme.colors.black};    
text-align: center;
`

const InviteText = styled.p`
margin-top: 16px;
max-width: 400px;
letter-spacing: 0px;
color: ${theme.colors.mediumGrey};
text-align: center;
`


export const  S = {
    JoinOurTeam,
    InviteTitle,
    InviteText
}