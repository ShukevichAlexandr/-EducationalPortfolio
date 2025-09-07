import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/icon/Icon"
import { S } from "./LogoCatagoriyes_Styles"


type LogoCatagoriyesPropsType = {
    iconId?: string
    title?: string
    description?: string
    background?: string
    viewBox?: string; 
    border?: string
}


export const LogoCatagoriyes:React.FC<(LogoCatagoriyesPropsType)> = (props: LogoCatagoriyesPropsType) => {
return (
    <S.LogoCatagoryies {...props}>

        <FlexWrapper  direction={'column'} maxWidth={'296px'} minHeight={'228px'}>
            <S.IconWrapper>
                {props.iconId && <Icon iconId={props.iconId} viewBox={props.viewBox} />}

            </S.IconWrapper>
            <S.CatagoryTitle>{props.title ?? ''}</S.CatagoryTitle>
            <S.CatagoryText>{props.description ?? ''}</S.CatagoryText>
        </FlexWrapper>
    </S.LogoCatagoryies>

)
}




