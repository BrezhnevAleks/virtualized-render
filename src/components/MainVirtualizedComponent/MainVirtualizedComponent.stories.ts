import type { Meta, StoryObj } from "@storybook/react";

import MainVirtualizedComponent from "./MainVirtualizedComponent";
import items from "../../mocks/items";

const meta: Meta<typeof MainVirtualizedComponent> = {
  title: "Virtualized Render",
  component: MainVirtualizedComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    items: items,
  },
};

export const WithData: Story = {
  args: {
    items: items.slice(0, 10),
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
