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
                <ResponsiveFlexWrapper1 justify={'space-between'} minHeight={'80px'} gap={'100px'}>
                    <LogoComponent />
                    <ResponsiveFlexWrapper2 gap={'30px'} align={'center'} justify={'space-between'}>
                        <HeaderMenu menuItems={items}/>
                        <MobileHeaderMenu menuItems={items}/>
                        <Button>Subscribe</Button>
                    </ResponsiveFlexWrapper2>     
            </ResponsiveFlexWrapper1>
        </ResponsiveContainer>
    </StyledHeader>
)
}


const ResponsiveContainer = styled(Container)`
    @media (max-width:500px) {
        padding: 0 20px;
    }
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
        top: 34px;
        right: 40px;
    }
    
    @media (max-width:500px) {
        max-width: 100px;
        height: 30px;
        position: fixed;
        top: 36px;
        right: 30px;
    }

    @media (max-width: 340px) {
        position: fixed;
        top: 58px;
        right: 35px;
}
`


