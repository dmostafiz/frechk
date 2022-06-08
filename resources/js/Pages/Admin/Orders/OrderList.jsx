import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';

export default function OrderList({ orders }) {
    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Orders</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Orders</li>
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
                                <h6 className="card-title">Pending Orders ({orders.length})</h6>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-left">
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Customer</th>
                                            <th>Order Items</th>
                                            <th>Sub Total</th>
                                            <th>Order at</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <div>#{order.order_id}</div>
                                                </td>
                                                <td>
                                                    <div>{order.user.email}</div>
                                                </td>
                                                <td>
                                                    <div>{order.items.length} Items</div>
                                                </td>
                                                <td>
                                                    <div>${order.sub_total}</div>
                                                </td>
                                                <td>
                                                    <div>{moment(order.created_at).format('ll')} - {moment(order.created_at).format('LT')}</div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-evenly">
                                                        <Link href={route('admin.orders.details', order.order_id)} className="btn btn-info btn-icon btn-sm rounded-pill ms-2">
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
