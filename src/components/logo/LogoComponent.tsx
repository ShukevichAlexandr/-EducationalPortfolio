import { Icon } from "../icon/Icon"
import styled from "styled-components";


export const LogoComponent = () => {
    return (
            <IconLink href="">
                <Icon iconId={'logoSvg'} width="140" hight="29" viewBox="80 -7 60 48"/>
            </IconLink>
    )
};



const IconLink = styled.a`
display: flex;
align-items: center;

`