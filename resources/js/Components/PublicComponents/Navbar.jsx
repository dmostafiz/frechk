import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Logo from '../Logo'
import auth from './../../Hooks/auth';

export default function Navbar() {

    const { cartItems, cartTotal } = usePage().props
    const cart = Object.values(cartItems)

    console.log('cartTotal: ', cartTotal)

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light osahan-nav shadow-sm" style={{ zIndex: 999 }}>
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Logo />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/offers">
                                <i className="icofont-sale-discount" />
                                Offers <span className="badge badge-danger">New</span>
                            </Link>
                        </li>

                        <li className="nav-item dropdown dropdown-cart">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-shopping-basket" /> Cart
                                <span className="badge badge-success ml-1">{cart.length}</span>
                            </a>
                            <div className="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
                                <div className="dropdown-cart-top-header p-4">
                                    <img className="img-fluid mr-3" alt="osahan" src="/osahan/img/cart.jpg" />
                                    <h6 className="mb-0">Gus's World Famous Chicken</h6>
                                    <p className="text-secondary mb-0">310 S Front St, Memphis, USA</p>
                                    <small><a className="text-primary font-weight-bold" href="#">View Full Menu</a></small>
                                </div>
                                <div className="dropdown-cart-top-body border-top p-4">

                                    {cart.map((item, index) => <p key={index} className="mb-2">
                                        <i className="icofont-ui-press text-danger food-item" />
                                        {item.name} - ${item.price} x {item.qty}
                                        <span className="float-right text-secondary">${item.subtotal}</span>
                                    </p>)}

                                </div>
                                <div className="dropdown-cart-top-footer border-top p-4">
                                    <p className="mb-0 font-weight-bold text-secondary">Sub Total <span className="float-right text-dark">${cartTotal}</span></p>
                                    <small className="text-info">Extra charges may apply</small>
                                </div>
                                <div className="dropdown-cart-top-footer border-top p-2">
                                    <Link className="btn btn-success btn-block btn-lg" href="/checkout"> Checkout</Link>
                                </div>
                            </div>
                        </li>

                        {auth() ? <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img alt="Generic placeholder image" src="/osahan/img/user/4.png" className="nav-osahan-pic rounded-pill" />
                                <span>My Account</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow-sm border-0">
                                {auth().user_type == 'admin'
                                    ? <>
                                        <a className="dropdown-item" href="/admin/dashboard">
                                            <i className="icofont-food-cart" /> Dashboard
                                        </a>
                                        <Link method='post' className="dropdown-item" href="/logout">
                                            <i className="icofont-power" /> Sign Out
                                        </Link>
                                    </>
                                    : <>
                                        <Link className="dropdown-item" href={route('customer.affiliate')}><i className="icofont-credit-card" /> Affiliate</Link>
                                        <Link className="dropdown-item" href={route('customer.subcriptions')}><i className="icofont-sale-discount" /> Subcriptions</Link>
                                        <Link className="dropdown-item" href={route('customer.orders')}><i className="icofont-food-cart" /> Orders </Link>
                                        <Link className="dropdown-item" href={route('customer.favourites')}><i className="icofont-heart" /> Favourites</Link>
                                        <Link className="dropdown-item" href={route('customer.addresses')}><i className="icofont-location-pin" /> Addresses</Link>

                                        <Link method='post' className="dropdown-item" href="/logout">
                                            <i className="icofont-power" /> Sign Out
                                        </Link>
                                    </>}

                            </div>
                        </li>
                            : <li className="nav-item">
                                <Link className="nav-link" href="/login">
                                    <i className="icofont-sign-in" /> Login
                                </Link>
                            </li>}

                    </ul>
                </div>
            </div>
        </nav>
    )
}
