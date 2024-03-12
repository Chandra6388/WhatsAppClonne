import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Contest/AccountProvider';
import { Box } from '@mui/material';



const Header = () => {
    const { account } = useContext(AccountContext);
    console.log(account.picture)
    return (
        <>
            <Box>
            <img src={account.picture} alt="User Profile" />

            </Box>

        </>
    );
}

export default Header;
