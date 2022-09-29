import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const ItemThree = () => {
    return (
        <Box sx={{ height: { sm: 425, md: 425, lg: 480 } }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: 3, border: 'none', height: '100%' }}
            >
                <CardContent sx={{ p: '20px 45px', height: '100%' }}>
                    <IconButton variant="contained" color="error" size="large">
                        <AccessTimeFilledOutlinedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ mt: '25px', fontWeight: 600 }}
                    >
                        24/7 Support
                    </Typography>
                    <Box sx={{ mt: '25px' }}>
                        <Typography color="text.secondary">
                            We have the best support team you can have. They are
                            ready 24/7 to support with any kind of connectivity
                            or user issues at any cost!
                        </Typography>
                    </Box>
                    <Box variant="body2" sx={{ mt: '35px', fontSize: '20px' }}>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'start',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            Redundant connection ensure that You never go
                            offline
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            Our Expart Support all time ready for you
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemThree;
