import React from 'react';
import { Box, Card, CardContent, p, IconButton } from '@mui/material';
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
                    <p sx={{ mt: '25px', fontWeight: 600 }}>Unlimited Data</p>
                    <Box sx={{ mt: '25px' }}>
                        <p color="text.secondary">
                            We provide unlimited data bandwidth htmlFor ultimate
                            web browsing experience and also our flawless
                            connectivity helps with stable download and upload
                            speed all the time.
                        </p>
                    </Box>
                    <Box variant="body2" sx={{ mt: '35px', fontSize: '20px' }}>
                        <p
                            sx={{
                                display: 'flex',
                                alignItems: 'start',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            24 Hrs Same Speed
                        </p>
                        <p
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            Higher Upload Speed
                        </p>
                        <p
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: '10px',
                            }}
                        >
                            <AddBoxOutlinedIcon color="error" sx={{ mr: 2 }} />
                            Guaranteed Uptime
                        </p>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemTwo;
