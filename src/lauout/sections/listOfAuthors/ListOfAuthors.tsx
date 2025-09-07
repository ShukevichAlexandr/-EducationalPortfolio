import { Container } from "../../../components/Container";
import { Autor } from "./autor/Autor";
import FloydMiles from '../../../assets/images/FloydMiles.webp'
import DianneRussill from '../../../assets/images/DianneRussill.webp'
import JennyWilson from '../../../assets/images/JennyWilson.webp'
import LeslieAlexander from '../../../assets/images/LeslieAlexander.webp'
import { S } from "./ListOfAuthors_Styles";


export const ListOfAuthors:React.FC = () => {
return (
    <S.ListOfAuthors>
        <Container>
            <S.ResponsiveFlexWrapper1 maxWidth={'1280px'}  direction={'column'} >
                <S.MainTitleAutors>List of Authors</S.MainTitleAutors>
                <S.ResponsiveFlexWrapper2 margin={'48px auto 0'} gap={'32px'} padding={'0 80px'} >
                    <S.MiniResponsiveFlexWrapper gap={'32px'} >
                        <Autor photo={FloydMiles} title={'Floyd Miles'} description={'Content Writer @Company'} background={'#F4F4F4'} />
                    
                        <Autor photo={DianneRussill} title={'Dianne Russill'} description={'Content Writer @Company'} background={'#F4F4F4'} />
                    </S.MiniResponsiveFlexWrapper>
                    <S.MiniResponsiveFlexWrapper gap={'32px'} >
                        <Autor photo={JennyWilson} title={'Jenny Wilson'} description={'Content Writer @Company'} background={'#F4F4F4'} />

                        <Autor photo={LeslieAlexander} title={'Leslie Alexander'} description={'Content Writer @Company'} background={'#F4F4F4'} />
                    </S.MiniResponsiveFlexWrapper>
                   

                </S.ResponsiveFlexWrapper2>
            </S.ResponsiveFlexWrapper1>
        </Container>
    </S.ListOfAuthors>
)
}


