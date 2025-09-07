import { Post } from "../../post/Post";
import { S } from "./RightSide_Styles";


export const RightSide:React.FC = () => {
return (
    <S.RightSide>
                <S.ResponsiveFlexWrapper1 justify={'space-between'} align={'center'} height={'48px'} gap={'32px'} margin={'0 auto 10px'} maxWidth={'516px'}>
                <S.SubTitle>All Posts</S.SubTitle>
                <S.Link className={'rightSideLinkFeatured'} href="">View All</S.Link>
                </S.ResponsiveFlexWrapper1>
                <S.ResponsiveFlexWrapper2 direction="column"  minHeight={'720px'}>
                    <Post htmlFor="post1" id="post1"/>
                    <Post htmlFor="post2" id="post2"/>
                    <Post htmlFor="post3" id="post3"/>
                    <Post htmlFor="post4" id="post4"/>
                </S.ResponsiveFlexWrapper2>
    </S.RightSide>
)
}
