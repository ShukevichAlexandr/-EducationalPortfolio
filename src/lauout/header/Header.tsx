import styled from 'styled-components';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { LogoComponent } from '../../components/logo/LogoComponent';
import { MobileHeaderMenu } from './mobileHeaderMenu/MobileMenu';


const items = ['Home', 'Blog', 'About Us', 'Contact Us']

export const Header = () => {
return (
    <StyledHeader>
        <ResponsiveContainer padding={'0 80px'}>
                <ResponsiveFlexWrapper justify={'space-between'} height={'80px'} gap={'100px'}>
                    <LogoComponent />
                    <FlexWrapper gap={'30px'} align={'center'} justify={'space-between'}>
                        <HeaderMenu menuItems={items}/>
                        <MobileHeaderMenu menuItems={items}/>
                        <Button>Subscribe</Button>
                    </FlexWrapper>     
            </ResponsiveFlexWrapper>
        </ResponsiveContainer>
    </StyledHeader>
)
}


const ResponsiveContainer = styled(Container)`

`

const StyledHeader = styled.header`
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

const ResponsiveFlexWrapper = styled(FlexWrapper)`

@media (max-width: 960px) {
    justify-content: space-around;
    gap: none;
}
`


const Button = styled.button`
    width: 180px;   
    height: 40px;
    background-color: #FBF6EA;
    @media (max-width: 840px){

        max-width: 180px;
        height: 40px;
        position: fixed;
        top: 34px;
        right: 30px;
    }
    


`


