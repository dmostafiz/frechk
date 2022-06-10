import moment from 'moment'
import React from 'react'

export default function CustomerDetailsCard({user}) {
  return (
    <div className="card">
    <div className="card-header">
        <h6 className="card-title">Customer Details</h6>
    </div>
    <div className="card-body">
        <div className="row g-2">
            <div className='col-3'>
                <div className="mb-2">
                    <img width='100px' className='img-fluid' src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
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
