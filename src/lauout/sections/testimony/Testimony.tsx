import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Sliders } from './sliders/Sliders';
import { S } from './Testimony_Styles';

import styled from 'styled-components';


export const Testimony:React.FC = () => {
return (
    <S.Testimony>
        <Container>

            <S.ResponsiveFlexWrapper1 padding={'0 112px'} >
                <ResponsiveFlexWrapper3>
                <S.ResponsiveFlexWrapper2 direction={'column'}  margin={'92px 0 0 0'} maxWidth={'349px'}>
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
    /* min-width: 300px; */
    max-width: 520px;

    @media (max-width: 875px){
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
}

    @media (max-width: 875px){
    width: 800px;
    margin: 0 auto;
}

    @media (max-width: 650px){
    width: 400px;
    margin: 0 auto;
}

    @media (max-width: 460px){
    max-width: 250px;
    margin: 0 auto;
    
}
`