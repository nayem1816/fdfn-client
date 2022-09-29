import React from 'react';
import {
    Container,
    Grid,
    Box,
    Button,
    Typography,
    IconButton,
} from '@mui/material';
import homeAboutImg from '../../../../assets/images/homeAbout.png';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';

const AboutFdfn = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 6 }}>
            <Grid
                container
                spacing={3}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <IconButton variant="contained" color="error" size="large">
                        <AcUnitRoundedIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography sx={{ mt: 2 }} variant="h6">
                        About the FDFN
                    </Typography>
                    <Typography variant="h5" sx={{ mt: '10px', mb: 2 }}>
                        FDFN is a place where internet make its way to the end
                        users at ease in a quality manner. We thrive for
                        quality. So be assured.
                    </Typography>
                    <Typography variant="p">
                        FDFN is dedicated to its users best interest. We are
                        determined to shine the light of the internet into
                        everyone and we will not stop until everyone is
                        satisfied.
                    </Typography>
                    <Box sx={{ mt: '30px' }}>
                        <Button
                            style={{ padding: '10px 20px' }}
                            variant="contained"
                            color="error"
                        >
                            Know More
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={homeAboutImg} alt="" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutFdfn;
