import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import React from 'react'

export default function Addresses() {
    return (
        <PublicLayout>
            <CustomerLayout>
                <div className="e">
                    <h4 className="font-weight-bold mt-0 mb-4">Manage Addresses</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-white card addresses-item mb-4 border border-primary shadow">
                                <div className="gold-members p-4">
                                    <div className="media">
                                        <div className="mr-3"><i className="icofont-ui-home icofont-3x" /></div>
                                        <div className="media-body">
                                            <h6 className="mb-1 text-secondary">Home</h6>
                                            <p className="text-black">Osahan House, Jawaddi Kalan, Ludhiana,
                                                Punjab 141002, India
                                            </p>
                                            <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i className="icofont-ui-edit" /> EDIT</a> <a className="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i className="icofont-ui-delete" /> DELETE</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white card addresses-item mb-4 shadow-sm">
                                <div className="gold-members p-4">
                                    <div className="media">
                                        <div className="mr-3"><i className="icofont-briefcase icofont-3x" /></div>
                                        <div className="media-body">
                                            <h6 className="mb-1">Work</h6>
                                            <p>NCC, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab
                                                141002, India
                                            </p>
                                            <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i className="icofont-ui-edit" /> EDIT</a> <a className="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i className="icofont-ui-delete" /> DELETE</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2 pb-2">
                        <div className="col-md-6">
                            <div className="bg-white card addresses-item mb-4  shadow-sm">
                                <div className="gold-members p-4">
                                    <div className="media">
                                        <div className="mr-3"><i className="icofont-location-pin icofont-3x" />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mb-1">Other</h6>
                                            <p>Delhi Bypass Rd, Jawaddi Taksal, Ludhiana, Punjab 141002,
                                                India
                                            </p>
                                            <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i className="icofont-ui-edit" /> EDIT</a> <a className="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i className="icofont-ui-delete" /> DELETE</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white card addresses-item mb-4  shadow-sm">
                                <div className="gold-members p-4">
                                    <div className="media">
                                        <div className="mr-3"><i className="icofont-location-pin icofont-3x" />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mb-1">Other</h6>
                                            <p>MT, Model Town Rd, Pritm Nagar, Model Town, Ludhiana, Punjab
                                                141002, India
                                            </p>
                                            <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i className="icofont-ui-edit" /> EDIT</a> <a className="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i className="icofont-ui-delete" /> DELETE</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-white card addresses-item shadow-sm">
                                <div className="gold-members p-4">
                                    <div className="media">
                                        <div className="mr-3"><i className="icofont-location-pin icofont-3x" />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mb-1">Other</h6>
                                            <p>GNE Rd, Jawaddi Taksal, Ludhiana, Punjab 141002, India
                                            </p>
                                            <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i className="icofont-ui-edit" /> EDIT</a> <a className="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i className="icofont-ui-delete" /> DELETE</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white card addresses-item shadow-sm">
                                <div className="gold-members p-4">
                                    <div className="media">
                                        <div className="mr-3"><i className="icofont-location-pin icofont-3x" />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mb-1">Other</h6>
                                            <p>GTTT, Model Town Rd, Pritm Nagar, Model Town, Ludhiana,
                                                Punjab 141002, India
                                            </p>
                                            <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#add-address-modal" href="#"><i className="icofont-ui-edit" /> EDIT</a> <a className="text-danger" data-toggle="modal" data-target="#delete-address-modal" href="#"><i className="icofont-ui-delete" /> DELETE</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </CustomerLayout>
        </PublicLayout>
    )
}

