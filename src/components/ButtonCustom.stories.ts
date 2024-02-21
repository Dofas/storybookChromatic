import {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button.tsx";


const meta =  {
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick fired' }
    }
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>

export const MyStory: Story = {
    parameters: {
        layout: 'centered'
    },
    args: {
        label: 'Custom stories',
        primary: true,
        size: 'large',
        backgroundColor: 'red',
    }
}