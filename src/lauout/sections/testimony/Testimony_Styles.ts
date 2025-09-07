import styled from "styled-components"
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from "../../../styles/Theme";



const Testimony = styled.section`
margin: 96px auto;
    max-width:1440px ;
    height: 100%;
    background-color: ${theme.colors.lightYellow};
`
const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:875px) {
    flex-direction: column;
}

@media (max-width:500px) {
    padding: 0 20px;
}

`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

    @media (max-width: 875px){
    max-width: 600px;
    margin: 92px auto 0;
}
`

const CenterLine = styled.div`
    background-color: #DCDCDC; 
    width: 1px;                
    height: 310px;            
    margin:auto 0 ;
    transform: translateX(-50%); /* Для точного централирования */

    @media (max-width:875px) {              
        height: 0; 
        width: 0;
}
`

const MainTitleTestimony = styled.h2`
color: ${theme.colors.black};
margin-bottom: 10px;
@media (max-width:875px) {
        margin: 0 auto 10px;
}
`




const TextTestimony = styled.p`
color: ${theme.colors.mediumGrey};

@media (max-width:875px) {
        margin: 0 auto ;
}
`

const DescriptionBlock = styled.span`
margin-bottom: 10px;
letter-spacing: 3px;
text-transform: uppercase;
color: ${theme.colors.black};

@media (max-width:875px) {
        margin: 0 auto 10px;
}
`



export const S = {
    Testimony,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    CenterLine,
    TextTestimony,
    MainTitleTestimony,
    DescriptionBlock,
}




