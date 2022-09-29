import React from 'react';
import { Box, Skeleton, Container } from '@mui/material';

const Skeleton1 = () => {
    return (
        <Container>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Skeleton sx={{ height: 50 }} animation="wave" />
                <Skeleton sx={{ height: 50 }} animation="wave" />
                <Skeleton sx={{ height: 50 }} animation="wave" />
                <Skeleton sx={{ height: 50 }} animation="wave" />
                <Skeleton sx={{ height: 50 }} animation="wave" />
                <Skeleton sx={{ height: 50 }} animation="wave" />
                <Skeleton sx={{ height: 50 }} animation="wave" />
            </Box>
        </Container>
    );
};

export default Skeleton1;
