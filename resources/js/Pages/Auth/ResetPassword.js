import React, { useEffect } from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import AuthLayout from '@/Layouts/AuthLayout';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
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

        post(route('password.update'));
    };

    return (
        <AuthLayout>
            <Head title="Reset Password" />

            <h2 className="mb-4">Reset Password</h2>

            <ValidationErrors errors={errors} />

            <form>
                <div className='form-group'>
                    <label htmlFor="email" value="Email" />
                    <input
                        id='email'
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        onChange={onHandleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" value="Password" />
                    <input
                        id='password'
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={onHandleChange}
                        placeholder='Enter new password'
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation" value="Confirm Password" />
                    <input
                        id='password_confirmation'
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="form-control"
                        autoComplete="new-password"
                        onChange={onHandleChange}
                        placeholder='Re-Enter the password'
                    />
                </div>


                <buttom onClick={submit} type="button" className="btn btn-dark" processing={processing}>
                    Reset Password
                </buttom>

                <Link className='ml-3' href='/'>Back to homepage</Link>
            </form>


        </AuthLayout>
    );
}
