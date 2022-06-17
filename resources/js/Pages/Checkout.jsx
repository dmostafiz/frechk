import CartSideBar from '@/Components/PublicComponents/CartSideBar';
import CheckoutAddresses from '@/Components/PublicComponents/CheckoutAddresses';
import CheckoutPayments from '@/Components/PublicComponents/CheckoutPayments';
import LoginComponent from '@/Components/PublicComponents/LoginComponent';
import auth from '@/Hooks/auth';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import PublicLayout from './../Layouts/PublicLayout';

export default function Checkout({ addresses }) {

    const { cartItems, cartTotal } = usePage().props
    const cart = Object.values(cartItems)

    return (
        <PublicLayout>
            <section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2">
                <div className="container">
                    <div className="row ">

                        <div className="col-md-5">

                            <div className="pt-2" />

                            <CartSideBar checkout={true} />

                            <div className="pt-2" />

                        </div>

                        <div className="col-md-7">
                            {
                                cart.length ?
                                    auth() && auth().user_type == 'customer'
                                        ? <div className="offer-dedicated-body-left">

                                            <div className="pt-2" />

                                            <div className="bg-white rounded shadow-sm p-4 mb-4">

                                                <h4 className="mb-1">Choose a delivery address</h4>
                                                <h6 className="mb-3 text-black-50">
                                                    Multiple addresses in this location
                                                </h6>

                                                <CheckoutAddresses addresses={addresses} />

                                            </div>

                                            <div className="pt-2" />

                                            <CheckoutPayments />
                                        </div>
                                        : <div className="offer-dedicated-body-left">
                                            <div className="bg-white rounded shadow-sm p-4 mb-4">

                                                <LoginComponent routeTo='checkout' loginTitle="Login to continue checkout." />
                                            </div>
                                        </div>

                                    : <div className="offer-dedicated-body-left">
                                        <div className="bg-white rounded shadow-sm p-4 mb-4">
                                            <h5>Your cart is empty</h5>
                                            <p>Please select some food items to continue your checkout.</p>
                                            <Link href='/' className='btn btn-info btn-sm'>
                                                Browse popular menus
                                            </Link>
                                        </div>
                                    </div>

                            }

                        </div>

                    </div>
                </div>
            </section>

        </PublicLayout>
    )
}
