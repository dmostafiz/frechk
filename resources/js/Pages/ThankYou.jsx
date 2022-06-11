import PublicLayout from '@/Layouts/PublicLayout'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function ThankYou({ type }) {
    return (
        <PublicLayout>
            <section className="section pt-5 pb-5 osahan-not-found-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-5 pb-5">
                            <img className="img-fluid mb-5" src="/osahan/img/thanks.png" alt={404} />
                            <h1 className="mt-2 mb-2 text-success">Congratulations!</h1>
                            {type == 'ord'
                                ? <p className="mb-5">You have successfully placed your order.</p>
                                : <p className="mb-5">You are now a member of frechk.</p>}

                            {type == 'ord'
                                ? <Link className="btn btn-primary btn-lg" href={route('customer.orders')}>View Order :)</Link>
                                : <Link className="btn btn-primary btn-lg" href={route('customer.subcriptions')}>View Subscription :)</Link>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>

    )
}
