import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';

const ItemFive = () => {
    return (
        <Box sx={{ height: { sm: 300, md: 300, lg: 320 } }}>
            <Card
                variant="outlined"
                sx={{ boxShadow: 3, border: 'none', height: '100%' }}
            >
                <CardContent sx={{ p: '20px 45px', height: '100%' }}>
                    <IconButton variant="contained" color="error" size="large">
                        <AppShortcutRoundedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ mt: '25px', fontWeight: 600 }}
                    >
                        Software solution
                    </Typography>
                    <Box sx={{ mt: '25px' }}>
                        <Typography color="text.secondary">
                            Software solutions professionals can be employed in
                            large, medium and small enterprises as software
                            engineer.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemFive;
