import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { FooterMenu } from "./footerMenu/FooterMenu"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { LogoComponent } from "../../components/logo/LogoComponent"
import { Button } from "../../components/Button"
import { Icon } from "../../components/icon/Icon"


const items = [ 'Privacy Policy']

export const Footer = () => {
return (
    <StyleFooter>
        <Container>
            <ResponsiveFlexWrapper3 padding={'0 80px'} direction={'column'}>
                <FlexWrapper justify={'space-between'} margin={'61px 0 54px 0'}>
                    <LogoComponent/>
                    <FooterMenu menuItems={items}/>
                    {/* <MobileFooterMenu menuItems={items}/> */}
                </FlexWrapper>
                <StyleBox>
                    <IntaractiveBlock>
                        <ResponsiveFlexWrapper1 maxWidth={'1280px'} padding={'50px 20px'} margin={'0 auto'}>
                        <MainTitleFooter>Subscribe to our letter to get latest updates and news</MainTitleFooter>                        
                        <MiniResponsiveFlexWrapper margin={'0 64px 0 0'} gap={'24px'}>
                            <Field type="mail" placeholder={'Enter Yor Email'}/>
                            <Button margin="auto 0">Subscribe</Button>                               
                        </MiniResponsiveFlexWrapper>
                        </ResponsiveFlexWrapper1>
                    </IntaractiveBlock>
                
                </StyleBox>
                <ResponsiveFlexWrapper2 margin={'30px 0 '} justify={'space-between'} maxWidth={'1280px'}>
                    <FlexWrapper maxWidth={'361px'} direction={'column'}>
                        <FooterText>Finsteer 118 2561 Fintown</FooterText>
                        <FooterText>Hello@finsweet.com 020 7993 2905</FooterText>
                    </FlexWrapper>
                    <FlexWrapper width={'112px'} height={'16px'} gap={'16px'}>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'facebookSvgGrey'} viewBox={'0 0 52 52'} />
                        </SocialNetworkIconWrapper>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'TwitterGreySvg'} viewBox={'0 0 52 52'} />
                        </SocialNetworkIconWrapper>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'InstaGreySvg'} viewBox={'0 0 52 52'} />
                        </SocialNetworkIconWrapper>
                        <SocialNetworkIconWrapper>
                        <Icon iconId={'InGreySvg'} viewBox={'0 0 52 52'} />
                        </SocialNetworkIconWrapper>
                    </FlexWrapper>
                </ResponsiveFlexWrapper2>

            </ResponsiveFlexWrapper3>


        </Container>
    </StyleFooter>
)
}

const StyleFooter = styled.footer`
    background-color: #232536;
    max-width: 1440px;
    margin: 90px auto;
    ul{
    list-style: none;
    }
`

const ResponsiveFlexWrapper3 = styled(FlexWrapper)`

@media (max-width:500px) {
padding: 0 20px;
}
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`

@media (max-width:1135px) {
    margin: auto auto;
    max-width: 560px;
    flex-direction: column;
    gap: 30px;
}
    @media ${theme.media.mobil} {
   
}`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`

@media (max-width:500px) {
    flex-direction: column;
    gap: 10px;
}

`



const MiniResponsiveFlexWrapper = styled(FlexWrapper)`

@media (max-width:690px) {
    flex-direction: column;
}
`

const   MainTitleFooter = styled.h2`
max-width: 562px;
min-width: 290px;
margin-right: 64px ;

@media (max-width:475px) {
        min-width: 200px;
}
`


const Field = styled.input`
    background-color:#232536;
    border: 2px solid ${theme.colors.borderColor};
    height: 56px;
    max-width: 323px;
    min-width: 260px;
    &::placeholder {
    padding-left: 20px;
    }

    @media (max-width:475px) {
        min-width: 200px;
}
`


const StyleBox = styled.div`
background-color:  ${theme.colors.darkGrey};
background-color: rgba(4C, 4C, 4C, 0,05);

`

const FooterText = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
color: ${theme.colors.mediumGrey};
max-width: 361px;
`

const SocialNetworkIconWrapper = styled.div`
    max-width: 16px;
    max-height: 16px;
    color: ${theme.colors.mediumGrey};
    
`


const IntaractiveBlock = styled.div`
    background-color: #383a4c;
`