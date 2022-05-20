import React from 'react'
import { Link } from '@inertiajs/inertia-react';

export default function Error500() {
    return (
        <section className="section pt-5 pb-5 osahan-not-found-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center pt-5 pb-5">
                        <img width='400px' className="img-fluid" src="https://img.freepik.com/free-vector/500-internal-server-error-concept-illustration_114360-5572.jpg" alt='500' />
                        <h1 className="mt-5 mb-2">Internal Server Error</h1>
                        <p>Whoops, something went wrong on our servers.</p>
                        <a className="btn btn-warning btn-lg" href="/redirect_to">GO HOME</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
