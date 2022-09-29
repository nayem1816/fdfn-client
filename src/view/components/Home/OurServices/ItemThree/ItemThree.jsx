import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import DataSaverOffRoundedIcon from '@mui/icons-material/DataSaverOffRounded';

const ItemThree = () => {
    return (
        <Box sx={{ height: { sm: 300, md: 300, lg: 320 } }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: 3, border: 'none', height: '100%' }}
            >
                <CardContent sx={{ p: '20px 45px', height: '100%' }}>
                    <IconButton variant="contained" color="error" size="large">
                        <DataSaverOffRoundedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ mt: '25px', fontWeight: 600 }}
                    >
                        Data connectivity
                    </Typography>
                    <Box sx={{ mt: '25px' }}>
                        <Typography color="text.secondary">
                            A generic term for connecting devices to each other
                            in order to transfer data back and forth.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemThree;
