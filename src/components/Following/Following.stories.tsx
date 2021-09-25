import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Following } from "./Following"
import { profiles } from "common"

export default {
  title: "Following",
  component: Following,
} as ComponentMeta<typeof Following>

const Template: ComponentStory<typeof Following> = (args) => <Following {...args} />

export const Default = Template.bind({})
Default.args = {
  profiles,
}