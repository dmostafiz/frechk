import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';

export default function CustomerDetails({ user, address }) {
    return (
        <AdminLayout header={<HeaderContent
            title={<h4>Customer Details</h4>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Customer Details</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/customers' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to customer list</span>
            </Link>}
        />}>
            <div className="row">
                <div className="col-12">

                    <div className='card'>
                        <div className="card-body d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Customer #{user.customer_id}</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-md-5'>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">Customer Details</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className='col-md-12'>
                                    <div className="mb-2">
                                        <img width='100px' className='img-fluid' src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
                                    </div>
                                    <div className="mb-1">
                                        Name: <a href="#" className="ms-1">{user.first_name} {user.last_name}</a>
                                    </div>
                                    <div className="mb-1">
                                        Email: <a href="#" className="ms-1">{user.email}</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title">Default Address</h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-1">
                                Street Address: <a href="#" className="ms-1">{address?.street_address}</a>
                            </div>
                            <div className="mb-1">
                                City: <a href="#" className="ms-1">{address?.city}</a>
                            </div>
                            <div className="mb-1">
                                Zip Code: <a href="#" className="ms-1">{address?.zip_code}</a>
                            </div>

                            <div className="mb-1">
                                Email: <a href="#" className="ms-1">{address?.email}</a>
                            </div>

                            <div className="mb-1">
                                Phone Number: <a href="#" className="ms-1">{address?.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-2 card-title">Orders from {user.first_name}</h6>
                        </div>
                        <div className="bg-white">
                            <div className="mt-4 table-responsive">
                                <table id="basic-table" className="table mb-0" role="grid">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Price</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.orders.map((order, index) => {
                                            return <tr key={index}>
                                                <td>#{order.order_id}</td>
                                                <td>${order.sub_total}</td>
                                                <td>{moment(order.created_at).format('llll')}</td>
                                                <td>{order.status}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-2 card-title">Subscriptions</h6>
                        </div>
                        <div className="bg-white">
                            <div className="mt-4 table-responsive">
                                <table id="basic-table" className="table mb-0" role="grid">
                                    <thead>
                                        <tr>
                                            <th>Subscription ID</th>
                                            <th>Package</th>
                                            <th>Subscribed at</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.subscriptions.map((subs, index) => {
                                            return <tr key={index}>
                                                <td>#{subs.subscription_id}</td>
                                                <td>{subs.package.name}</td>
                                                <td>{moment(subs.created_at).format('ll')}</td>
                                                <td>{subs.status}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h6 className="mb-2 card-title">Affiliates</h6>
                        </div>
                        <div className="bg-white">
                            <div className="mt-4 table-responsive">
                                <table id="basic-table" className="table mb-0" role="grid">
                                    <thead>
                                        <tr>
                                            <th>User ID</th>
                                            <th>Email</th>
                                            <th>Joined at</th>
                                            {/* <th>Status</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.children.map((usr, index) => {
                                            return <tr key={index}>
                                                <td>#{usr.customer_id}</td>
                                                <td>{usr.email}</td>
                                                <td>{moment(usr.created_at).format('ll')}</td>
                                                {/* <td>{subs.status}</td> */}
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
