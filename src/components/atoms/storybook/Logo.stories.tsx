import React from 'react'
import { Meta, Story, StoryObj } from '@storybook/react'
import Logo, { LogoProps } from '../Logo'


const meta: Meta = {
    title: "Components/Atoms/Logo",
    component: Logo,
    argTypes: {
        id: {
            control: {
                type: 'number'
            }
        },
        link: {
            control: {
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }
    },
    tags: ["autodocs"]
};

export default meta;

type Logo = StoryObj<typeof Logo>;

export const Small: Logo = {
    args: {
        id: 1,
        link: '/',
        size: 'small'
    }
};

export const Medium: Logo = {
    args: {
        id: 1,
        link: '/',
        size: 'medium'
    }
};

export const Large: Logo = {
    args: {
        id: 1,
        link: '/',
        size: 'large'
    }
};
