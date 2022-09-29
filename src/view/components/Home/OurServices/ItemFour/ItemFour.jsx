import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import NetworkCellRoundedIcon from '@mui/icons-material/NetworkCellRounded';

const ItemFour = () => {
    return (
        <Box sx={{ height: { sm: 300, md: 300, lg: 320 } }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: 3, border: 'none', height: '100%' }}
            >
                <CardContent sx={{ p: '20px 45px', height: '100%' }}>
                    <IconButton variant="contained" color="error" size="large">
                        <NetworkCellRoundedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ mt: '25px', fontWeight: 600 }}
                    >
                        Networking solution
                    </Typography>
                    <Box sx={{ mt: '25px' }}>
                        <Typography color="text.secondary">
                            Many companies find themselves in the position of
                            having to manage complex networks provided by a
                            number of different vendors.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemFour;
