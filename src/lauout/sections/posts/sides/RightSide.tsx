import styled from "styled-components"
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Post } from "../post/Post";


export const RightSide = () => {
return (
    <StileRightSide>
                <ResponsiveFlexWrapper1 justify={'space-between'} align={'center'} height={'48px'} gap={'32px'} margin={'0 auto 10px'} maxWidth={'516px'}>
                <SubTitle>All Posts</SubTitle>
                <Link className={'rightSideLinkFeatured'} href="">View All</Link>
                </ResponsiveFlexWrapper1>
                <ResponsiveFlexWrapper2 direction="column"  minHeight={'720px'}>
                    <Post htmlFor="post1" id="post1"/>
                    <Post htmlFor="post2" id="post2"/>
                    <Post htmlFor="post3" id="post3"/>
                    <Post htmlFor="post4" id="post4"/>
                </ResponsiveFlexWrapper2>
    </StileRightSide>
)
}

const StileRightSide = styled.div`
    max-width: 516px;
    width: 100%;

    @media (max-width:600px) {
        margin: 0 auto ;
    }
`

const ResponsiveFlexWrapper1 = styled(FlexWrapper)`
margin: 0 auto;
    @media (max-width:300px) {
        max-width: 400px;
        gap: 0;
    }
`


const ResponsiveFlexWrapper2 = styled(FlexWrapper)`
margin: 0 auto;
    @media (max-width:500px) {
        max-width: 400px;
    }

    @media (max-width:330px) {
    max-width: 200px;

  }
`




const SubTitle = styled.h2`
    color: black;
    max-width: 650px;

    @media (max-width:900px) {
        padding-left: 20px;
    }

`


const Link = styled.a`
    text-decoration: none;
    @media (max-width:500px) {
        padding-right: 20px;
    }
`

