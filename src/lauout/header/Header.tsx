import React from 'react';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { LogoComponent } from '../../components/logo/LogoComponent';
import { MobileHeaderMenu } from './headerMenu/mobileHeaderMenu/MobileMenu';
import { S } from './Header_Styles';
import { FlexWrapper } from '../../components/FlexWrapper';



const items = ['Home', 'Blog', 'About Us', 'Contact Us']

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;
    
    React.useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

return (
    <S.Header>
        <S.ResponsiveContainer padding={'0 80px'} className='HeaderContainer' >
                <S.ResponsiveFlexWrapper1 justify={'space-between'} minHeight={'80px'} gap={'100px'}>
                    <LogoComponent />
                    <S.ResponsiveFlexWrapper2 gap={'16px'} align={'center'} >
                        {/* <FlexWrapper gap={'24px'}> */}
                            {width < breakpoint ? <MobileHeaderMenu menuItems={items}/> :  <DesktopMenu                             menuItems={items}/>}
                        {/* </FlexWrapper> */}

                        <S.Button>Subscribe</S.Button>
                    </S.ResponsiveFlexWrapper2>     
            </S.ResponsiveFlexWrapper1>
        </S.ResponsiveContainer>
    </S.Header>
)
}





