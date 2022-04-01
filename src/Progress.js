import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 18,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "linear-gradient(-270deg, rgba(118,174,254,1) 0%, rgba(141,126,249,1) 100%)",
  },
}));



export default function CustomizedProgressBars({val}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={val} />
    </Box>
  );
  }