import styled from "styled-components"

type ContainerPropsType = {
    padding?: string
    margin?: string
    transform?: string
}


export const Container = styled.div<ContainerPropsType>`
    max-width: 1440px;
    min-height: auto;
    width: 100%;
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0 auto'};
    outline: 1px solid red;
    transform: ${props => props.transform || 'none'};
` 