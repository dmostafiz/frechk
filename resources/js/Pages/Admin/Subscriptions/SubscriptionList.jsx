import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import queryStringObject from '@/Helpers/queryStringObject';
import { Inertia } from '@inertiajs/inertia';

export default function SubscriptionList({ subscriptions }) {
    const page = usePage()

    const [queries, setQueries] = useState(queryStringObject(page.url))

    const handleChangeStatus = (e) => {
        setQueries({ ...queries, status: e.target.value })
        Inertia.get(route('admin.subscription.all'), { ...queries, status: e.target.value }, { preserveScroll: true, preserveState: true })
    }

    const handleChangeQuery = (e) => {
        setQueries({ ...queries, q: e.target.value })
        Inertia.get(route('admin.subscription.all'), { ...queries, q: e.target.value }, { preserveScroll: true, preserveState: true })
    }

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
                                <h6 className="card-title">Subscriptions are {queries?.status || 'running'} ({subscriptions.length})</h6>
                            </div>
                        </div>

                        <div className="bg-white py-2 px-4">
                            <div className='row'>
                                <div className="col-md-3 form-group">
                                    <label htmlFor="order-filter">Filter Subscriptions</label>
                                    <select onChange={e => handleChangeStatus(e)} value={queries?.status || 'running'} className="form-control" id="order-filter">
                                        <option value="running">Running</option>
                                        <option value="cencelled">Cancelled</option>
                                    </select>
                                </div>

                                <div className="col-md-4 form-group">
                                    <label htmlFor="order-filter">Search by Subscription ID</label>
                                    <input onChange={e => handleChangeQuery(e)} value={queries?.q} placeholder="Enter subscription id here" className="form-control" id="order-filter" />
                                </div>
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
