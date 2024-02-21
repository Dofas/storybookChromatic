import {Meta, StoryObj} from "@storybook/react";
import {Page} from "./Page.tsx";
import {expect, userEvent, within} from "@storybook/test";

const meta = {
    component: Page,
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LogOut: Story = {
    args: {}
}

export const LogIn: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', { name: /Log in/i });
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();

        const logoutButton = canvas.getByRole('button', { name: /Log out/i });
        await expect(logoutButton).toBeInTheDocument();
    },
}