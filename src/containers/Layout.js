import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => (
  <Box sx={{ marginY: '2rem' }}>
    <Outlet />
  </Box>
);

export default Layout;
