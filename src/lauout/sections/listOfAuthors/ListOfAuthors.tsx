import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Autor } from "./autor/Autor";
import FloydMiles from '../../../assets/images/FloydMiles.webp'
import DianneRussill from '../../../assets/images/DianneRussill.webp'
import JennyWilson from '../../../assets/images/JennyWilson.webp'
import LeslieAlexander from '../../../assets/images/LeslieAlexander.webp'
import { theme } from "../../../styles/Theme";

export const ListOfAuthors = () => {
return (
    <StyleListOfAuthors>
        <Container>
            <ResponsiveFlexWrapper1 maxWidth={'1280px'}  direction={'column'} >
                <MainTitleAutors>List of Authors</MainTitleAutors>
                <ResponsiveFlexWrapper2 margin={'48px auto 0'} gap={'32px'} padding={'0 80px'} >
                    <MiniResponsiveFlexWrapper gap={'32px'} >
                        <Autor photo={FloydMiles} title={'Floyd Miles'} description={'Content Writer @Company'} background={'#F4F4F4'} />
                    
                        <Autor photo={DianneRussill} title={'Dianne Russill'} description={'Content Writer @Company'} background={'#F4F4F4'} />
                    </MiniResponsiveFlexWrapper>
                    <MiniResponsiveFlexWrapper gap={'32px'} >
                        <Autor photo={JennyWilson} title={'Jenny Wilson'} description={'Content Writer @Company'} background={'#F4F4F4'} />

                        <Autor photo={LeslieAlexander} title={'Leslie Alexander'} description={'Content Writer @Company'} background={'#F4F4F4'} />
                    </MiniResponsiveFlexWrapper>
                   

                </ResponsiveFlexWrapper2>
            </ResponsiveFlexWrapper1>
        </Container>
    </StyleListOfAuthors>
)
}


const StyleListOfAuthors = styled.section`
margin: 128px auto;
    max-width: 1440px;
    width: 100%;
    @media (max-width:784px) {
    max-height: 1444px;
}
`
const MainTitleAutors = styled.h2`
    margin: 0 auto;
    color: ${theme.colors.black};
`


const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
@media (max-width:785px) {
    min-height: 1480px;
}
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
@media (max-width:785px) {
    flex-wrap: wrap;
}

@media (max-width:500px) {
    padding: 0 20px;
}

`




const MiniResponsiveFlexWrapper = styled(FlexWrapper)`
@media (max-width:1175px) {
    flex-wrap: wrap;
    justify-content: space-around;
}
`