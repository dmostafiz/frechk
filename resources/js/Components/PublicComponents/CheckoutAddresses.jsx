import PublicLayout from '@/Layouts/PublicLayout'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import CreateAddressModal from './CreateAddressModal'

export default function CheckoutAddresses({ addresses }) {
    return (
        <div className="bg-white rounded shadow-sm p-4 mb-4">

            <h4 className="mb-1">Choose a delivery address</h4>
            <h6 className="mb-3 text-black-50">
                Multiple addresses in this location
            </h6>

            <div className="row">

                {addresses.map((addr, index) => {

                    return <div key={index} className="col-md-12">
                        <div className={`bg-white card addresses-item mb-4 border ${addr.is_default == 1 ? 'border-success shadow-sm' : ''}`}>
                            <div className="gold-members p-3">
                                <div className="media">
                                    <div className="media-body">
                                        <h6 className="mb-1 text-black">
                                            {addr.name}
                                        </h6>
                                        <small className="text-black">
                                            {addr.phone} | {addr.email}
                                        </small>
                                        <p className="text-black">
                                            {addr.zip_code}, {addr.street_address} - {addr.city}
                                        </p>
                                        <p className="mb-0 text-black font-weight-bold">
                                            <Link method='post' data={{
                                                addr_id: addr.id
                                            }} preserveScroll href={route('change.default_addr')} className="btn btn-sm btn-success mr-2"> DELIVER HERE</Link>

                                            <Link method='post' data={{
                                                addr_id: addr.id
                                            }} preserveScroll href={route('delete.address')} className="btn btn-sm btn-danger mr-2"> Delete</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                })}


                <div className="col-md-12">
                    <div className="bg-white card addresses-item">
                        <div className="gold-members p-3">
                            <div className="media">
                                <div className="media-body">
                                    <h6 className="mb-1 text-secondary">New address</h6>
                                    <small className="text-secondary">Phone number | Email address</small>
                                    <p>Zip code, Street address where you want to receive your food - City</p>


                                    <button data-toggle="modal" data-target="#createAddress" className="btn btn-sm btn-info mr-2">
                                        ADD NEW ADDRESS
                                    </button>

                                    <CreateAddressModal />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
