import React from 'react'
import truncate from '@/Helpers/truncate';
import { Head, Link } from '@inertiajs/inertia-react'

export default function Packages({packages}) {
    return (
        <section className="section pt-4 homepage-add-section">
            <div className="container">
                {/* <FourImageBanner foodCards={foodCards}/> */}
                {packages.map((pkg, index) => {
                    return <div className="bg-white rounded shadow-sm p-4 mb-4 explore-outlets">
                        <h5 className="mb-2">{pkg.name}</h5>
                        {pkg.days.length ? <div className="pb-2">
                            <span className="badge badge-success">
                                <i className="icofont-tag" /> {pkg.days.length} days in week
                            </span> <br />
                            {pkg.days.map((day, index) => {
                                return <span key={index}> #{day.day}</span>
                            })}
                        </div> : <></>}

                        {pkg.menus.length ? <>
                            <h6 className="mt-3">Menus are included</h6>
                            <div className="owl-carousel owl-theme owl-carousel-five offers-interested-carousel mb-3">
                                {pkg.menus.map((menu, index) => {
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

                        <h5 className="">{pkg.title}</h5>
                        <span>{truncate(pkg.description, 210)}</span>

                        <div className="py-3 d-flex align-items-center justify-content-nd">
                            <h5>${pkg.price} / Monthly</h5>
                            <Link href={route('public.subscribe', pkg.slug)} className="btn btn-primary ml-2">Subscribe Now</Link>
                        </div>
                    </div>
                })}


            </div>
        </section>

    )
}
