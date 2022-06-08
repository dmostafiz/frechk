import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import React from 'react'
import moment from 'moment'

export default function Orders({ orders }) {
    return (
        <PublicLayout>

            <CustomerLayout>

                <div className="">
                    <h4 className="font-weight-bold mt-0 mb-4">My Orders</h4>
                    {orders.length ? orders.map((order, index) => {
                        return <div key={index} className="bg-white card mb-4 order-list shadow-sm">
                            <div className="gold-members p-4">
                                <a href="#">
                                </a>
                                <div className="media">
                                    <div className="media-body">

                                        <span className="float-right text-info">
                                            {order.status == 'pending' && <>
                                                <i className="icofont-check-circled text-warning" /> Order placed ( {moment(order.created_at).format('LLLL')} )
                                            </>}

                                            {order.status == 'processing' && <>
                                                <i className="icoficofont-check-circled text-info" /> Order processing, {moment(order.updated_at).format('LLLL')}
                                            </>}

                                            {order.status == 'delivered' && <>
                                                <i className="icoficofont-check-circled text-success" /> Order delivered, {moment(order.updated_at).format('LLLL')}
                                            </>}

                                            {order.status == 'processing' && <>
                                                <i className="icoficofont-check-circled text-danger" /> Order cancelled, {moment(order.updated_at).format('LLLL')}
                                            </>}
                                            {/* Delivered on Mon, Nov 12, 7:18 PM <i className="icofont-check-circled text-success" /> */}
                                        </span>

                                        <h6 className="mb-2">
                                            <a href="detail.html" className="text-black">ORDER #{order.order_id}</a>
                                        </h6>
                                        <p className="text-gray mb-1">
                                            <i className="icofont-location-arrow" />
                                            {order.address.zip_code}, {order.address.street_address} - {order.address.city}
                                        </p>
                                        <p className="text-gray mb-3">
                                            <i className="icofont-phone" /> {order.address.phone}

                                            <i className="icofont-email ml-2" /> {order.address.email}
                                        </p>
                                        <p className="text-dark">
                                            {order.items.map((item, index) => {
                                                return <span key={index}>{item.item_name} x {item.qty}{order.items.length > (index + 1) && ' | '} </span>
                                            })}
                                        </p>
                                        <hr />
                                        <p className="mb-0 text-black text-primary pt-2">
                                            <span className="text-black font-weight-bold">
                                                Total Paid:
                                            </span> ${order.sub_total}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                        : <div>
                             <p>No order initialized!</p>   
                        </div>
                    }


                </div>

            </CustomerLayout>


        </PublicLayout>
    )
}
