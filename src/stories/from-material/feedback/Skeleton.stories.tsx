import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Grid, Skeleton, Stack, Typography } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Others/feedback/Skeleton',
  component: Skeleton,

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
} as ComponentMeta<typeof Skeleton>;

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container wrap='nowrap'>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant='rectangular' width={210} height={118} />
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant='body2'>
                {item.title}
              </Typography>
              <Typography display='block' variant='caption' color='text.secondary'>
                {item.channel}
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width='60%' />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export const Template: ComponentStory<typeof Skeleton> = () => {
  return (
    <Stack spacing={2} alignItems='center' direction={'column'}>
      <Stack spacing={1}>
        <Skeleton variant='text' />
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={210} height={118} />
      </Stack>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ overflow: 'hidden' }}>
        <Media loading />
        <Media />
      </Box>
    </Stack>
  );
};
