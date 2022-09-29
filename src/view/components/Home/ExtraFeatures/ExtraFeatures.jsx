import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const ExtraFeatures = () => {
    return (
        <Container sx={{ mt: { sx: 12, sm: 12, md: 12, lg: 25, xl: 25 } }}>
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            backgroundColor: 'white',
                            boxShadow: 3,
                            borderRadius: '50%',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>
                            <h3>Happy Clients</h3>
                            <h1 style={{ color: 'red' }}>1200+</h1>
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: { sx: 0, sm: 0, md: 0, lg: -12, xl: -12 },
                    }}
                >
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            backgroundColor: 'white',
                            boxShadow: 3,
                            borderRadius: '50%',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>
                            <h3>Live Tv</h3>
                            <h1 style={{ color: 'red' }}>20+</h1>
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: { sx: 0, sm: 0, md: 0, lg: 8, xl: 8 },
                    }}
                >
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            backgroundColor: 'white',
                            boxShadow: 3,
                            borderRadius: '50%',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>
                            <h3>FTP</h3>
                            <h1 style={{ color: 'red' }}>30+</h1>
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: { sx: 0, sm: 0, md: 0, lg: -6, xl: -6 },
                    }}
                >
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            backgroundColor: 'white',
                            boxShadow: 3,
                            borderRadius: '50%',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography>
                            <h3>BDIX</h3>
                            <h1 style={{ color: 'red' }}>100+</h1>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExtraFeatures;
