import React from 'react';
import { H1, H2, H3, H4, H5, H6, Text, Subtitle } from './typography'
import { boolean, select, text, number } from '@storybook/addon-knobs'
import { SIZE } from '../theme/spacing';
import styled from 'styled-components';
import { colors } from '../theme/Colors/colors';


const StyledWrapper = styled.div`
    display: flex; 
    flex-direction: column;
`;

export default {
    title: 'Typography',
};

export const Knobs = () => (
    <StyledWrapper>
        <H1
            color={select('color', colors, 'black')}
            bold={boolean('bold', false)}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
        >
            {text('Change Title Value', 'Value for Title')}
        </H1>
        <H2
            color={select('color', colors, 'black')}
            bold={boolean('bold', false)}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
        >
            {text('Change Title Value', 'Value for Title')}
        </H2>
        <H3
            color={select('color', colors, 'black')}
            bold={boolean('bold', false)}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
        >
            {text('Change Title Value', 'Value for Title')}
        </H3>
        <H4
            color={select('color', colors, 'black')}
            bold={boolean('bold', false)}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
        >
            {text('Change Title Value', 'Value for Title')}
        </H4>
        <H5
            color={select('color', colors, 'black')}
            bold={boolean('bold', false)}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
        >
            {text('Change Title Value', 'Value for Title')}
        </H5>
        <H6
            color={select('color', colors, 'black')}
            bold={boolean('bold', false)}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
        >
            {text('Change Title Value', 'Value for Title')}
        </H6>
        <Text
            color={select('color', colors, 'black')}
            fontWeightText={number('font-weight for Text (PT Sans)', 400, { range: true, min: 400, max: 700, step: 300 })}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
            size={select('Change Text size', SIZE, 'md')}
            crossedOut={boolean('Crossed out Text and Subtitle', false)}
        >
            {text('Change Text Value', 'Check out this pretty text')}
        </Text>
        <Subtitle
            color={select('color', colors, 'black')}
            fontWeightText={number('font-weight for Subtitle (Playfair Display)', 400, { range: true, min: 400, max: 900, step: 100 })}
            block={boolean('display: block', false)}
            italic={boolean('font-style: italic', false)}
            size={select('Change Subtitel size', SIZE, 'md')}
            crossedOut={boolean('Crossed out Text and Subtitle', false)}
        >
            {text('Change Subtitle Value', 'Check out this pretty subtitle')}
        </Subtitle>
    </StyledWrapper >
);

export const list = () => (
    <StyledWrapper>
        <H1 color='black' bold={false} block={false} italic={false}>
            H1 value
        </H1>
        <H2 color='black' bold={false} block={false} italic={false}>
            H2 value
        </H2>
        <H3 color='black' bold={false} block={false} italic={false}>
            H3 value
        </H3>
        <H4 color='black' bold={false} block={false} italic={false}>
            H4 value
        </H4>
        <H5 color='black' bold={false} block={false} italic={false}>
            H5 value
        </H5>
        <H6 color='black' bold={false} block={false} italic={false}>
            H6 value
        </H6>
        <Text color='black' bold={false} block={false} size='md' italic={false}>
            Text with size 'md'
        </Text>
        <Subtitle color='black' bold={false} block={false} size='md' italic={false}>
            Subtitle with size 'md'
        </Subtitle>
    </StyledWrapper>
);