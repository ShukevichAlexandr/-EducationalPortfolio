import styled from "styled-components"
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from "../../../../components/icon/Icon"
import { theme } from "../../../../styles/Theme";


type AutorPropsType = {
    iconId?: string
    title?: string
    description?: string
    background?: string
    viewBox?: string; 
    photo?: string
}

export const Autor = (props: AutorPropsType) => {
return (
    <StyleAutor {...props}>
        <FlexWrapper  direction={'column'}>
                        <Photo src={props.photo ?? ''} alt="Author's photo"/>
                    
                    <AutorTitle>{props.title ?? ''}</AutorTitle>
                    <AutorText>{props.description ?? ''}</AutorText>
                    <FlexWrapper width={'112px'} height={'16px'} margin={'20px auto 40px'} gap={'16px'}>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'facebookSvg'} viewBox={'0 0 52 52'}/>
                        </SocialNetworkIconWrapper>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'twitterSvg'} viewBox={'0 0 52 52'}/>
                        </SocialNetworkIconWrapper>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'instaSvg'} viewBox={'0 0 52 52'}/>
                        </SocialNetworkIconWrapper>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'inSvg'} viewBox={'0 0 52 52'}/>
                        </SocialNetworkIconWrapper>
                    </FlexWrapper>
        </FlexWrapper>
    </StyleAutor>
)
}
const SocialNetworkIconWrapper = styled.div`
    max-width: 16px;
    max-height: 16px;
`

const StyleAutor = styled.div<AutorPropsType>`
    background-color: ${props => props.background || '#F4F4F4'};
    max-width: 296px;
    max-height: 324px;
    width: 100%;
    cursor: pointer;

    &:hover{
    background-color: #FBF6EA;
    }
`



const Photo = styled.img`
margin: 40px auto 0;
        display: block;
    object-fit: cover;
    border-radius: 50%;
    width: 128px; // Выравниваем картинку по ширине
    height: 128px; // Сохраняем пропорции картинки
`

const AutorTitle = styled.h3`
    color: ${theme.colors.black};
    margin: 20px auto 0;
`

const AutorText = styled.p`
    color: ${theme.colors.mediumGrey};
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;

`
