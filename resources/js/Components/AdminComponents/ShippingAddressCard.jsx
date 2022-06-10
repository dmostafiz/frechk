import React from 'react'

export default function ShippingAddressCard({address, title=true}) {
    return (
        <div className="card">
            {title && <div className="card-header">
                <h6 className="card-title">Shipping Address</h6>
            </div>}
            
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-sm table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td className='text-right'>
                                    Street
                                </td>
                                <td className='text-wrap text-muted text-sm pl-3'>
                                    {address?.street_address}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    City
                                </td>
                                <td className='text-wrap text-muted text-sm pl-3'>
                                    {address?.city}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Zip Code
                                </td>
                                <td className='text-wrap text-muted text-sm pl-3'>
                                    {address?.zip_code}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Email
                                </td>
                                <td className='text-wrap text-muted text-sm pl-3'>
                                    {address?.email}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone
                                </td>
                                <td className='text-wrap text-muted text-sm pl-3'>
                                    {address?.phone}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
