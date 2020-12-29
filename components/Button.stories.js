import Button from "./Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      defaultValue: "primary",
    },
    square: { control: "boolean" },
    text: {
      control: "text",
    },
  },
}

export const Template = (arg, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
}

export const Square = Template.bind({})
Square.args = {
  square: true,
}
