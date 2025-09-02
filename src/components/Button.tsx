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
  width: ${props => props.width || '204px'};  
  height: ${props => props.height || '56px'};
  background-color: ${props => props.background || '#FFD050'};
  margin: ${props => props.margin || '0'};
  color: ${props => props.color || '#232536'};
  border: ${props => props.border || 'none'};
  
 @media (max-width:900px) {
  width: ${props => props.width || '160px'};  
  height: ${props => props.height || '48px'};
 }
`