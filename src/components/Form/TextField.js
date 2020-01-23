import React from 'react';
import {TextField} from '@material-ui/core';
const textField = ({
    input,
    label,
    // meta: { touched, error },
    ...custom
}) => {
    return <TextField
    // hintText={label}
    // floatingLabelText={label}
    // // errorText={touched}
    // error={touched}
    // helperText={''}
    // {...input}
    // {...custom}
    label={label}
    hintText={label}
    floatingLabelText={label}
    // errorText={touched && error}
    {...input}
    {...custom}
/>
}

export default textField;