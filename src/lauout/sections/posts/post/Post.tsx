import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { FlexWrapper } from '../../../../components/FlexWrapper'

type PostsPropsType = {

    background?: string
    id?: string
    htmlFor?: string
}

export const Post = (props : PostsPropsType) => {
  return (
    <StylePosts background={props.background}>
        <FlexWrapper direction={'column'} maxWidth={'517px'}  height={'180px'}>
            <PostMetadata htmlFor={props.htmlFor} className='postMetadata'>By <Name className='nameAutor' href="">John Deo</Name> | Aug 23, 2021</PostMetadata>
            <PostText id={props.id}>8 Figma design systems that you can download for free today.</PostText>
        </FlexWrapper>
    </StylePosts>
  )
}

const StylePosts = styled.div<PostsPropsType>`
    background: ${({background}) => background || '#FFFFFF'};
`

const Name = styled.a`
color: ${theme.colors.purple};
`

const PostMetadata = styled.label`
  color: black;
  padding-top: 32px;
  padding-left: 32px;
`

const PostText = styled.h4`
color: ${theme.colors.black};
max-width: 369px;
width: 100%;
padding-left: 32px;
padding-bottom: 26px;
`