import auth from '@/Hooks/auth'
import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaHandHoldingUsd } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { GiClick } from 'react-icons/gi'
import { usePage } from '@inertiajs/inertia-react';



export default function AffiliateProgram() {

    const { myAffiliateClicks, myAffiliateUsers } = usePage().props

    const [value, setValue] = useState('This is good')
    const [copied, setCopied] = useState(false)

    const authUsername = auth()?.customer_id

    useEffect(() => {
        setValue(`${window?.location.protocol}//${window?.location.hostname}/ref/${authUsername}`)
    }, [])

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }, [copied])

    return (
        <PublicLayout>
            <CustomerLayout>
                <div className="">
                    <h4 className="font-weight-bold mt-0 mb-4">Affiliate Program</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-white card payments-item mb-4">
                                <div className="gold-members p-3">
                                    <div className="">
                                        <label>Invitation Link</label>
                                        <input disabled value={value} className='form-control form-control-sm' />
                                        {/* <button className="btn btn-" */}

                                        <CopyToClipboard text={value}
                                            onCopy={() => setCopied(true)}>
                                            <button className="btn btn-outline-dark btn-sm mt-3" type="submit" >
                                                {!copied ? 'Copy Link' : 'Copied'}
                                            </button>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bg-white card payments-item mb-4">
                                <div className="gold-members p-2">
                                    <div className="media">
                                        <GiClick style={{ fontSize: '60px', marginRight: '25px', color: '#E9ECEF' }} />

                                        <div className="media-body">
                                            <h1 className="mb-1">{myAffiliateClicks.length}</h1>
                                            <p>Impressions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bg-white card payments-item mb-4 ">
                                <div className="gold-members p-2">
                                    <div className="media">
                                        <HiUsers style={{ fontSize: '60px', marginRight: '25px', color: '#E9ECEF' }} />

                                        <div className="media-body">
                                            <h1 className="mb-1">{myAffiliateUsers.length}</h1>
                                            <p>Registrations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="bg-white card payments-item mb-4 ">
                                <div className="gold-members p-2">
                                    <div className="media">
                                        <FaHandHoldingUsd style={{ fontSize: '60px', marginRight: '20px', color: '#E9ECEF' }} />
                                        <div className="media-body">
                                            <h1 className="mb-1">${auth().wallet}</h1>
                                            <p className=''>Available in wallet</p>
                                            {/* <a href="#" className="" style={{fontSize: '14px', marginTop: '15px'}}>Request withdraw</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h4 className="font-weight-bold mt-0 mb-4">Payment History</h4>
                    <div className="card payments-item p-4">
                       <p>No payment initialized!</p>
                    </div>
                </div>
            </CustomerLayout>
        </PublicLayout>
    )
}
