import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';

import { MdOutlineFastfood, MdCardMembership } from 'react-icons/md'
import { FiUsers, FiShoppingCart } from 'react-icons/fi'
import { useEffect } from 'react';
import { useState } from 'react';
import CustomerDetailsCard from '@/Components/AdminComponents/CustomerDetailsCard';
import ShippingAddressCard from '@/Components/AdminComponents/ShippingAddressCard';


export default function CustomerDetails({ user, address }) {

    const [pendingOrders, setPendingOrders] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])

    useEffect(() => {
        const pending = []
        const completed = []

        user.orders.forEach(order => {

            if (order.status == 'pending') {
                pending.push(order)
            } else if (order.status == 'completed') {
                completed.push(order)
            }
        })

        setPendingOrders(pending)
        setCompletedOrders(completed)

    })
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


                <div className="col-md-12 col-lg-12">
                    <div className="row">
                        <div className="overflow-hidden d-slider1 ">
                            <ul className="p-0 m-0 mb-2 swiper-wrapper list-inline">

                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={900}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <MdCardMembership size={50} color='#4BC7D2' />
                                            <div className="progress-detail">
                                                <p className="mb-2">Subscription</p>
                                                <h4 className="counter">{user.subscriptions.length ? 'Yes' : 'N/A'}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="swiper-slide card card-slide">
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <FiUsers size={50} color='#00D563' />
                                            <div className="progress-detail">
                                                <p className="mb-2">Affiliates</p>
                                                <h4 className="counter">{user.children.length}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={700}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            {/* <div id="circle-progress-01" className="text-center circle-progress-01 circle-progress circle-progress-primary" data-min-value={0} data-max-value={100} data-value={100} data-type="percent"> */}
                                            <MdOutlineFastfood size={50} color='#3A57E8' />
                                            {/* </div> */}
                                            <div className="progress-detail">
                                                <p className="mb-2">Completed Orders</p>
                                                <h4 className="counter">{completedOrders.length}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={1000}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <FiShoppingCart size={50} color='#D55360' />
                                            <div className="progress-detail">
                                                <p className="mb-2">Pending Oeders</p>
                                                <h4 className="counter">{pendingOrders.length}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                            <div className="swiper-button swiper-button-next" />
                            <div className="swiper-button swiper-button-prev" />
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <CustomerDetailsCard user={user} />
                    <ShippingAddressCard address={address} />
                </div>

                <div className='col-md-8'>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.orders.map((order, index) => {
                                            return <tr key={index}>
                                                <td>#{order.order_id}</td>
                                                <td>${order.sub_total}</td>
                                                <td>{moment(order.created_at).format('llll')}</td>
                                                <td>{order.status}</td>
                                                <td>
                                                    <Link href={`/admin/order/${order.order_id}`} className="btn btn-info btn-sm">
                                                       View
                                                    </Link>
                                                </td>

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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.subscriptions.map((subs, index) => {
                                            return <tr key={index}>
                                                <td>#{subs.subscription_id}</td>
                                                <td>{subs.package.name}</td>
                                                <td>{moment(subs.created_at).format('ll')}</td>
                                                <td>{subs.status}</td>
                                                <td>
                                                    <Link href={`/admin/subscription/${subs.subscription_id}`} className="btn btn-info btn-sm">
                                                       View
                                                    </Link>
                                                </td>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.children.map((usr, index) => {
                                            return <tr key={index}>
                                                <td>#{usr.customer_id}</td>
                                                <td>{usr.email}</td>
                                                <td>{moment(usr.created_at).format('ll')}</td>
                                                <td>
                                                    <Link href={`/admin/customer/${usr.customer_id}`} className="btn btn-info btn-sm">
                                                       View
                                                    </Link>
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
