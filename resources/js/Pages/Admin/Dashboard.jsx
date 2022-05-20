import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import {MdAdd} from 'react-icons/md'

export default function Dashboard() {

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
                                            <div id="circle-progress-01" className="text-center circle-progress-01 circle-progress circle-progress-primary" data-min-value={0} data-max-value={100} data-value={90} data-type="percent">
                                                <svg className="card-slie-arrow " width={24} height="24px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Total Sales</p>
                                                <h4 className="counter">$560K</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={800}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <div id="circle-progress-02" className="text-center circle-progress-01 circle-progress circle-progress-info" data-min-value={0} data-max-value={100} data-value={80} data-type="percent">
                                                <svg className="card-slie-arrow " width={24} height={24} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Total Profit</p>
                                                <h4 className="counter">$185K</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={900}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <div id="circle-progress-03" className="text-center circle-progress-01 circle-progress circle-progress-primary" data-min-value={0} data-max-value={100} data-value={70} data-type="percent">
                                                <svg className="card-slie-arrow " width={24} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Total Cost</p>
                                                <h4 className="counter">$375K</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={1000}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <div id="circle-progress-04" className="text-center circle-progress-01 circle-progress circle-progress-info" data-min-value={0} data-max-value={100} data-value={60} data-type="percent">
                                                <svg className="card-slie-arrow " width="24px" height="24px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Revenue</p>
                                                <h4 className="counter">$742K</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={1100}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <div id="circle-progress-05" className="text-center circle-progress-01 circle-progress circle-progress-primary" data-min-value={0} data-max-value={100} data-value={50} data-type="percent">
                                                <svg className="card-slie-arrow " width="24px" height="24px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Net Income</p>
                                                <h4 className="counter">$150K</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={1200}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <div id="circle-progress-06" className="text-center circle-progress-01 circle-progress circle-progress-info" data-min-value={0} data-max-value={100} data-value={40} data-type="percent">
                                                <svg className="card-slie-arrow " width={24} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Today</p>
                                                <h4 className="counter">$4600</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay={1300}>
                                    <div className="card-body">
                                        <div className="progress-widget">
                                            <div id="circle-progress-07" className="text-center circle-progress-01 circle-progress circle-progress-primary" data-min-value={0} data-max-value={100} data-value={30} data-type="percent">
                                                <svg className="card-slie-arrow " width={24} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                                                </svg>
                                            </div>
                                            <div className="progress-detail">
                                                <p className="mb-2">Members</p>
                                                <h4 className="counter">11.2M</h4>
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
                        <div className="col-md-12 col-lg-12">
                            <div className="overflow-hidden card" data-aos="fade-up" data-aos-delay={600}>
                                <div className="flex-wrap card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="mb-2 card-title">Enterprise Clients</h4>
                                        <p className="mb-0">
                                            <svg className="me-2 text-primary" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                                            </svg>
                                            15 new acquired this month
                                        </p>
                                    </div>
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                                            <a className="dropdown-item " href="#">Action</a>
                                            <a className="dropdown-item " href="#">Another action</a>
                                            <a className="dropdown-item " href="#">Something else
                                                here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-0 card-body">
                                    <div className="mt-4 table-responsive">
                                        <table id="basic-table" className="table mb-0 table-striped" role="grid">
                                            <thead>
                                                <tr>
                                                    <th>COMPANIES</th>
                                                    <th>CONTACTS</th>
                                                    <th>ORDER</th>
                                                    <th>COMPLETION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src="/admin/images/shapes/01.png" alt="profile" />
                                                            <h6>Addidis Sportwear</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="iq-media-group iq-media-group-1">
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">MM</div>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>$14,000</td>
                                                    <td>
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <h6>60%</h6>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100" style={{ height: 4 }}>
                                                            <div className="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src="/admin/images/shapes/05.png" alt="profile" />
                                                            <h6>Netflixer Platforms</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="iq-media-group iq-media-group-1">
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>$30,000</td>
                                                    <td>
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <h6>25%</h6>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100" style={{ height: 4 }}>
                                                            <div className="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src="/admin/images/shapes/02.png" alt="profile" />
                                                            <h6>Shopifi Stores</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="iq-media-group iq-media-group-1">
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">TP</div>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>$8,500</td>
                                                    <td>
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <h6>100%</h6>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-success w-100" style={{ height: 4 }}>
                                                            <div className="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src="/admin/images/shapes/03.png" alt="profile" />
                                                            <h6>Bootstrap Technologies</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="iq-media-group iq-media-group-1">
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">MM</div>
                                                            </a>
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">TP</div>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>$20,500</td>
                                                    <td>
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <h6>100%</h6>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-success w-100" style={{ height: 4 }}>
                                                            <div className="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img className="rounded bg-soft-primary img-fluid avatar-40 me-3" src="/admin/images/shapes/04.png" alt="profile" />
                                                            <h6>Community First</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="iq-media-group iq-media-group-1">
                                                            <a href="#" className="iq-media-1">
                                                                <div className="icon iq-icon-box-3 rounded-pill">MM</div>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>$9,800</td>
                                                    <td>
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <h6>75%</h6>
                                                        </div>
                                                        <div className="shadow-none progress bg-soft-primary w-100" style={{ height: 4 }}>
                                                            <div className="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="card credit-card-widget" data-aos="fade-up" data-aos-delay={900}>
                                <div className="pb-4 border-0 card-header">
                                    <div className="p-4 border border-white rounded primary-gradient-card">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="font-weight-bold">VISA </h5>
                                                <p className="mb-0">PREMIUM ACCOUNT</p>
                                            </div>
                                            <div className="master-card-content">
                                                <svg className="master-card-1" width={60} height={60} viewBox="0 0 24 24">
                                                    <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                                </svg>
                                                <svg className="master-card-2" width={60} height={60} viewBox="0 0 24 24">
                                                    <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="my-4">
                                            <div className="card-number">
                                                <span className="fs-5 me-2">5789</span>
                                                <span className="fs-5 me-2">****</span>
                                                <span className="fs-5 me-2">****</span>
                                                <span className="fs-5">2847</span>
                                            </div>
                                        </div>
                                        <div className="mb-2 d-flex align-items-center justify-content-between">
                                            <p className="mb-0">Card holder</p>
                                            <p className="mb-0">Expire Date</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6>Mike Smith</h6>
                                            <h6 className="ms-5">06/11</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="flex-wrap mb-4 d-flex align-itmes-center justify-content-between">
                                        <div className="d-flex align-itmes-center me-0 me-md-4">
                                            <div>
                                                <div className="p-3 mb-2 rounded bg-soft-primary">
                                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.9303 7C16.9621 6.92913 16.977 6.85189 16.9739 6.77432H17C16.8882 4.10591 14.6849 2 12.0049 2C9.325 2 7.12172 4.10591 7.00989 6.77432C6.9967 6.84898 6.9967 6.92535 7.00989 7H6.93171C5.65022 7 4.28034 7.84597 3.88264 10.1201L3.1049 16.3147C2.46858 20.8629 4.81062 22 7.86853 22H16.1585C19.2075 22 21.4789 20.3535 20.9133 16.3147L20.1444 10.1201C19.676 7.90964 18.3503 7 17.0865 7H16.9303ZM15.4932 7C15.4654 6.92794 15.4506 6.85153 15.4497 6.77432C15.4497 4.85682 13.8899 3.30238 11.9657 3.30238C10.0416 3.30238 8.48184 4.85682 8.48184 6.77432C8.49502 6.84898 8.49502 6.92535 8.48184 7H15.4932ZM9.097 12.1486C8.60889 12.1486 8.21321 11.7413 8.21321 11.2389C8.21321 10.7366 8.60889 10.3293 9.097 10.3293C9.5851 10.3293 9.98079 10.7366 9.98079 11.2389C9.98079 11.7413 9.5851 12.1486 9.097 12.1486ZM14.002 11.2389C14.002 11.7413 14.3977 12.1486 14.8858 12.1486C15.3739 12.1486 15.7696 11.7413 15.7696 11.2389C15.7696 10.7366 15.3739 10.3293 14.8858 10.3293C14.3977 10.3293 14.002 10.7366 14.002 11.2389Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ms-3">
                                                <h5>1153</h5>
                                                <small className="mb-0">Products</small>
                                            </div>
                                        </div>
                                        <div className="d-flex align-itmes-center">
                                            <div>
                                                <div className="p-3 mb-2 rounded bg-soft-info">
                                                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.1213 11.2331H16.8891C17.3088 11.2331 17.6386 10.8861 17.6386 10.4677C17.6386 10.0391 17.3088 9.70236 16.8891 9.70236H14.1213C13.7016 9.70236 13.3719 10.0391 13.3719 10.4677C13.3719 10.8861 13.7016 11.2331 14.1213 11.2331ZM20.1766 5.92749C20.7861 5.92749 21.1858 6.1418 21.5855 6.61123C21.9852 7.08067 22.0551 7.7542 21.9652 8.36549L21.0159 15.06C20.8361 16.3469 19.7569 17.2949 18.4879 17.2949H7.58639C6.25742 17.2949 5.15828 16.255 5.04837 14.908L4.12908 3.7834L2.62026 3.51807C2.22057 3.44664 1.94079 3.04864 2.01073 2.64043C2.08068 2.22305 2.47038 1.94649 2.88006 2.00874L5.2632 2.3751C5.60293 2.43735 5.85274 2.72207 5.88272 3.06905L6.07257 5.35499C6.10254 5.68257 6.36234 5.92749 6.68209 5.92749H20.1766ZM7.42631 18.9079C6.58697 18.9079 5.9075 19.6018 5.9075 20.459C5.9075 21.3061 6.58697 22 7.42631 22C8.25567 22 8.93514 21.3061 8.93514 20.459C8.93514 19.6018 8.25567 18.9079 7.42631 18.9079ZM18.6676 18.9079C17.8282 18.9079 17.1487 19.6018 17.1487 20.459C17.1487 21.3061 17.8282 22 18.6676 22C19.4969 22 20.1764 21.3061 20.1764 20.459C20.1764 19.6018 19.4969 18.9079 18.6676 18.9079Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ms-3">
                                                <h5>81K</h5>
                                                <small className="mb-0">Order Served</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex-wrap d-flex justify-content-between">
                                            <h2 className="mb-2">$405,012,300</h2>
                                            <div>
                                                <span className="badge bg-success rounded-pill">YoY 24%</span>
                                            </div>
                                        </div>
                                        <p className="text-info">Life time sales</p>
                                    </div>
                                    <div className="grid-cols-2 d-grid gap-card">
                                        <button className="p-2 btn btn-primary text-uppercase">SUMMARY</button>
                                        <button className="p-2 btn btn-info text-uppercase">ANALYTICS</button>
                                    </div>
                                </div>
                            </div>
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
