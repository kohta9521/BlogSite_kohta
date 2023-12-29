import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BoxButton, { BoxButtonProps } from "../BoxButton";

const meta: Meta<BoxButtonProps> = {
  title: "Components/Atoms/BoxButton",
  component: BoxButton,
  argTypes: {
    id: {
      control: "number",
      defaultValue: 1,
    },
    text: {
      control: "text",
      defaultValue: "Click Me",
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
      defaultValue: "medium",
    },
    color: {
      control: { type: "select", options: ["blue", "white", "black"] },
      defaultValue: "blue",
    },
    link: {
      control: "text",
      defaultValue: "/",
    },
  },
};

export default meta;

export const Default: StoryObj<BoxButtonProps> = {
  render: (args) => <BoxButton {...args} />,
};

export const Small: StoryObj<BoxButtonProps> = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Large: StoryObj<BoxButtonProps> = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const Black: StoryObj<BoxButtonProps> = {
  args: {
    ...Default.args,
    color: "black",
  },
};
