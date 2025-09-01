import styled from "styled-components"
import { theme } from "../../../styles/Theme"

export const FooterMenu = (props: {menuItems: Array<string>}) => {
return (
    <StyledFooterMenu>
        <ul>
            {props.menuItems.map((item, index)=>{
                return <ListItem key={index}>
                            <Link className={'linkHeader'} href="">
                                {item}
                            </Link>
                        </ListItem>
            })}
        </ul>
    </StyledFooterMenu>
)
}

const StyledFooterMenu = styled.nav`
    ul{
        display: flex;
        gap: 20px;
        justify-content: center;
    }    

`

const ListItem = styled.li`
    
`


const Link = styled.a`
    color: ${theme.colors.lightGrey};
    cursor: pointer;

`