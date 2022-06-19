import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { MdOutlineFastfood, MdCardMembership } from 'react-icons/md'
import { FiUsers, FiShoppingCart } from 'react-icons/fi'
import moment from 'moment'


export default function Dashboard({ recentActivities, pendingOrders, processingOrders, deliveredOrders }) {

    const { menus, customers, subscriptions, orders, visitors, newCustomers } = usePage().props

    console.log(route().current())
    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Dashboard</h1>}
            subtitle={<p>We are on a mission to help developers like you build</p>}
        // button={<Link href='/admin/create_menu' className="btn btn-link btn-soft-light">
        //     <MdAdd />
        //     Create Menu
        // </Link>}
        />}>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="row row-cols-1">
                        <div className="overflow-hidden d-slider1 ">
                            <ul className="p-0 m-0 mb-2 swiper-wrapper list-inline">
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={700}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            {/* <div id="circle-progress-01" className="text-center circle-progress-01 circle-progress circle-progress-primary" data-min-value={0} data-max-value={100} data-value={100} data-type="percent"> */}
                                            <MdOutlineFastfood size={50} color='#3A57E8' />
                                            {/* </div> */}
                                            <div className="progress-detail">
                                                <p className="mb-2">Total Menus</p>
                                                <h4 className="counter">{menus.length}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={800}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <FiUsers size={50} color='#00D563' />
                                            <div className="progress-detail">
                                                <p className="mb-2">Total Customers</p>
                                                <h4 className="counter">{customers.length}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={900}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <MdCardMembership size={50} color='#4BC7D2' />
                                            <div className="progress-detail">
                                                <p className="mb-2">Subscription</p>
                                                <h4 className="counter">{subscriptions.length}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={1000}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <FiShoppingCart size={50} color='#D55360' />
                                            <div className="progress-detail">
                                                <p className="mb-2">New Orders</p>
                                                <h4 className="counter">{orders.length}</h4>
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

                <div className="col-md-12 col-lg-8">

                    <div className="card">

                        <div className="card-header">
                            <h5 className="card-title">Order States</h5>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 col-6">
                                    <div className="card bg-soft-primary">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="bg-soft-primary rounded p-3">
                                                    <FiShoppingCart size={20} />
                                                </div>
                                                <div className="text-end">
                                                    <h2 className="counter" style={{ visibility: 'visible' }}>{pendingOrders.length}</h2>
                                                    Pending
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <Link href='/admin/orders?status=pending' className="btn btn-sm btn-primary">
                                                View pending orders
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="card bg-soft-info">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="bg-soft-info rounded p-3">
                                                    <FiShoppingCart size={20} />
                                                </div>
                                                <div className="text-end">
                                                    <h2 className="counter" style={{ visibility: 'visible' }}>{processingOrders.length}</h2>
                                                    In process
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <Link href='/admin/orders?status=processing' className="btn btn-sm btn-info">
                                                View processing orders
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="card bg-soft-success">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="bg-soft-success rounded p-3">
                                                    <FiShoppingCart size={20} />
                                                </div>
                                                <div className="text-end">
                                                    <h2 className="counter" style={{ visibility: 'visible' }}>{deliveredOrders.length}</h2>
                                                    Delivered
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <Link href='/admin/orders?status=delivered' className="btn btn-sm btn-success">
                                                View delivered orders
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">

                            <div className="card">
                                <div className="card-header border-b">
                                    <h5 className="card-title">Monthly States</h5>
                                </div>
                                <div className="card-body d-flex justify-content-around">
                                    <div>
                                        <h2 className="mb-2">{visitors.length}</h2>
                                        <p className="mb-0 text-secondary">Website Visits</p>
                                    </div>
                                    <hr className="hr-vertial" />
                                    <div>
                                        <h2 className="mb-2">{newCustomers.length}</h2>
                                        <p className="mb-0 text-secondary">New Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="card" data-aos="fade-up" data-aos-delay={600}>
                                <div className="flex-wrap card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h5 className="mb-2 card-title">Activity overview</h5>
                                        {/* <p className="mb-0">
                                            <svg className="me-2" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                                            </svg>
                                            16% this month
                                        </p> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    {recentActivities.length > 0
                                        ? recentActivities.map((act, index) => {
                                            return <div key={index} className="mb-2  d-flex profile-media align-items-top">
                                                <div className="mt-1 profile-dots-pills border-primary" />
                                                <div className="ms-4">
                                                    <h6 className="mb-1 ">{act.title} {act.subtitle}</h6>
                                                    <span className="mb-0">{moment(act.created_at).calendar()}</span>
                                                </div>
                                            </div>
                                        })
                                        : <div className="">
                                            <p>No activities found</p>
                                        </div>
                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
