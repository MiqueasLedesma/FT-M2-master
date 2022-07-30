import React from 'react';
import './Validate.jsx'

export default function Form() {

    const [input, setInput] = React.useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form onSubmit={handleInputChange}>
            <div>
                <br />
                <label>Username:</label>
                <input type="text" name='username' onChange={handleInputChange} value={input.username} />
                {errors.username && (
                    <p className="danger">{errors.username}</p>
                )}
                <div />
                <br />
                <div>
                    <label>Password:</label>
                    <input type="password" name='password' onChange={handleInputChange} value={input.password} />
                </div>
                <br />
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}


