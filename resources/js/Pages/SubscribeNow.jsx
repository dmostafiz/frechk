import CartSideBar from '@/Components/PublicComponents/CartSideBar';
import CheckoutAddresses from '@/Components/PublicComponents/CheckoutAddresses';
import CheckoutPayments from '@/Components/PublicComponents/CheckoutPayments';
import FoodDetailsModal from '@/Components/PublicComponents/FoodDetailsModal';
import LoginComponent from '@/Components/PublicComponents/LoginComponent';
import SubscribePayments from '@/Components/PublicComponents/SubscribePayments';
import auth from '@/Hooks/auth';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import PublicLayout from '../Layouts/PublicLayout';

export default function SubscribeNow({ addresses, pkg, subscription }) {

    const { cartItems, cartTotal } = usePage().props
    const cart = Object.values(cartItems)

    return (
        <PublicLayout>
            <section className="offer-dedicated-body mb-4 pb-2">
                <div className="container">
                    <div className="row ">

                        <div className="col-md-2">
                        </div>

                        <div className="col-md-8">


                            <section className="section pt-4 homepage-add-section">
                                <div className="bg-white rounded shadow-sm p-4 mb-4 explore-outlets">

                                    <div className="py-3 d-flex align-items-center justify-content-nd">
                                        <h3 className="">{pkg.name}</h3>
                                        <h5 className="ml-3 text-dark">${pkg.price} / Monthly</h5>
                                    </div>

                                    {(subscription && subscription.status == 'running') && <div className="alert alert-success">
                                        Already subscribed
                                    </div>}

                                    {(subscription && subscription.status == 'cancelled') && <div className="alert alert-warning">
                                        Subscription are cancelled
                                    </div>}

                                    <h5 className="">{pkg.title}</h5>

                                    <span>{pkg.description}</span>

                                    {pkg.days.length ? <div className="pb-2">
                                        <h5 className="mt-4 mb-4">
                                            <i class="icofont-restaurant-menu"></i> {pkg.days.length} days in week
                                        </h5>
                                        <div className="row">
                                            {pkg.days.map((day, index) => {
                                                return <div key={index} className="col-6 col-md-4 px-4">
                                                    <h5 className=''>{day.day}</h5>
                                                    <p>Menus on {day.day}</p>
                                                    <div className="owl-carousel owl-theme dayMenus offers-interested-carousel mb-3">
                                                        {day.menus.map((menu, index) => {
                                                            return <div key={index} className="item">
                                                                <div className="mall-category-item">
                                                                    {/* <a href="#"> */}
                                                                    <img className="img-fluid" src={`/${menu.image}`} />
                                                                    <h6>{menu.name}</h6>
                                                                    <FoodDetailsModal menu={menu} />
                                                                </div>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div> : <></>}

                                </div>
                            </section>



                            {!subscription ? auth() && auth().user_type == 'customer'
                                ? <div className="offer-dedicated-body-left">

                                    <div className="pt-2" />

                                    <CheckoutAddresses addresses={addresses} />

                                    <div className="pt-2" />

                                    <SubscribePayments pkg={pkg} />
                                </div>
                                : <div className="offer-dedicated-body-left">
                                    <div className="bg-white rounded shadow-sm p-4 mb-4">

                                        <LoginComponent routeTo={`subscribe/${pkg.slug}`} loginTitle="Login to continue subscription." />
                                   
                                    </div>
                                </div>
                                : <></>}

                        </div>

                    </div>
                </div>
            </section>

        </PublicLayout>
    )
}
