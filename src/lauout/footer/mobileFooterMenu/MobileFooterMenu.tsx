import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"

export const MobileFooterMenu = (props: {menuItems: Array<string>}) => {
return (
    <StyledMobileFooterMenu>
        <FooterBurgerButton isOpen={false}>
            <span></span>
        </FooterBurgerButton>

        <MobileFooterMenuPopup isOpen={false}>
        <ul>
            {props.menuItems.map((item, index)=>{
                return <ListItem key={index}>
                            <Link className={'linkFooter'} href="">
                                {item}
                            </Link>
                        </ListItem>
            })}
        </ul>
        </MobileFooterMenuPopup>
    </StyledMobileFooterMenu>
)
}

const StyledMobileFooterMenu = styled.nav`  


`

const ListItem = styled.li`                         
`


const Link = styled.a`
    color: ${theme.colors.lightGrey};
    cursor: pointer;
    
`


const FooterBurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    bottom: 510px;
    left: 320px;
    width: 56px;
    height: 56px;
    z-index: 9999999;
    background-color: none;
    background-color: transparent;
    border: none;



    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(255, 255, 255, 0);

                
            `}

        &::before{
            content:'';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(-45deg) translateY(0);
            `}

        }
        &::after{
            content:'';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);



            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform:rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const MobileFooterMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;


    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;

    `}

ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
`
