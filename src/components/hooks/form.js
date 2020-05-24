import { useState } from 'react';

const useForm = (props) => {

    const [ form, setForm ] = useState(props || {})

    const handleInputChange = e => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleValue = (name, value) => {
        setForm({...form, [name]: value})
    }

    return {
        form, setForm, handleValue, handleInputChange
    }
}

export default useForm