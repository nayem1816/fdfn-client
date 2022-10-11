import React from 'react';
import { Box } from '@mui/material';

const ItemOne = () => {
    return (
        <Box sx={{ fontSize: { sm: 20, md: 18, lg: 22 } }}>
            <p variant="h6">OUR SERVICES</p>
            <h2
                style={{ fontWeight: 500, letterSpacing: 4, marginTop: '25px' }}
            >
                Build lasting relationships with Users
            </h2>
        </Box>
    );
};

export default ItemOne;
