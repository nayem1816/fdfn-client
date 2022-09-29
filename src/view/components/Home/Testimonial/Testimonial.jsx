import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Avatar, Container, Grid, Box, Typography } from '@mui/material';
import profileAvatar from '../../../../assets/images/profile.png';
import reviewImg from '../../../../assets/images/review.png';

const items = [
    {
        name: 'Md Nayem Hossain',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde numquam dicta ab tempora accusantium voluptate quasi, molestias quibusdam quod.',
    },
    {
        name: 'Tipu Kawser',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde numquam dicta ab tempora accusantium voluptate quasi, molestias quibusdam quod.',
    },
    {
        name: 'Abdullah',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde numquam dicta ab tempora accusantium voluptate quasi, molestias quibusdam quod.',
    },
    {
        name: 'Masum',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde numquam dicta ab tempora accusantium voluptate quasi, molestias quibusdam quod.',
    },
];

const Testimonial = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 7 }}>
            <Grid
                container
                spacing={4}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <Typography variant="h6">TESTIMONIAL</Typography>
                    <Typography variant="h4" sx={{ my: 3 }}>
                        What Our core client say ?
                    </Typography>
                    <Carousel>
                        {items.map((item, i) => (
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 5,
                                    // border: '1px solid #e0e0e0',
                                }}
                            >
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                    variant="div"
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={profileAvatar}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    />
                                </Typography>
                                <Typography variant="h5">
                                    {item.name}
                                </Typography>
                                <Typography variant="p">
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </Carousel>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <img src={reviewImg} alt="" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;
