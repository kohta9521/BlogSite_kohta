import React from 'react'
import { Meta, Story, StoryObj } from '@storybook/react'
import List, { ListProps } from '../List'

const meta: Meta = {
    title: "Components/Atoms/List",
    component: List,
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
        text: {
            control: {
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        color: {
            control: {
                type: 'select',
                options: ['blue', 'white', 'black']
            }
        }
    },
    tags: ["autodocs"]
};

export default meta

type List = StoryObj<typeof List>

export const Defult: List = {
    args: {
        id: 1,
        link: '/',
        text: 'About',
        size: 'medium',
        color: 'black'
    }
}