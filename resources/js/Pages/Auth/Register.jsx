import AuthLayout from '@/Layouts/AuthLayout'
import React, { useEffect } from 'react'
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register({status}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };



    return (
        <AuthLayout>
            <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">


                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                {/* <ValidationErrors errors={errors} /> */}

                <h3 className="login-heading mb-4">Create your new account.</h3>
                <form autoComplete="off" onSubmit={submit}>
                    <div className="form-label-group">
                        <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="Enter your first name"
                            autoComplete="off"
                            name='first_name'
                            value={data.first_name}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div>
                        {errors.first_name && <p className='text-danger'>{errors.first_name}</p>}
                    </div>

                    <div className="form-label-group">
                        <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            placeholder="Enter your last name"
                            autoComplete="off"
                            name='last_name'
                            value={data.last_name}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div>
                        {errors.last_name && <p className='text-danger'>{errors.last_name}</p>}
                    </div>

                    <div className="form-label-group">
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            autoComplete="off"
                            name='email'
                            value={data.email}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div>
                        {errors.email && <p className='text-danger'>{errors.email}</p>}
                    </div>
                    <div className="form-label-group">
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="new-password"
                            name='password'
                            value={data.password}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div>
                        {errors.password && <p className='text-danger'>{errors.password}</p>}
                    </div>

                    <div className="form-label-group">
                        <input
                            type="password"
                            id="password_confirmation"
                            className="form-control"
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            name='password_confirmation'
                            value={data.password_confirmation}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="password_confirmation">Confirm Password</label>
                    </div>
                    <div>
                        {errors.password && <p className='text-danger'>{errors.password}</p>}
                    </div>

                    <button
                        className={`btn btn-lg ${processing ? 'btn-dark' : 'btn-outline-primary'
                            }   btn-block btn-login text-uppercase font-weight-bold mb-2`}
                        disabled={processing}
                    >
                        Create Account
                    </button>

                    {processing && <p>Creating your account. Please wait...</p>}

                    <div className="text-center pt-3">
                        Already have an account?
                        <Link className="font-weight-bold" href="/login"> Sign In
                        </Link> |  <Link className="font-weight-bold" href="/">
                            Go to home
                        </Link>
                    </div>
                </form>
                {/* <hr className="my-4" />
                <p className="text-center">LOGIN WITH</p>
                <div className="row">
                    <div className="col pr-2">
                        <button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Google</button>
                    </div>
                    <div className="col pl-2">
                        <button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Facebook</button>
                    </div>
                </div> */}
            </div>
        </AuthLayout>
    )
}
