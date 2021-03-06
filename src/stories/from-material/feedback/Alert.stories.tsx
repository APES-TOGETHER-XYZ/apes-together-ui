import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert, Stack } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Others/feedback/Alert',
  component: Alert,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Alert>;

export const Template: ComponentStory<typeof Alert> = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
      <Alert severity='warning'>This is a warning alert — check it out!</Alert>
      <Alert severity='info'>This is an info alert — check it out!</Alert>
      <Alert severity='success'>This is a success alert — check it out!</Alert>
    </Stack>
  );
};
