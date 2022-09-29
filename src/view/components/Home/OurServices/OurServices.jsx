import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import ItemOne from './ItemOne/ItemOne';
import ItemTwo from './ItemTwo/ItemTwo';
import ItemThree from './ItemThree/ItemThree';
import ItemFour from './ItemFour/ItemFour';
import ItemFive from './ItemFive/ItemFive';

const OurServices = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ mt: '40px' }}>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                    <ItemOne />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ItemTwo />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ItemThree />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ItemFour />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ItemFive />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurServices;
