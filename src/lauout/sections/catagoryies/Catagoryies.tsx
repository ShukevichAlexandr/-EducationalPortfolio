import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"
import { LogoCatagoriyes } from "./logoCatagoryies/LogoCatagoriyes"


export const Catagoryies = () => {
return (
    <StyleCatagoryies>
        <Container>
            <ResponsiveFlexWrapper1 direction={'column'} maxWidth={'1280px'} minHeight={'324px'} margin={'0 auto'} >
                <TitleCatagoryies>Choose A Catagory</TitleCatagoryies>
                <ResponsiveFlexWrapper2 maxWidth={'1280px'} minHeight={'228px'}  gap={'32px'} justify={'space-between'} padding={'0 80px'}>
                    
                    <MiniResponsiveFlexWrapper gap={'32px'} justify="space-around">
                        <LogoCatagoriyes border={'1px solid #6D6E76'} iconId={'businessSvg'}  title={'Business'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }/>

                        <LogoCatagoriyes border={'1px solid #6D6E76'} iconId={'startupSvg'} viewBox={'-13 -14 48 48'} title={'Startup'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>                      
                    </MiniResponsiveFlexWrapper>

                    <MiniResponsiveFlexWrapper gap={'32px'} justify="space-around">
                    <LogoCatagoriyes border={'1px solid #6D6E76'}  iconId={'economySvg'} title={'Economy'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>

                    <LogoCatagoriyes border={'1px solid #6D6E76'} iconId={'technologySvg'} viewBox={'-13 -14 48 48'} title={'Technology'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}/>
                    </MiniResponsiveFlexWrapper>

                </ResponsiveFlexWrapper2>
            </ResponsiveFlexWrapper1>
        </Container>
    </StyleCatagoryies>
)
}

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
@media (max-width:784px) {
    min-height: 1300px;
}
`

const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
@media (max-width:1175px) {
    flex-wrap: wrap;
}
    @media ${theme.media.mobil} {
    flex-direction :column ;
    gap: 60px;
    flex-wrap: nowrap;
}`






const StyleCatagoryies = styled.section`
    margin: 128px auto;
    width: 100%;
    min-height: 324px;

`


const TitleCatagoryies = styled.h2`
    color: ${theme.colors.black};
    margin: 0 auto;
    padding-bottom:48px ;

`

const MiniResponsiveFlexWrapper = styled(FlexWrapper)`
@media (max-width:1175px) {
    flex-wrap: wrap;
    justify-content: space-around;
}
`