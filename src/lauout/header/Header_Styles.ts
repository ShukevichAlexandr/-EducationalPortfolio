import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';



const Header = styled.header`
    background-color: #232536;
    color: ${theme.colors.lightGrey};
    padding: 12px 0;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

ul{
    list-style: none;
}
`

const ResponsiveContainer = styled(Container)`
    @media (max-width:500px) {
        padding: 0 20px;
    }
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width: 1050px) {
    justify-content: space-around;
    gap: 0;
}

@media (max-width: 500px) {
    gap: 0;
}

@media (max-width: 340px) {
    
    max-width:200px ;
}
`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
margin: auto 0;


`

const Button = styled.button`
    width: 180px;   
    height: 40px;
    background-color: #FBF6EA;
    color: black;
    @media (max-width: 900px){

        max-width: 150px;
        height: 40px;
        position: fixed;
        top: 32px;
        right: 145px;
    }
    
    @media (max-width:500px) {
        max-width: 100px;
        height: 30px;
        position: fixed;
        top: 36px;
        right: 95px;
    }

    @media (max-width: 340px) {
        max-width: 70px;
        height: 30px;
        position: fixed;
        top: 36px;
        right: 95px;
    }

`


export const S = {
    Header,
    ResponsiveContainer,
    ResponsiveFlexWrapper1,
    ResponsiveFlexWrapper2,
    Button
}