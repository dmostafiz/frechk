import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import Select from 'react-select'

export default function PackageCreate({days}) {

    const { errors } = usePage().props

    const { data, setData, post, processing, reset } = useForm({
        name: null,
        title: null,
        price: null,
        description: null,
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
            title={<h1>Create Package</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Create Package</li>
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
                                <h6 className="card-title">Create Package</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p> */}
                            <div className="row">
                                <div className="col-md-8">

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="menuName">Package Name</label>
                                        {errors.name && <p className="text-danger">{errors.name}</p>}
                                        <input onChange={e => setData({ ...data, name: e.target.value })} value={data.name} type="text" className="form-control" placeholder="Enter menu name" id="menuName" />
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="menuName">Package title</label>
                                                {errors.title && <p className="text-danger">{errors.title}</p>}
                                                <input onChange={e => setData({ ...data, title: e.target.value })} value={data.title} type="text" className="form-control" placeholder="Enter menu title" id="menuName" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="product-discount-input">Monthly Price</label>
                                                {errors.price && <p className="text-danger">{errors.price}</p>}
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="product-discount-addon">$</span>
                                                    <input onChange={e => setData({ ...data, price: e.target.value })} value={data.price} type="text" className="form-control" id="product-discount-input" placeholder="Enter price" aria-label="discount" aria-describedby="product-discount-addon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="menuDescription">Package Description</label>
                                        {errors.description && <p className="text-danger">{errors.description}</p>}
                                        <textarea onChange={e => setData({ ...data, description: e.target.value })} value={data.description} rows="7" className="form-control" placeholder="Enter menu description" id="menuDescription"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="menuName">Delivery Days</label>
                                        {errors.name && <p className="text-danger">{errors.name}</p>}
                                        <Select onChange={handleDayChange} value={data.days} options={dayOptions} isMulti />
                                    </div>

                                    <button onClick={handleSubmit} type="submit" className="btn btn-success">Create Package</button>
                                </div>
                            </div>




                        </div>
                    </div>




                </div>
            </div>
        </AdminLayout>
    )
}
