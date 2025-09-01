import styled from "styled-components"
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Post } from "../post/Post";


export const RightSide = () => {
return (
    <StileRightSide>
                <FlexWrapper justify={'space-between'} align={'center'} height={'48px'} gap={'32px'} margin={'0 0 10px 0'} maxWidth={'516px'}>
                <SubTitle>All Posts</SubTitle>
                <Link className={'rightSideLinkFeatured'} href="">View All</Link>
                </FlexWrapper>
                <FlexWrapper direction="column" minWidth={'320px'} minHeight={'720px'}>
                    <Post htmlFor="post1" id="post1"/>
                    <Post htmlFor="post2" id="post2" background={'#FBF6EA'}/>
                    <Post htmlFor="post3" id="post3"/>
                    <Post htmlFor="post4" id="post4"/>
                </FlexWrapper>
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


const SubTitle = styled.h2`
    color: black;
    max-width: 650px;
    @media (max-width:500px) {
        padding-left: 20px;
    }
`


const Link = styled.a`
    text-decoration: none;
    @media (max-width:500px) {
        padding-right: 20px;
    }
`

