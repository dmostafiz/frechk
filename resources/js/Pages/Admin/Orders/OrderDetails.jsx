import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';

export default function OrderDetails({ order }) {
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
                    <div className="card">
                        <div className="card-body">
                            <div className="header-title">
                                <h6 className="mb-2 card-title">Customer Details</h6>
                            </div>
                            <div className="row">
                                <div className='col-md-12'>
                                    <div className="mb-2">
                                        <img width='100px' className='img-fluid' src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
                                    </div>
                                    <div className="mb-1">
                                        Name: <a href="#" className="ms-1">{order.user.first_name} {order.user.last_name}</a>
                                    </div>
                                    <div className="mb-1">
                                        Email: <a href="#" className="ms-1">{order.user.email}</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body">
                            <div className="header-title">
                                <h6 className="mb-2 card-title">Shipping Address</h6>
                            </div>
                            <div className="mb-1">
                                Street Address: <a href="#" className="ms-1">{order.address.street_address}</a>
                            </div>
                            <div className="mb-1">
                                City: <a href="#" className="ms-1">{order.address.city}</a>
                            </div>
                            <div className="mb-1">
                                Zip Code: <a href="#" className="ms-1">{order.address.zip_code}</a>
                            </div>

                            <div className="mb-1">
                                Email: <a href="#" className="ms-1">{order.address.email}</a>
                            </div>

                            <div className="mb-1">
                                Phone Number: <a href="#" className="ms-1">{order.address.phone}</a>
                            </div>
                        </div>
                    </div>
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
                                    <td>Quantity Total</td>
                                    <td><a href="#" className="ms-3">${order.order_total}</a></td>
                                </tr>
                                <tr>
                                    <td>Delivery Charge</td>
                                    <td><a href="#" className="ms-3">${order.delivery_cost}</a></td>
                                </tr>
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
                                    <span>Status</span>
                                    <h3>{order.status}</h3>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="ok-bye" className='mb-2'>Order status</label>
                                    <select id='ok-bye' className="form-control">
                                        <option value=''>Select order status</option>
                                        <option value='received'>Received</option>
                                        <option value='processing'>Processing</option>
                                        <option value='delivered'>Delivered</option>
                                        <option value='cancelled'>Cancelled</option>
                                    </select>
                                    <button className="btn btn-success mt-3">Update order status</button>
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
