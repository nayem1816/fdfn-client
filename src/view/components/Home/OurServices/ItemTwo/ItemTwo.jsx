import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import CellWifiRoundedIcon from '@mui/icons-material/CellWifiRounded';

const ItemTwo = () => {
    return (
        <Box sx={{ height: { sm: 300, md: 300, lg: 320 } }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: 3, border: 'none', height: '100%' }}
            >
                <CardContent sx={{ p: '20px 45px', height: '100%' }}>
                    <IconButton variant="contained" color="error" size="large">
                        <CellWifiRoundedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ mt: '25px', fontWeight: 600 }}
                    >
                        Internet connectivity
                    </Typography>
                    <Box sx={{ mt: '25px' }}>
                        <Typography color="text.secondary">
                            Internet is defined as Information Super Highway, to
                            access information Over the web.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemTwo;
