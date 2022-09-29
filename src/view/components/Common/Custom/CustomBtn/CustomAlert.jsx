import React from 'react';
import { Alert, Box } from '@mui/material';

const CustomAlert = ({ alertType, alertText, ...otherProps }) => {
    return (
        <Box {...otherProps}>
            <Alert sx={{ m: 2 }} severity={alertType}>
                {alertText}
            </Alert>
        </Box>
    );
};

export default CustomAlert;
