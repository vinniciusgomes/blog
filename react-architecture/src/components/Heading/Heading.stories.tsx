import { Story, Meta } from '@storybook/react/types-6-0';

import { Heading } from './Heading';
import HeadingProps from './interfaces';

export default {
  title: 'Text/Heading',
  component: Heading,
  argTypes: {
    level: {
      options: ['1', '2', '3', '4', '5', '6'],
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = args => <Heading {...args} />;

Default.args = {
  children: 'Heading level 1',
};
