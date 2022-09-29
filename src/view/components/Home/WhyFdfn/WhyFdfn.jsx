import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import ItemOne from './ItemOne/ItemOne';
import ItemTwo from './ItemTwo/ItemTwo';
import ItemThree from './ItemThree/ItemThree';

const WhyFdfn = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ mt: '40px' }}>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <ItemOne />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <ItemTwo />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <ItemThree />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyFdfn;
