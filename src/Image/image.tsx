import React, { ReactElement, ReactNode } from 'react'
import { Image, ImageSourcePropType  } from 'react-native';
import * as Styled from './image.styled';
import { border } from './enums/border';

type Props = {
  image?: ImageSourcePropType;
  width: number;
  height: number;
  border?: border;
  borderRadius?: number;
}

const MyImage = ({ width, height, borderRadius}: Props): ReactElement => (
  <Styled.StyledImage>
    <Image
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
    </Styled.StyledImage>
);

export default MyImage;