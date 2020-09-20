import React, { useState } from 'react'
import styled from 'styled-components';

const ColorBoxWrapper = styled.div<{ color: string }>`
  flex-basis: 22%;
  height: 100px;
  margin: 1.5%;
  padding: 8px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  cursor: pointer;
  transition: transform 125ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledText = styled.span<{ color: string}>`
  color: ${({ color }) => color};
  display: block;
  font-weight: 500;
`;

type Props = {
  color: string;
  colorName: string;
};

const CopyStatuses = {
  success: "Copied!",
  failure: "Failed to copy"
};

const LIGHT_COLORS: string[] = [
  'white',
  'lightGray',
  'lightGrayBorder',
  'lightGrayText',
  'grayBackground',
  'grayBorder',
];

const ColorBox = ({color, colorName}: Props) => {
  const [copyStatus, setCopyStatus] = useState<string>('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(CopyStatuses.success);
    } catch (err) {
      setCopyStatus(CopyStatuses.failure);
    }
  };

  const textColor = LIGHT_COLORS.includes(colorName) ? 'black' : 'white';

  return (
    <ColorBoxWrapper
      color={color}
      onClick={() => copyToClipboard(color)}
      onMouseLeave={() => setCopyStatus('')}
    >
      <StyledText color={textColor}>
        { copyStatus || colorName }
      </StyledText>
      <StyledText color={textColor}>
        { color }
      </StyledText>
    </ColorBoxWrapper>
  )
};

export default ColorBox;