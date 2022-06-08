import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';

export default function CustomerList({ customers }) {
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
