import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';

export default function SubscriptionList({ subscriptions }) {
    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Subscriptions</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Subscriptions</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/dashboard' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to dashboard</span>
            </Link>}
        />}>
            <div className="row">
                <div className="col-12">
                    <div>
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h6 className="card-title">Subscriptions ({subscriptions.length})</h6>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-left">
                                        <tr>
                                            <th>Subscription ID</th>
                                            <th>Customer</th>
                                            <th>Order Items</th>
                                            <th>Monthly</th>
                                            <th>Status</th>
                                            <th>Subscribed at</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscriptions.map((subs, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <div>#{subs.subscription_id}</div>
                                                </td>
                                                <td>
                                                    <div>{subs.user.email}</div>
                                                </td>
                                                <td>
                                                    <div>{subs.package.name} Items</div>
                                                </td>
                                                <td>
                                                    <div>${subs.package.price}</div>
                                                </td>
                                                <td>
                                                    <div>{subs.status}</div>
                                                </td>
                                                <td>
                                                    <div>{moment(subs.created_at).format('ll')} - {moment(subs.created_at).format('LT')}</div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-evenly">
                                                        <Link href={route('admin.subscription.details', subs.subscription_id)} className="btn btn-info btn-icon btn-sm rounded-pill ms-2">
                                                            Details
                                                        </Link>
                                                    </div>
                                                </td>
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
