import React, {useState} from 'react';
import styled, { css } from "styled-components"
import { Menu } from '../menu/Menu';
import { S } from '../../HeaderMenu_Styles';

export const MobileHeaderMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen( !menuIsOpen )}
    return (
        <S.MobileHeaderMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileHeaderMenu>
)
}





