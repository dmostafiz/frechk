import truncate from '@/Helpers/truncate'
import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Subcriptions({ subscriptions }) {
    return (
        <PublicLayout>
            <CustomerLayout>
                <div className="">
                    <h4 className="font-weight-bold mt-0 mb-4">My Subscriptions</h4>

                    {subscriptions.length ? subscriptions.map((subs, index) => {
                        return <div key={index} className="bg-white rounded shadow-sm p-4 mb-4 explore-outlets">
                            <h5 className="mb-2">{subs.package.name}</h5>
                            {subs.package.days.length ? <div className="pb-2">
                                <span className="badge badge-success">
                                    <i className="icofont-tag" /> {subs.package.days.length} days in week
                                </span> <br />
                                {subs.package.days.map((day, index) => {
                                    return <span key={index}> #{day.day}</span>
                                })}
                            </div> : <></>}

                            {subs.package.menus.length ? <>
                                <h6 className="mt-3">Menus are included</h6>
                                <div className="owl-carousel owl-theme owl-carousel-five offers-interested-carousel mb-3">
                                    {subs.package.menus.map((menu, index) => {
                                        return <div key={index} className="item">
                                            <div className="mall-category-item">
                                                {/* <a href="#"> */}
                                                <img className="img-fluid" src={`/${menu.image}`} />
                                                <h6>{menu.name}</h6>
                                                {/* </a> */}
                                            </div>
                                        </div>
                                    })}

                                </div>
                            </>
                                : <></>}

                            <h5 className="">{subs.package.title}</h5>
                            <span>{truncate(subs.package.description, 210)}</span>

                            {subs.status == 'running' && <>
                                <div className="pt-3 pb-2 d-flex align-items-center justify-content-nd">
                                    <h5>${subs.package.price} / Monthly</h5>
                                    <h5 className='ml-4 text-success'>( Subscribed )</h5>
                                </div>
                                <Link href={route('public.subscribe', subs.package.slug)} className="btn btn-primary">Cancel Subscription</Link>
                                <Link href={route('public.subscribe', subs.package.slug)} className="btn btn-info ml-2">Update Shipping Address</Link>
                            </> }


                            {subs.status == 'cancelled' && <>
                                <div className="pt-3 pb-2 d-flex align-items-center justify-content-nd">
                                    <h5>${subs.package.price} / Monthly</h5>
                                    <h5 className='ml-4 text-warning'>( Subscription Cancelled )</h5>
                                </div>
                                <Link href={route('public.subscribe', subs.package.slug)} className="btn btn-success">Renew Subscription</Link>
                                <Link href={route('public.subscribe', subs.package.slug)} className="btn btn-info ml-2">Update Address</Link>
                            </> }

                        </div>
                    })
                        : <p>No subscription added</p>}

                </div>
            </CustomerLayout>
        </PublicLayout>
    )
}
