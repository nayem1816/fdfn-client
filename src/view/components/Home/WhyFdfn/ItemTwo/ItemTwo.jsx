import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import CellWifiOutlinedIcon from '@mui/icons-material/CellWifiOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const ItemTwo = () => {
    return (
        <Box sx={{ height: { sm: 425, md: 425, lg: 480 } }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: 3, border: 'none', height: '100%' }}
            >
                <CardContent sx={{ p: '20px 45px', height: '100%' }}>
                    <IconButton variant="contained" color="error" size="large">
                        <CellWifiOutlinedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ mt: '25px', fontWeight: 600 }}
                    >
                        Unlimited Data
                    </Typography>
                    <Box sx={{ mt: '25px' }}>
                        <Typography color="text.secondary">
                            We provide unlimited data bandwidth for ultimate web
                            browsing experience and also our flawless
                            connectivity helps with stable download and upload
                            speed all the time.
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
                            24 Hrs Same Speed
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            Higher Upload Speed
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            Guaranteed Uptime
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemTwo;
