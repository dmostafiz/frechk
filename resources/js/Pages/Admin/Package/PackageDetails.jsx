import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import Select from 'react-select'
import AddMenuToDay from '@/Components/AdminComponents/AddMenuToDay';

export default function PackageDetails({ pkg, days, menus }) {

    const { errors } = usePage().props

    const { data, setData, post, processing, reset } = useForm({
        name: pkg.name,
        title: pkg.title,
        price: pkg.price,
        description: pkg.description,
        days: []
    });

    const [dayOptions, setDayOptions] = useState(() => {
        const builtDays = []

        days.map(day => {
            builtDays.push({ value: day.id, label: day.day })
        })

        return builtDays
    })


    const handleDayChange = (value) => {
        setData({ ...data, days: value })
    }

    const handleSubmit = () => {
        post(route('create.package'))
    }


    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Sync Menus</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Sync Menus</li>
                </ol>
            </nav>
            }
            button={<Link href={route('admin.package.all')} className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Package List</span>
            </Link>}
        />}>
            <div className="row">
                <div className="col-12">


                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h6 className="card-title">Package Details</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p> */}
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="menuName">Package Name</label>
                                                <h4>{data.name}</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="product-discount-input">Monthly Price</label>
                                                <h4>${data.price}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="">

                                        {pkg.days.map((day, index) => {
                                            return <div key={index}>
                                                <h3 className="mb-3">{day.day} <AddMenuToDay pkg={pkg} day={day} menus={menus} /></h3>
                                                <div className='pt-2 pb-5'>
                                                    {day.menus.length
                                                        ? <div className="row">

                                                            {day.menus.map((menu, index) => {
                                                                return <div key={index} className="col-md-2 col-4">
                                                                    <img className="img-fluid" src={`/${menu.image}`} />
                                                                    <h6>{menu.name}</h6>
                                                                </div>
                                                            })}

                                                        </div>
                                                        : <div className="mb-4">
                                                            <span>No menus added!</span> <br />

                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        })}
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
