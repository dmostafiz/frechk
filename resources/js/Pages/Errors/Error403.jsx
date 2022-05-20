import PublicLayout from '@/Layouts/PublicLayout'
import React from 'react'
import { Link } from '@inertiajs/inertia-react';

export default function Error403() {
    return (
        <section className="section pt-5 pb-5 osahan-not-found-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center pt-5 pb-5">
                        <img className="img-fluid" src="/osahan/img/404.png" alt={404} />
                        <h1 className="mt-2 mb-2">403: Forbidden</h1>
                        <p>Sorry, you are forbidden from accessing this page.</p>
                        <a className="btn btn-primary btn-lg" href="/redirect_to">GO HOME</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
