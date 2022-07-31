import React from 'react';

function validate(input) {
    let error = {};
    if (!input.username) {
        error.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
        error.username = 'Username is invalid';
        if (!input.password) {
            error.password = 'password is required';
        } else if (!/(?=.*[0-9])/.test(input.password)) {
            error.password = 'password is invalid';
        }
        return error;
    };
}

export default function Form() {

    const [input, setInput] = React.useState({
        username: '',
        password: ''
    });

    const [error, setErrors] = React.useState({});

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
                <label>Username:</label>
                <input
                    type="text"
                    name='username'
                    onChange={handleInputChange}
                    value={input.username}
                    className={error.username && 'danger'} />
                {
                    error.username && (<p className="danger">{error.username}</p>)
                }
                <div />
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name='password'
                        onChange={handleInputChange}
                        value={input.password}
                        className={error.password && 'danger'}
                    />
                    {
                        error.password && (<p className='danger'>{error.password}</p>)
                    }
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}


