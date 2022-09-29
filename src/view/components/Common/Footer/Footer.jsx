import React from 'react';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import fdfnLogo from '../../../../assets/icons/fdfn-logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Container sx={{ mt: 15, mb: 5 }}>
            <Box>
                <Grid
                    container
                    spacing={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'start',
                                lg: 'start',
                                xl: 'start',
                            },
                        }}
                    >
                        <Box>
                            <img
                                src={fdfnLogo}
                                alt="FDFN LOGO"
                                width="200px"
                                height="160px"
                            />
                            <Box
                                sx={{
                                    width: '200px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <IconButton color="primary">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton color="primary">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton color="primary">
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton color="primary">
                                    <YouTubeIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontWeight: 600 }} variant="h5">
                                Office
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    sx={{ mt: 1 }}
                                    variant="p"
                                    component="p"
                                >
                                    Dhaladia, Rajabari
                                </Typography>
                                <Typography
                                    sx={{ mt: 1 }}
                                    variant="p"
                                    component="p"
                                >
                                    Sreepur, Gazipur
                                </Typography>
                                <Typography
                                    sx={{ mt: 1 }}
                                    variant="p"
                                    component="p"
                                >
                                    fdfn2016@gmail.com
                                </Typography>
                            </Box>
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
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                sm: 'center',
                                md: 'end',
                                lg: 'end',
                                xl: 'end',
                            },
                            textAlign: 'center',
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: 600 }} variant="h5">
                                About Company
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    sx={{ mt: 1 }}
                                    variant="p"
                                    component="p"
                                >
                                    <Link to="/">About</Link>
                                </Typography>
                                <Typography
                                    sx={{ mt: 1 }}
                                    variant="p"
                                    component="p"
                                >
                                    <Link to="/">Contact</Link>
                                </Typography>
                                <Typography
                                    sx={{ mt: 1 }}
                                    variant="p"
                                    component="p"
                                >
                                    <Link to="/">Test your speed</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', my: 8 }}>
                    &copy; {year} All rights reserved & Developed by Md Nayem
                    Hossain
                </Typography>
            </Box>
        </Container>
    );
};

export default Footer;
