import { Box, Button } from '@mui/material';
import React from 'react';

const ItemOne = () => {
    return (
        <Box>
            <Box sx={{ fontSize: { sm: 24, md: 24, lg: 28 } }}>
                <h1 style={{ fontWeight: 500 }}>
                    Get Excellent <br />& Unlimited Browsing
                </h1>
            </Box>
            <Box sx={{ mt: '50px' }}>
                <p style={{ fontSize: '22px' }}>
                    We provide fastest Internet Service in Dhaladia 24/7 and 365
                    days.
                </p>
            </Box>
            <Box sx={{ mt: '50px' }}>
                <Button
                    style={{ padding: '10px 20px' }}
                    variant="contained"
                    color="error"
                >
                    Contact Now
                </Button>
            </Box>
        </Box>
    );
};

export default ItemOne;
