import React from 'react';

const useLogin = props => {

    const submit = (form) => {
        console.log(form)
    }

    const validate = (form) => {
        
    }

    return {
        submit, validate
    }
}

export default useLogin;