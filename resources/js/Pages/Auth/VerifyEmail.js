import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import AuthLayout from '@/Layouts/AuthLayout';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthLayout>
            <Head title="Email Verification" />

            <div className='container py-5 mt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>

                        <div className="mb-4 text-gray-600" style={{
                            fontSize: '16px'
                        }}>
                            Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                            link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                        </div>

                        {status === 'verification-link-sent' && (
                            <div className="mb-4 text-success" style={{
                                fontSize: '16px'
                            }}>
                                A new verification link has been sent to the email address you provided during registration.
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="mt-4 flex items-center justify-between">
                                <button className="btn btn-outline-dark" disabled={processing}>Resend Verification Email</button>

                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="btn btn-primary ml-2"
                                >
                                    Log Out
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>

            </div>


        </AuthLayout>
    );
}
