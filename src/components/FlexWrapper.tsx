import styled from 'styled-components';
import { theme } from '../styles/Theme';


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string 
    height?: string
    gap?: string
    width?: string
    padding?: string
    background?: string
    maxWidth?: string
    maxHeight?: string
    minHeight?: string
    minWidth?: string
    margin?: string
    border?: string
    flexGrow?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
justify-content: ${props => props.justify || 'flex-start'};
align-items: ${props => props.align || 'stretch'};
flex-wrap: ${props => props.wrap || 'nowrap'  };
gap: ${props => props.gap || '0'};
height: ${props => props.height || '100%'};
width: ${props => props.width || '100%'};
max-width: ${props => props.width || '100%'};;
padding: ${props => props.padding || '0'};
background-color: ${props => props.color || 'none'};
margin: ${props => props.margin || '0'};
border: ${props => props.border || 'none'};
max-height: ${props => props.height || ''};
flex-grow: ${props => props.flexGrow || ''};
min-height: ${props => props.minHeight || ''} ;
min-width: ${props => props.minWidth || ''};
`


