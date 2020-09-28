import React, { ReactElement, ReactNode } from 'react'
import { Image, ImageSourcePropType  } from 'react-native';
import * as Styled from './image.styled';
import { border } from './enums/border';

type Props = {
  image: ImageSourcePropType;
  width: number;
  height: number;
  border?: border;
  borderRadius: number;
}

const MyImage = ({ image, width, height, borderRadius}: Props): ReactElement => (
  <Styled.StyledImage>
    <Image
      source={image}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
    </Styled.StyledImage>
);

export default MyImage;