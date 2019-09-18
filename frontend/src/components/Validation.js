import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import './style.css'

export const Validation = withRouter((props) =>{
    const [values, setValues] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});

    function validate(values) {
        let errors = {};
        if (!values.email){
            errors.email = 'Email address is required'
        }else if (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Email address is invalid";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password needs to be more than 6 characters";
        }

        return errors
    }

    const handleSubmit = event =>{
        event.preventDefault();
        let errors = validate(values);
        if (Object.keys(errors).length){
            setErrors(validate(values));
        }else{
            props.history.push('/question')
        }
    };

    const handleChange = event =>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    return(
        <div className='container input text-center'>
                <div className='row mt-5 mb-3'>
                    <div className='col'>
                        <h1>Login form</h1>
                    </div>
                </div>
            <form>
                <div className="form-group row ">
                    <label  className="col-lg-2 col-form-label">Email</label>
                    <div className="col-sm-10 text-center">
                        <input type="email" className="form-control" name='email' value={values.email} placeholder="Email" onChange={handleChange}/>
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-lg-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name='password' value={values.password} className="form-control" placeholder="Password" onChange={handleChange}/>
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button onClick={handleSubmit} type="submit" className="btn btn-success">Login</button>
                    </div>
                </div>
            </form>

        </div>
    )
})