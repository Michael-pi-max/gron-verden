import React from 'react';
import TextInput from './TextInput';
import RadioButtons from './RadioButtons';

function FormikControl({control, ...rest}) {
    switch(control){
        case 'input':
            return <TextInput {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
        case 'date':
        default:
            return null
    }
}

export default FormikControl;