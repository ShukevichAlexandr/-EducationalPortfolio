import { Container } from "../../../components/Container"
import { LogoCatagoriyes } from "./logoCatagoryies/LogoCatagoriyes"
import { S } from "../catagoryies/logoCatagoryies/Catagoryies_Styles"

export const Catagoryies:React.FC = () => {
return (
    <S.Catagoryies>
        <Container>
            <S.ResponsiveFlexWrapper1 direction={'column'} maxWidth={'1280px'} minHeight={'324px'} margin={'0 auto'} >
                <S.TitleCatagoryies>Choose A Catagory</S.TitleCatagoryies>
                <S.ResponsiveFlexWrapper2 maxWidth={'1280px'} minHeight={'228px'}  gap={'32px'} justify={'space-between'} padding={'0 80px'}>
                    
                    <S.MiniResponsiveFlexWrapper gap={'32px'} justify="space-around">
                        <LogoCatagoriyes border={'1px solid #6D6E76'} iconId={'businessSvg'}  title={'Business'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }/>

                        <LogoCatagoriyes border={'1px solid #6D6E76'} iconId={'startupSvg'} viewBox={'-13 -14 48 48'} title={'Startup'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>                      
                    </S.MiniResponsiveFlexWrapper>

                    <S.MiniResponsiveFlexWrapper gap={'32px'} justify="space-around">
                    <LogoCatagoriyes border={'1px solid #6D6E76'}  iconId={'economySvg'} title={'Economy'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>

                    <LogoCatagoriyes border={'1px solid #6D6E76'} iconId={'technologySvg'} viewBox={'-13 -14 48 48'} title={'Technology'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>
                    </S.MiniResponsiveFlexWrapper>

                </S.ResponsiveFlexWrapper2>
            </S.ResponsiveFlexWrapper1>
        </Container>
    </S.Catagoryies>
)
}


