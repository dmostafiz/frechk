import React from 'react';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import AuthLayout from '@/Layouts/AuthLayout';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />
            <h2 className="mb-4">Reset Password</h2>

            <div className="mb-4 text-sm text-gray-500 leading-normal" style={{
                fontSize: '16px'
            }}>
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 text-success" style={{
                fontSize: '16px'
            }}>
                {status}
            </div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 form-control"
                    placeholder="Enter your email address"
                    isFocused={true}
                    onChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <button className="btn btn-dark" disabled={processing}>
                        Email Password Reset Link
                    </button>

                    <Link className='ml-3' href='/'>Back to homepage</Link>

                </div>
            </form>
        </AuthLayout>
    );
}
