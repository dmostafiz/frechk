import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import queryStringObject from '@/Helpers/queryStringObject'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import { Inertia } from '@inertiajs/inertia';

export default function OrderList({ orders }) {
    const page = usePage()

    const [queries, setQueries] = useState(queryStringObject(page.url))

    const handleChangeStatus = (e) => {
        setQueries({ ...queries, status: e.target.value })
        Inertia.get(route('admin.orders.all'), { ...queries, status: e.target.value }, { preserveScroll: true, preserveState: true })
    }

    const handleChangeQuery = (e) => {
        setQueries({ ...queries, q: e.target.value })
        Inertia.get(route('admin.orders.all'), { ...queries, q: e.target.value }, { preserveScroll: true, preserveState: true })
    }


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
                                <h6 className="card-title">Orders are {queries?.status || 'pending'} ({orders.length})</h6>

                            </div>
                        </div>
                        <div className="bg-white py-2 px-4">
                            <div className='row'>
                                <div className="col-md-3 form-group">
                                    <label htmlFor="order-filter">Filter Order</label>
                                    <select onChange={e => handleChangeStatus(e) } value={queries?.status || 'pending'} className="form-control" id="order-filter">
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="cencelled">Cancelled</option>
                                    </select>
                                </div>

                                <div className="col-md-4 form-group">
                                    <label htmlFor="order-filter">Search by Order ID</label>
                                    <input onChange={e=>handleChangeQuery(e)} value={queries?.q} placeholder="Enter order id here" className="form-control" id="order-filter" />
                                </div>
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
