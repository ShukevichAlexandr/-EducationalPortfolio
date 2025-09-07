import { LeftSide } from "./sides/leftSide/LeftSide"
import { RightSide } from "./sides/rightSide/RightSide"
import { S } from "./Posts_Styles"


export const Posts:React.FC = () => {
return (
    <S.Posts id="posts">
        <S.ResponsiveContainer padding={'0 80px'}>
            <S.MediaWrapper>
                <S.ResponsiveFlexWrapper gap={'30px'}>
                    <LeftSide/>                
                    <RightSide/>
                </S.ResponsiveFlexWrapper>
            </S.MediaWrapper>
        </S.ResponsiveContainer>    
    </S.Posts>
)
}







