import React, { useEffect } from 'react'
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';


export default function LoginComponent({loginTitle = 'Welcome back!'}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
        routeTo: 'checkout'
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            {/* <ValidationErrors errors={errors} /> */}

            <h3 className="login-heading mb-4">{loginTitle}</h3>
            <form autoComplete="off" onSubmit={submit}>
                <div className="form-label-group">
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        autoComplete="off"
                        value={data.email}
                        name='email'
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
                <div className="custom-control custom-checkbox mb-3">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        name='remember'
                        value={data.remember}
                        onChange={onHandleChange}
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                </div>
                <button
                    className={`btn btn-lg ${processing ? 'btn-dark' : 'btn-outline-primary'
                        }   btn-block btn-login text-uppercase font-weight-bold mb-2`}
                    disabled={processing}
                >
                    Sign in
                </button>

                <div className="text-center pt-3">
                    Don’t have an account?
                    <Link className="font-weight-bold" href="/register"> Sign Up
                    </Link> |  <a className="font-weight-bold" href="/register">
                        Forgot Password
                    </a>
                </div>
            </form>
        </>
    )
}
