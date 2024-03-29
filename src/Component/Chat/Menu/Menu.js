import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import Search from './SearchBox';

const Menu = () => {
  return (
    <Box>
      <Header/>
      <Search/>
    </Box>
  );
}

export default Menu;
