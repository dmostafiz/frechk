import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import CustomerDetailsCard from '@/Components/AdminComponents/CustomerDetailsCard';
import ShippingAddressCard from '@/Components/AdminComponents/ShippingAddressCard';

export default function OrderDetails({ order }) {
    const { tax } = usePage().props

    const [status, setStatus] = useState(order.status)

    return (
        <AdminLayout header={<HeaderContent
            title={<h4>Order Details</h4>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Order Details</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/orders' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to order list</span>
            </Link>}
        />}>
            <div className="row">
                <div className="col-12">

                    <div className='card'>
                        <div className="card-body d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Order #{order.order_id}</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-md-5'>

                    <CustomerDetailsCard user={order.user} />

                    <ShippingAddressCard address={order.address} />

                </div>

                <div className='col-md-7'>
                    <div className="card">
                        <div className="flex-wrap card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h6 className="mb-2 card-title">Order Items</h6>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="mt-4 table-responsive">
                                <table id="basic-table" className="table mb-0" role="grid">
                                    <thead>
                                        <tr>
                                            <th>Menu</th>
                                            <th>qty</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.items.map((item, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded bg-soft-primary img-fluid avatar-40 me-3"
                                                            src={`/${item.menu.image}`} alt="profile" />
                                                        <h6>{item.menu.name}</h6>
                                                    </div>
                                                </td>
                                                <td>{item.qty}</td>
                                                <td>${item.item_price}</td>
                                                <td>${item.qty_price}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex-wrap card-footer d-flex justify-content-between">

                            <table className=''>
                                <tr>
                                    <td>Price Total</td>
                                    <td><a href="#" className="ms-3">${order.order_total}</a></td>
                                </tr>
                                <tr>
                                    <td>{tax}% Tax</td>
                                    <td><a href="#" className="ms-3">${order.vat}</a></td>
                                </tr>
                                <tr>
                                    <td>Delivery Fee</td>
                                    <td><a href="#" className="ms-3">${order.delivery_cost}</a></td>
                                </tr>
                                <hr />
                                <tr>
                                    <td>Sub Total</td>
                                    <td><a href="#" className="ms-3">${order.sub_total}</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="">
                                        <span>Order Status</span>
                                        <h5 className="">{order.status}</h5>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <span>Payment Method</span>
                                        <h5>{order.payment_method}</h5>
                                    </div>
                                    <hr />
                                    {/* <div className="">
                                        <span>Invoice</span> <button className="btn btn-sm btn-outline-dark ml-5">
                                            Download Invoice
                                        </button>
                                    </div> */}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="ok-bye" className='mb-2'>Order status</label>
                                    <select onChange={e => setStatus(e.target.value)} value={status} id='ok-bye' className="form-control">
                                        <option value=''>Select order status</option>
                                        {(order.status != 'delivered' && order.status != 'cancelled') && <option value='processing'>Processing</option>}
                                        {( order.status != 'cancelled' && order.status != 'pending') && <option value='delivered'>Delivered</option> }
                                        {( order.status != 'delivered') && <option value='cancelled'>Cancelled</option> }
                                    </select>
                                    <Link href={route('admin.update.order')} method="post" data={{status, id: order.id}} className="btn btn-success mt-3">Update order status</Link>
                                </div>

                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}
