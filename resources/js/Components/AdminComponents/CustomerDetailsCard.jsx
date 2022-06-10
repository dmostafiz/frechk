import moment from 'moment'
import React from 'react'
import UserAvatar from '../UserAvatar'

export default function CustomerDetailsCard({ user }) {
    return (
        <div className="card">
            <div className="card-header">
                <h6 className="card-title">Customer Details</h6>
            </div>
            <div className="card-body">
                <div className="row g-2">
                    <div className='col-3'>
                        <div className="mb-2">
                            <UserAvatar className="theme-color-green-img img-fluid avatar avatar-rounded" user={user} />
                        </div>
                    </div>
                    <div className='col-8 p-0'>

                        <div className="table-responsive">
                            <table className="table table-sm table-bordered table-hover table-bordered table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            First Name
                                        </td>
                                        <td className='text-wrap text-muted text-sm pl-3'>
                                            {user?.first_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Last Name
                                        </td>
                                        <td className='text-wrap text-muted text-sm pl-3'>
                                            {user?.last_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td className='text-wrap text-muted text-sm pl-3'>
                                            {user?.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Join Date
                                        </td>
                                        <td className='text-wrap text-muted text-sm pl-3'>
                                            {moment(user.created_at).format('ll')}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
