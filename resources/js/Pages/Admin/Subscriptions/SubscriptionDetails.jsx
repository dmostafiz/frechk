import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import CustomerDetailsCard from '@/Components/AdminComponents/CustomerDetailsCard';
import ShippingAddressCard from '@/Components/AdminComponents/ShippingAddressCard';

export default function SubscriptionDetails({ subscription, deliveries }) {
    return (
        <AdminLayout header={<HeaderContent
            title={<h4>Subscription Details</h4>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Subscription Details</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/subscriptions' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to subscription list</span>
            </Link>}
        />}>
            <div className="row">
                <div className="col-12">

                    <div className='card'>
                        <div className="card-body d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Subscription #{subscription.subscription_id}</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-md-5'>

                    <CustomerDetailsCard user={subscription.user} />

                    <ShippingAddressCard address={subscription.address} />

                </div>

                <div className='col-md-7'>

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <span>Status</span>
                                    <h3>Active</h3>
                                </div>
                                <div className="col-md-4">
                                    <span>Subscription since </span>
                                    {/* <button className="btn btn-info mt-3">Update Subscription</button> */}
                                    <h3>{moment(subscription).format('ll')}</h3>

                                    {/* <button className="btn btn-success mt-3">U Subscription</button> */}
                                </div>

                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="flex-wrap card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h6 className="mb-2 card-title">Delivery History</h6>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="mt-4 table-responsive">
                                <table id="basic-table" className="table mb-0" role="grid">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Delivery Date</th>
                                            <th>Day</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deliveries.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{moment(item.created_at).format('ll')}</td>
                                                <td>{moment(item.created_at).format('dddd')}</td>
                                                <td>Delivered</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </AdminLayout>
    )
}
