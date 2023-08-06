import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const Layout = () => (
  <Box sx={{ marginY: '2rem' }}>
    <Container>
      <Outlet />
    </Container>
  </Box>
);

export default Layout;
