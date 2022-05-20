import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import React from 'react'

export default function Orders() {
    return (
        <PublicLayout>

            <CustomerLayout>

                <div className="">
                    <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
                    <div className="bg-white card mb-4 order-list shadow-sm">
                        <div className="gold-members p-4">
                            <a href="#">
                            </a><div className="media"><a href="#">
                                <img className="mr-4" src="/osahan/img/3.jpg" alt="Generic placeholder image" />
                            </a><div className="media-body"><a href="#">
                                <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18
                                    PM <i className="icofont-check-circled text-success" /></span>
                            </a><h6 className="mb-2"><a href="#">
                            </a><a href="detail.html" className="text-black">Gus's World Famous
                                Fried Chicken
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-1"><i className="icofont-location-arrow" /> 730
                                        S Mendenhall Rd, Memphis, TN 38117, USA
                                    </p>
                                    <p className="text-gray mb-3"><i className="icofont-list" /> ORDER
                                        #25102589748 <i className="icofont-clock-time ml-2" /> Mon, Nov
                                        12, 6:26 PM</p>
                                    <p className="text-dark">Veg Masala Roll x 1, Veg Burger x 1, Veg Penne
                                        Pasta in Red Sauce x 1
                                    </p>
                                    <hr />
                                    <div className="float-right">
                                        <a className="btn btn-sm btn-outline-primary" href="#"><i className="icofont-headphone-alt" /> HELP</a>
                                        <a className="btn btn-sm btn-primary" href="detail.html"><i className="icofont-refresh" /> REORDER</a>
                                    </div>
                                    <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> $300
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white card mb-4 order-list shadow-sm">
                        <div className="gold-members p-4">
                            <a href="#">
                            </a><div className="media"><a href="#">
                                <img className="mr-4" src="/osahan/img/4.jpg" alt="Generic placeholder image" />
                            </a><div className="media-body"><a href="#">
                                <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18
                                    PM <i className="icofont-check-circled text-success" /></span>
                            </a><h6 className="mb-2"><a href="#">
                            </a><a href="detail.html" className="text-black">Jimmy's Famous American
                                Tavern
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-1"><i className="icofont-location-arrow" />
                                        1733 Ocean Ave, Santa Monica, CA 90401, USA
                                    </p>
                                    <p className="text-gray mb-3"><i className="icofont-list" /> ORDER
                                        #25102589748 <i className="icofont-clock-time ml-2" /> Mon, Nov
                                        12, 6:26 PM</p>
                                    <p className="text-dark">Veg Masala Roll x 5, Veg Burger x 1, Veg Penne
                                        Pasta in Red Sauce x 1
                                    </p>
                                    <hr />
                                    <div className="float-right">
                                        <a className="btn btn-sm btn-outline-primary" href="#"><i className="icofont-headphone-alt" /> HELP</a>
                                        <a className="btn btn-sm btn-primary" href="detail.html"><i className="icofont-refresh" /> REORDER</a>
                                    </div>
                                    <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> $500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white card  order-list shadow-sm">
                        <div className="gold-members p-4">
                            <a href="#">
                            </a><div className="media"><a href="#">
                                <img className="mr-4" src="/osahan/img/5.jpg" alt="Generic placeholder image" />
                            </a><div className="media-body"><a href="#">
                                <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18
                                    PM <i className="icofont-check-circled text-success" /></span>
                            </a><h6 className="mb-2"><a href="#">
                            </a><a href="detail.html" className="text-black">The Famous Restaurant
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-1"><i className="icofont-location-arrow" /> 953
                                        S Main St, Centerville, OH 45459, USA
                                    </p>
                                    <p className="text-gray mb-3"><i className="icofont-list" /> ORDER
                                        #25102589748 <i className="icofont-clock-time ml-2" /> Mon, Nov
                                        12, 6:26 PM</p>
                                    <p className="text-dark">Veg Masala Roll x 5, Veg Penne Pasta in Red
                                        Sauce x 1
                                    </p>
                                    <hr />
                                    <div className="float-right">
                                        <a className="btn btn-sm btn-outline-primary" href="#"><i className="icofont-headphone-alt" /> HELP</a>
                                        <a className="btn btn-sm btn-primary" href="detail.html"><i className="icofont-refresh" /> REORDER</a>
                                    </div>
                                    <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> $420
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  
            </CustomerLayout>


        </PublicLayout>
    )
}
