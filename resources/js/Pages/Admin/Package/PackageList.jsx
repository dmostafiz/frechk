import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import moment from 'moment';

export default function PackageList({ packages }) {
    // console.log('Packages: ', packages)
    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Packages</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Packages</li>
                </ol>
            </nav>
            }
            // button={<Link href={route('admin.package.create')} className="btn btn-link btn-soft-light">
            //     <AiOutlinePlus />
            //     <span style={{ marginLeft: 5 }}>Create Package</span>
            // </Link>}
        />}>
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h6 className="card-title">Packages</h6>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-left">
                                        <tr>
                                            <th>Package</th>
                                            <th>Price</th>
                                            <th>Delivery Days</th>
                                            <th>Active Sales</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packages.map((pkg, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <div>{pkg.name}</div>
                                                </td>
                                                <td>
                                                    <div><strong>${pkg.price}</strong> <small>Monthly</small></div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {pkg.days.map((day, index) => {
                                                            return <span key={index}> #{day.day}</span>
                                                        })}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div><strong>{pkg.users.length}</strong> <small>Users</small></div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-evenly">
                                                        <Link href={route('admin.package.edit', pkg.id)} className="btn btn-info btn-icon btn-sm rounded-pill ms-2">
                                                            Edit
                                                        </Link>

                                                        <Link href={route('admin.package.details', pkg.id)} className="btn btn-primary btn-icon btn-sm rounded-pill ms-2">
                                                            Sync Menus
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
