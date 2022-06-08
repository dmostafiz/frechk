import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { MdOutlineFastfood, MdCardMembership } from 'react-icons/md'
import { FiUsers, FiShoppingCart } from 'react-icons/fi'


export default function Dashboard() {

    const { menus, customers, subscriptions, orders } = usePage().props

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
                                            <FiShoppingCart size={50} color='#D55360'/>
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

                    <div className="row">

                        <div className="col-md-12">
                            <div className="card" data-aos="fade-up" data-aos-delay={800}>
                                <div className="flex-wrap card-header d-flex justify-content-between align-items-center">
                                    <div className="header-title">
                                        <h4 className="card-title">$855.8K</h4>
                                        <p className="mb-0">Gross Sales</p>
                                    </div>
                                    <div className="d-flex align-items-center align-self-center">
                                        <div className="d-flex align-items-center text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} viewBox="0 0 24 24" fill="currentColor">
                                                <g>
                                                    <circle cx={12} cy={12} r={8} fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div className="ms-2">
                                                <span className="text-secondary">Sales</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center ms-3 text-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={12} viewBox="0 0 24 24" fill="currentColor">
                                                <g>
                                                    <circle cx={12} cy={12} r={8} fill="currentColor" />
                                                </g>
                                            </svg>
                                            <div className="ms-2">
                                                <span className="text-secondary">Cost</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22">
                                            <li><a className="dropdown-item" href="#">This Week</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="d-main" className="d-main" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-xl-6">
                            <div className="card" data-aos="fade-up" data-aos-delay={900}>
                                <div className="flex-wrap card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Earnings</h4>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="text-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">This Week</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="flex-wrap d-flex align-items-center justify-content-between">
                                        <div id="myChart" className="col-md-8 col-lg-8 myChart" />
                                        <div className="d-grid gap col-md-4 col-lg-4">
                                            <div className="d-flex align-items-start">
                                                <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width={14} viewBox="0 0 24 24" fill="#3a57e8">
                                                    <g>
                                                        <circle cx={12} cy={12} r={8} fill="#3a57e8" />
                                                    </g>
                                                </svg>
                                                <div className="ms-3">
                                                    <span className="text-secondary">Fashion</span>
                                                    <h6>251K</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-start">
                                                <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width={14} viewBox="0 0 24 24" fill="#4bc7d2">
                                                    <g>
                                                        <circle cx={12} cy={12} r={8} fill="#4bc7d2" />
                                                    </g>
                                                </svg>
                                                <div className="ms-3">
                                                    <span className="text-secondary">Accessories</span>
                                                    <h6>176K</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-6">
                            <div className="card" data-aos="fade-up" data-aos-delay={1000}>
                                <div className="flex-wrap card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Conversions</h4>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="text-secondary dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                            <li><a className="dropdown-item" href="#">This Week</a></li>
                                            <li><a className="dropdown-item" href="#">This Month</a></li>
                                            <li><a className="dropdown-item" href="#">This Year</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="d-activity" className="d-activity" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">

                            <div className="card" data-aos="fade-up" data-aos-delay={500}>
                                <div className="text-center card-body d-flex justify-content-around">
                                    <div>
                                        <h2 className="mb-2">750<small>K</small></h2>
                                        <p className="mb-0 text-secondary">Website Visitors</p>
                                    </div>
                                    <hr className="hr-vertial" />
                                    <div>
                                        <h2 className="mb-2">7,500</h2>
                                        <p className="mb-0 text-secondary">New Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="card" data-aos="fade-up" data-aos-delay={600}>
                                <div className="flex-wrap card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="mb-2 card-title">Activity overview</h4>
                                        <p className="mb-0">
                                            <svg className="me-2" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                                            </svg>
                                            16% this month
                                        </p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="mb-2  d-flex profile-media align-items-top">
                                        <div className="mt-1 profile-dots-pills border-primary" />
                                        <div className="ms-4">
                                            <h6 className="mb-1 ">$2400, Purchase</h6>
                                            <span className="mb-0">11 JUL 8:10 PM</span>
                                        </div>
                                    </div>
                                    <div className="mb-2  d-flex profile-media align-items-top">
                                        <div className="mt-1 profile-dots-pills border-primary" />
                                        <div className="ms-4">
                                            <h6 className="mb-1 ">New order #8744152</h6>
                                            <span className="mb-0">11 JUL 11 PM</span>
                                        </div>
                                    </div>
                                    <div className="mb-2  d-flex profile-media align-items-top">
                                        <div className="mt-1 profile-dots-pills border-primary" />
                                        <div className="ms-4">
                                            <h6 className="mb-1 ">Affiliate Payout</h6>
                                            <span className="mb-0">11 JUL 7:64 PM</span>
                                        </div>
                                    </div>
                                    <div className="mb-2  d-flex profile-media align-items-top">
                                        <div className="mt-1 profile-dots-pills border-primary" />
                                        <div className="ms-4">
                                            <h6 className="mb-1 ">New user added</h6>
                                            <span className="mb-0">11 JUL 1:21 AM</span>
                                        </div>
                                    </div>
                                    <div className="mb-1  d-flex profile-media align-items-top">
                                        <div className="mt-1 profile-dots-pills border-primary" />
                                        <div className="ms-4">
                                            <h6 className="mb-1 ">Product added</h6>
                                            <span className="mb-0">11 JUL 4:50 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
