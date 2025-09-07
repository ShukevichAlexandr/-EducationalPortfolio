import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from "../../../../components/icon/Icon"
import { S } from '../autor/Autor_Styles';


type AutorPropsType = {
    iconId?: string
    title?: string
    description?: string
    background?: string
    viewBox?: string; 
    photo?: string
}

export const Autor:React.FC<(AutorPropsType)> = (props: AutorPropsType) => {
return (
    <S.Autor {...props}>
        <FlexWrapper  direction={'column'}>
                        <S.Photo src={props.photo ?? ''} alt="Author's photo"/>
                    
                    <S.AutorTitle>{props.title ?? ''}</S.AutorTitle>
                    <S.AutorText>{props.description ?? ''}</S.AutorText>
                    <FlexWrapper width={'112px'} height={'16px'} margin={'20px auto 40px'} gap={'16px'}>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'facebookSvg'} viewBox={'0 0 52 52'}/>
                        </S.SocialNetworkIconWrapper>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'twitterSvg'} viewBox={'0 0 52 52'}/>
                        </S.SocialNetworkIconWrapper>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'instaSvg'} viewBox={'0 0 52 52'}/>
                        </S.SocialNetworkIconWrapper>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'inSvg'} viewBox={'0 0 52 52'}/>
                        </S.SocialNetworkIconWrapper>
                    </FlexWrapper>
        </FlexWrapper>
    </S.Autor>
)
}



