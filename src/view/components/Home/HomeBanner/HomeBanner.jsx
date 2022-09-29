import React from 'react';
import Container from '@mui/material/Container';
import ItemOne from './ItemOne/ItemOne';
import ItemTwo from './ItemTwo/ItemTwo';
import { Grid } from '@mui/material';

const HomeBanner = () => {
    return (
        <Container maxWidth="xl">
            <Grid
                container
                spacing={2}
                sx={{ mt: '40px', alignItems: 'center' }}
            >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ItemOne />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ItemTwo />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeBanner;
