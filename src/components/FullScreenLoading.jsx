// FullScreenLoading.js
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

function FullScreenLoading({ message = 'Saving...' }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}

export default FullScreenLoading;
