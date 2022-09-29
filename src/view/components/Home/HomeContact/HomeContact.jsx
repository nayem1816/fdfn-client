import React from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

const HomeContact = () => {
    return (
        <Container>
            <Box
                sx={{
                    border: '1px solid #e0e0e0',
                    p: 5,
                    m: { xs: 0, sm: 0, md: 5, lg: 5, xl: 5 },
                    borderRadius: 3,
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h4">Stay Connected</Typography>
                        <Box sx={{ mt: 3 }}>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',

                                    mt: 1,
                                }}
                                variant="p"
                                component="p"
                            >
                                <CallIcon /> +8801310913326
                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 1,
                                }}
                                variant="p"
                                component="p"
                            >
                                <CallIcon /> +8801310913327
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'end',
                                lg: 'end',
                                xl: 'end',
                            },
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Button
                                style={{ padding: '20px 30px' }}
                                variant="contained"
                                color="error"
                            >
                                Contact Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default HomeContact;
