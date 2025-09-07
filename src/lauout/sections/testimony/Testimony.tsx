import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Sliders } from './sliders/Sliders';
import { S } from './Testimony_Styles';

import styled from 'styled-components';


export const Testimony:React.FC = () => {
return (
    <S.Testimony>
        <Container>

            <S.ResponsiveFlexWrapper1 padding={'0 80px'} >
                <ResponsiveFlexWrapper3>
                <S.ResponsiveFlexWrapper2 direction={'column'} maxWidth={'349px'} margin={'92px 120px 0 0'} minWidth={'225px'}>
                        <S.DescriptionBlock>TESTIMONIALs</S.DescriptionBlock>
                        <S.MainTitleTestimony>What people say about our blog</S.MainTitleTestimony>
                        <S.TextTestimony>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</S.TextTestimony>               
                </S.ResponsiveFlexWrapper2>
                <S.CenterLine/>
                </ResponsiveFlexWrapper3>

                <Sliders/>
                
            </S.ResponsiveFlexWrapper1>
        </Container>
    </S.Testimony>
)
}


const ResponsiveFlexWrapper3 = styled(FlexWrapper)`

@media (max-width:1000px) {
    max-width: 300px;
}
    @media (max-width: 875px){
    max-width: 600px;
    margin: 0 auto;
}
`