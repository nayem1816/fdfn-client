import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ placeHolder, inputType, ...otherProps }) => {
    return (
        <TextField
            sx={{ width: '100%', mb: 2 }}
            type={inputType}
            label={placeHolder}
            variant="filled"
            {...otherProps}
        />
    );
};

export default CustomInput;
