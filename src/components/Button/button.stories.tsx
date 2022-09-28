import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import docgen from "react-docgen-typescript"


import Button, { ButtonType, ButtonSize } from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}> large button </Button>
    <Button size={ButtonSize.Small}> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}> primary button </Button>
    <Button btnType={ButtonType.Danger}> danger button </Button>
    <Button btnType={ButtonType.Link} href="https://google.com"> link button </Button>
  </>
)

const options = {
  savePropValueAsString: true,
};

// const docs = docgen.parse('./button.tsx', options)
// console.log(docgen.parse('./button.tsx', options))

// storiesOf('Button Component', module)
//   .add('默认 Button', defaultButton)
//   .add('不同尺寸的 Button', buttonWithSize)
//   .add('不同类型的 Button', buttonWithType)
const argTypes = {
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: 'Hello',
    description: 'demo description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Hello' },
    },
    control: {
      type: 'text'
    }
  }
}

export default {
  title: 'Button',
  component: Button,
  // argTypes,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button onClick={action('clicked')}> default button </Button>;
// export const Empty = (args) => <Button {...args} />;



