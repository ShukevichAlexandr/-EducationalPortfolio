import { FooterMenu } from "./footerMenu/FooterMenu"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { LogoComponent } from "../../components/logo/LogoComponent"
import { Button } from "../../components/Button"
import { Icon } from "../../components/icon/Icon"
import { S } from "./Footer_Styles"



const items = [ 'Privacy Policy']

export const Footer = () => {
return (
    <S.Footer id="footer">
        <Container>
            <S.ResponsiveFlexWrapper3 padding={'0 80px'} direction={'column'}>
                <FlexWrapper justify={'space-between'} margin={'60px 0 56px 0'}>
                    <LogoComponent/>
                    <FooterMenu menuItems={items}/>
                </FlexWrapper>
                <S.StyleBox>
                    <S.IntaractiveBlock>
                        <S.ResponsiveFlexWrapper1 maxWidth={'1280px'} padding={'80px 64px'} margin={'0 auto'}>
                        <S.MainTitleFooter>Subscribe to our letter to get latest updates and news</S.MainTitleFooter>                        
                        <S.MiniResponsiveFlexWrapper  gap={'24px'}>
                            <S.Field type="mail" placeholder={'Enter Yor Email'}/>
                            <Button margin="auto 0">Subscribe</Button>                               
                        </S.MiniResponsiveFlexWrapper>
                        </S.ResponsiveFlexWrapper1>
                    </S.IntaractiveBlock>
                
                </S.StyleBox>
                <S.ResponsiveFlexWrapper2 margin={'48px 0 56px'} justify={'space-between'} maxWidth={'1280px'}>
                    <FlexWrapper maxWidth={'361px'} direction={'column'}>
                        <S.FooterText>Finsteer 118 2561 Fintown</S.FooterText>
                        <S.FooterText>Hello@finsweet.com 020 7993 2905</S.FooterText>
                    </FlexWrapper>
                    <FlexWrapper width={'112px'} height={'16px'} gap={'16px'}>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'facebookSvgGrey'} viewBox={'0 0 52 52'} />
                        </S.SocialNetworkIconWrapper>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'TwitterGreySvg'} viewBox={'0 0 52 52'} />
                        </S.SocialNetworkIconWrapper>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'InstaGreySvg'} viewBox={'0 0 52 52'} />
                        </S.SocialNetworkIconWrapper>
                        <S.SocialNetworkIconWrapper>
                        <Icon iconId={'InGreySvg'} viewBox={'0 0 52 52'} />
                        </S.SocialNetworkIconWrapper>
                    </FlexWrapper>
                </S.ResponsiveFlexWrapper2>

            </S.ResponsiveFlexWrapper3>


        </Container>
    </S.Footer>
)
}

