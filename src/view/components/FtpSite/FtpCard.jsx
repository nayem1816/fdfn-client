/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';

const FtpCard = () => {
    const [ftpData, setFtpData] = useState([]);

    useEffect(() => {
        fetch('http://fdfnserverapi.fdfn.net/api/v1/readFtpSite')
            .then((response) => response.json())
            .then((result) => setFtpData(result.data))
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <Container>
            <Typography
                sx={{ textAlign: 'center', my: 5 }}
                variant="h3"
                gutterBottom
            >
                FTP Sites
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {ftpData.map((ftp) => (
                        <Grid item xs={2} sm={4} md={4} key={ftp._id}>
                            <a href={ftp.link} target="_blank">
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        mt: 2,
                                        backgroundColor: '#7f8c8d',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        height="140"
                                        image={`http://${ftp.image}`}
                                        alt="green iguana"
                                    />
                                    <CardContent
                                    // sx={{ backgroundColor: 'black' }}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{ color: 'white' }}
                                        >
                                            {ftp.ftpName}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default FtpCard;
