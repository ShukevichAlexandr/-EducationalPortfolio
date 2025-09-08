
import styled, { css } from "styled-components"
import { theme } from "../../styles/Theme"


//menu


const MenuItem = styled.li`
    max-width: 100px;
`

const Link = styled.a`
    color: ${theme.colors.lightGrey};
    cursor: pointer;
    width: 100px;
`
//mobile menu

const MobileHeaderMenu = styled.nav`

ul {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    position: fixed;
    top: 100px;
    right: 42px;


    @media (max-width: 900px) {
        right: 27px;
    }

    @media (max-width: 500px) {
        top: 90px;
        right: 3px;
    } 
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 20px;
    right: 225px;
    width: 56px;
    height: 56px;
    z-index: 9999999;
    background-color: none;
    background-color: transparent;
    border: none;

    
    @media (max-width: 900px) {
        right: 50px;
    }

    @media (max-width: 500px) {
        top: 19px;
        right: 25px;
    }

    @media (max-width: 340px) {
        top: 19px;
        right: 25px;
    }


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 10px;
        bottom: 25px;

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

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #232536;
    display: none;


    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;

    `
}`

//desktopMenu


const DesktopMenu = styled.nav`
    ul{
        display: flex;
        gap: 24px;
        justify-content: center;
    }    
`


export const S = {
    MenuItem, 
    Link,
    MobileHeaderMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu
}