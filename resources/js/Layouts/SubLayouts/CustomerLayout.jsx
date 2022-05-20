import activeLink from '@/Helpers/activeLink'
import auth from '@/Hooks/auth'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function CustomerLayout({ children }) {
    return (
        <section className="section pt-4 pb-4 osahan-account-page">
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <div className="osahan-account-page-left shadow-sm bg-white h-100">
                            <div className="border-bottom p-4">
                                <div className="osahan-user text-center">
                                    <div className="osahan-user-media">
                                        <img className="mb-3 rounded-pill shadow-sm mt-1" src="/osahan/img/user/4.png" alt="gurdeep singh osahan" />
                                        <div className="osahan-user-media-body">
                                            <h6 className="mb-2">{auth().first_name} {auth().last_name}</h6>
                                            <p className="mb-1">{auth().email}</p>

                                            <p className="mb-0 text-black font-weight-bold">
                                                <a className="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal" href="#">
                                                    <i className="icofont-ui-edit" /> EDIT
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeLink('customer.orders', 'active')}`} href={route('customer.orders')}>
                                        <i className="icofont-food-cart" />
                                        Orders
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeLink('customer.offers', 'active')}`} href={route('customer.offers')}>
                                        <i className="icofont-sale-discount" />
                                        Offers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeLink('customer.favourites', 'active')}`} href={route('customer.favourites')}>
                                        <i className="icofont-heart" />
                                        Favourites
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeLink('customer.payments', 'active')}`} href={route('customer.payments')}>
                                        <i className="icofont-credit-card" />
                                        Payments
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeLink('customer.addresses', 'active')}`} href={route('customer.addresses')}>
                                        <i className="icofont-location-pin" />
                                        Addresses
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-9">

                        <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
