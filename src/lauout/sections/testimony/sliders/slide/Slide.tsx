
import { Sl } from '../../sliders/slide/Slyde_Styles'
import { FlexWrapper } from '../../../../../components/FlexWrapper'




interface SlidePropsType {
  description?: string;
  photoAvtor?: string;
  name?: string;
  address?: string;
}

export const Slide = ({
  description,
  photoAvtor,
  name,
  address
}: SlidePropsType): React.ReactElement => {
return (
    <Sl.ResponsiveFlexWrapper1 direction="column" width="555px">
        <Sl.SubTitleTestimony>
        {description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        </Sl.SubTitleTestimony>
        <Sl.ResponsiveFlexWrapper2 margin={'0 0 75px 0'} maxWidth={'260px'}>
        <FlexWrapper gap={'16px'} maxWidth={'250px'}>
            <Sl.Photo src={photoAvtor || ''} alt="" />
            <FlexWrapper direction={'column'} maxWidth={'350px'} margin={'0 141px 0 0'}>
            <Sl.AutorsName>{name}</Sl.AutorsName>
            <Sl.Address>{address}</Sl.Address>
            </FlexWrapper>
        </FlexWrapper>
        </Sl.ResponsiveFlexWrapper2>
    </Sl.ResponsiveFlexWrapper1>
  );
};

