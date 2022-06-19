import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import queryStringObject from '@/Helpers/queryStringObject';
import { Inertia } from '@inertiajs/inertia';

export default function CustomerList({ customers }) {
    const page = usePage()

    const [queries, setQueries] = useState(queryStringObject(page.url))

    const handleChangeQuery = (e) => {
        setQueries({ ...queries, q: e.target.value })
        Inertia.get(route('admin.customers.all'), { ...queries, q: e.target.value }, { preserveScroll: true, preserveState: true })
    }

    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Customers</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Customers</li>
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
                                <h6 className="card-title">Customers ({customers.length})</h6>
                            </div>
                        </div>

                        <div className="bg-white py-2 px-4">
                            <div className='row'>
                                <div className="col-md-4 form-group">
                                    <label htmlFor="order-filter">Search Customer</label>
                                    <input onChange={e => handleChangeQuery(e)} value={queries?.q} placeholder="Enter customer ID or Email here" className="form-control" id="order-filter" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-left">
                                        <tr>
                                            <th>Customer ID</th>
                                            <th>Email</th>
                                            <th>Subscription</th>
                                            <th>Orders</th>
                                            <th>Join Date</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map((user, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <div>#{user.customer_id}</div>
                                                </td>
                                                <td>
                                                    <div>{user.email}</div>
                                                </td>
                                                <td>
                                                    <div>{user.subscriptions.length ? 'Yes' : 'N/A'}</div>
                                                </td>
                                                <td>
                                                    <div>{user.orders.length}</div>
                                                </td>
                                                <td>
                                                    <div>{moment(user.created_at).format('ll')}</div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-evenly">
                                                        <Link href={route('admin.customers.details', user.customer_id)} className="btn btn-info btn-icon btn-sm rounded-pill ms-2">
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
