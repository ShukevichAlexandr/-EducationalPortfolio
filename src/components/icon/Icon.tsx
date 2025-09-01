import  iconsSprite  from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string,
    width?: string,
    hight?: string,
    viewBox?: string
    fill?: string
}


export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "48"}  height={props.hight || "48" }  viewBox={props.viewBox || "0 0 48 48"}  fill={props.fill || 'none'}  xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref = { `${iconsSprite}#${props.iconId}`} />
        </svg>
    )
};

