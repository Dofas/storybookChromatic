import {Meta, StoryObj} from "@storybook/react";
import {Header} from "./Header.tsx";


const meta = {
    component: Header,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        onLogin: {action: 'onLogin fired'},
        onCreateAccount: {action: 'onCreateAccount fired'}
    }
} satisfies Meta<typeof Header>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    }
}