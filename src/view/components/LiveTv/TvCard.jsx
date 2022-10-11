/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
} from '@mui/material';

const TvCard = () => {
    const [tvData, setTvData] = useState([]);

    useEffect(() => {
        fetch('https://fdfn-server-v2.vercel.app/api/v1/readTv')
            .then((response) => response.json())
            .then((result) => setTvData(result.data))
            .catch((error) => console.log('error', error));
    }, []);
    return (
        <>
            <div className="py-5 mb-5 bg-red-600">
                <h2 className="text-white text-2xl text-center underline">
                    Our Live Tv
                </h2>
            </div>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {tvData.map((tv) => (
                            <Grid item xs={2} sm={4} md={4} key={tv._id}>
                                <a href={tv.link} target="_blank">
                                    <Card
                                        sx={{
                                            maxWidth: 345,
                                            mt: 2,
                                            backgroundColor: '#7f8c8d',
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                sx={{ color: 'white' }}
                                            >
                                                {tv.channelName}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default TvCard;
