import styled from "styled-components"
import { theme } from "../../../styles/Theme"

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
return (
    <StyledHeaderMenu>
        <ul>
            {props.menuItems.map((item, index)=>{
                return <ListItem key={index}>
                            <Link className={'linkHeader'} href="">
                                {item}
                            </Link>
                        </ListItem>
            })}
        </ul>
    </StyledHeaderMenu>
)
}

const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap: 20px;
        justify-content: center;
    }    

    @media (max-width:840px) {
        display: none;
    }
`

const ListItem = styled.li`
     width: 80px;
`


const Link = styled.a`
    color: ${theme.colors.lightGrey};
    cursor: pointer;

`