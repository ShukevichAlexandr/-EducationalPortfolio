import styled from "styled-components"

type ButtonPropsType = {
    width?: string
    height?: string
    background?: string
    color?: string
    margin?: string
    border?: string
}

export const Button = styled.button<ButtonPropsType>`
  width: ${props => props.width || '200px'};  
  height: ${props => props.height || '40px'};
  background-color: ${props => props.background || '#FFD050'};
  margin: ${props => props.margin || '0'};
  color: ${props => props.color || '#232536'};
  border: ${props => props.border || 'none'};
  
`