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
        <ResponsiveFlexWrapper direction={'column'} maxWidth={'516px'}  height={'180px'}>
            <PostMetadata htmlFor={props.htmlFor} className='postMetadata'>By <Name className='nameAutor' href="">John Deo</Name> | Aug 23, 2021</PostMetadata>
            <PostText id={props.id}>8 Figma design systems that you can download for free today.</PostText>
        </ResponsiveFlexWrapper>
    </StylePosts>
  )
}

const StylePosts = styled.div<PostsPropsType>`
    background: ${({background}) => background || '#FFFFFF'};


    &:hover{
background-color: #FBF6EA;
    }

    @media (max-width:320px) {
    max-width: 200px;
  }
`

const ResponsiveFlexWrapper = styled(FlexWrapper)`
  @media (max-width:450px) {
    max-width: 330px;
  }

  @media (max-width:350px) {
    max-width: 230px;
  }

  @media (max-width:330px) {
    max-width: 200px;
  }
`

const Name = styled.a`
color: ${theme.colors.purple};
`

const PostMetadata = styled.label`
  color: black;
  padding-top: 32px;
  padding-left: 32px;
  max-width: 300px;
`

const PostText = styled.h4`
color: ${theme.colors.black};
max-width: 369px;
width: 100%;
padding-left: 32px;
padding-bottom: 26px;

@media (max-width:450px) {
    max-width: 330px;
  }

  @media (max-width:350px) {
    max-width: 230px;
  }
  @media (max-width:330px) {
    max-width: 200px;
  }
`