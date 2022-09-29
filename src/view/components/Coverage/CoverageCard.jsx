import React from 'react';
import { Container, Card, Typography } from '@mui/material';

const coverageData = [
    {
        id: 1,
        coverageName: 'Dhaladia',
    },
    {
        id: 2,
        coverageName: 'Dhaladia',
    },
    {
        id: 3,
        coverageName: 'Dhaladia',
    },
    {
        id: 4,
        coverageName: 'Dhaladia',
    },
    {
        id: 5,
        coverageName: 'Dhaladia',
    },
    {
        id: 6,
        coverageName: 'Dhaladia',
    },
    {
        id: 7,
        coverageName: 'Dhaladia',
    },
    {
        id: 8,
        coverageName: 'Dhaladia',
    },
    {
        id: 9,
        coverageName: 'Dhaladia',
    },
];

const CoverageCard = () => {
    return (
        <Container>
            <Typography
                sx={{ textAlign: 'center', my: 5 }}
                variant="h3"
                gutterBottom
            >
                Coverages
            </Typography>
            <div className="row d-flex justify-content-center">
                {coverageData.map((coverage) => (
                    <div className="col-md-3 gap-4" key={coverage.id}>
                        <Card sx={{ minWidth: 275 }}>
                            <h2>{coverage.coverageName}</h2>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default CoverageCard;
