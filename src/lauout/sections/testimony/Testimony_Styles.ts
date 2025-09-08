import styled from "styled-components"
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from "../../../styles/Theme";



const Testimony = styled.section`
margin: 96px auto;
    max-width:1280px ;
    height: 100%;
    background-color: ${theme.colors.lightYellow};
`
const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:875px) {
    flex-direction: column;
    padding: 0;
}

@media (max-width:500px) {
    padding: 0 20px;
}

`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

    @media (max-width: 875px){
    width: 800px;
    margin: 92px auto 0;
}

    @media (max-width: 650px){
    width: 400px;
}

    @media (max-width: 460px){
    max-width: 250px;
    margin: 40px 0 0 0;
}

`

const CenterLine = styled.div`
    background-color: #DCDCDC; 
    width: 1px;                
    height: 310px;            
    margin:auto 86px 94px ;
    transform: translateX(-50%); /* Для точного централирования */

    @media (max-width:875px) {
        transform: translateY(-50%);
        margin: 40px auto 10px;
        width: 310px;                
        height: 1px;  
}

@media (max-width:450px) {
        transform: translateY(-50%);
        margin: 40px auto 10px;
        width: 200px;                
        height: 1px;  
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




