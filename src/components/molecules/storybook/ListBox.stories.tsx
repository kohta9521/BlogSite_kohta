import React from 'react';
import { Meta } from '@storybook/react';
import ListBox from '../ListBox';

export default {
    title: 'Components/Molecules/ListBox',
    component: ListBox,
    tags: ["autodocs"]
} as Meta;

const Template = () => <ListBox />;

export const Default = Template.bind({});