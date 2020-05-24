import React from 'react';
import useForm from '../../hooks/form'
import useLogin from './hooks/useLogin'

import { Button, TextField } from '@material-ui/core';

import './styles.scss'

const Login = () => {

    const { form, handleInputChange } = useForm()
    const { validate, submit } = useLogin()

    React.useEffect(() => validate(form), [form])

    const lockIcon = <div className="page-login-icon"><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg></div>

    return (
        <div className="page-login">
            <form>
            
                { lockIcon }

                <h1>Sign in</h1>

                <TextField fullWidth
                    name="username"
                    label="Username"
                    value={form.username}
                    onChange={handleInputChange}
                />

                <TextField fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={handleInputChange}
                />

                <Button variant="contained" className="confirm-button" color="primary" onClick={() => submit(form)}>SIGN IN</Button>
            </form>
        </div>
    )
}

export default Login