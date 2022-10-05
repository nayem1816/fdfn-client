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
                            <p sx={{ fontWeight: 600 }}>Office</p>
                            <Box sx={{ mt: 2 }}>
                                <p sx={{ mt: 1 }}>Dhaladia, Rajabari</p>
                                <p sx={{ mt: 1 }}>Sreepur, Gazipur</p>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <p
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',

                                        mt: 1,
                                    }}
                                >
                                    <CallIcon /> +8801310913326
                                </p>
                                <p
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: 1,
                                    }}
                                >
                                    <CallIcon /> +8801310913327
                                </p>
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
                            <p sx={{ fontWeight: 600 }}>About Company</p>
                            <Box sx={{ mt: 2 }}>
                                <p sx={{ mt: 1 }}>
                                    <Link to="/">About</Link>
                                </p>
                                <p sx={{ mt: 1 }}>
                                    <Link to="/">Contact</Link>
                                </p>
                                <p sx={{ mt: 1 }}>
                                    <Link to="/">Test your speed</Link>
                                </p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', my: 8 }}>
                    &copy; {year} All rights reserved & Developed by{' '}
                    <a
                        href="https://dev-nym.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Md Nayem Hossain
                    </a>
                </Typography>
            </Box>
        </Container>
    );
};

export default Footer;
