import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import AdminLayout from '../../../Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import moment from 'moment';
import ViewShippingAddressModal from '@/Components/AdminComponents/ViewShippingAddressModal';

export default function SubscriptionList({ subscriptions, deliveries, today }) {

    const [deliverSubscription, setSubscriptions] = useState([])

    useEffect(() => {

        const dels = []

        deliveries.forEach((delivery) => {
            dels.push(delivery.subscription_id)
        } )

        const subsss = []

        subscriptions.forEach(subs => {

            if(dels.includes(subs.id)){

                subsss.push({
                    id: subs.id,
                    subscription_id: subs.subscription_id,
                    user: subs.user,
                    package: subs.package,
                    status: 'delivered',
                    address: subs.address
                }) 

            }else{

                subsss.push({
                    id: subs.id,
                    subscription_id: subs.subscription_id,
                    user: subs.user,
                    package: subs.package,
                    status: 'null',
                    address: subs.address
                }) 

            }

        })

        console.log('Sub dls: ', subsss)
        console.log('Delivery IDS: ', dels)

        setSubscriptions(subsss)

    }, [subscriptions])

    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Today Deliveries</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Today Deliveries</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/dashboard' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to dashboard</span>
            </Link>}
        />}>
            <div className="row">
                <div className="col-12">
                    <div>
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h6 className="card-title">Today Deliveries ( { moment(today).format('ll')} )</h6>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-left">
                                        <tr>
                                            <th>Subscription ID</th>
                                            <th>Customer</th>
                                            <th>Address</th>
                                            <th>Order Items</th>
                                            <th>Status</th>
                                            {/* <th>Subscribed at</th> */}
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deliverSubscription.map((subs, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <div>#{subs.subscription_id}</div>
                                                </td>
                                                <td>
                                                    <div>{subs.user.email}</div>
                                                </td>
                                                <td>
                                                    <ViewShippingAddressModal address={subs.address}/>
                                                </td>
                                                <td>
                                                    <div>{subs.package.name} Items</div>
                                                </td>
                                                <td>
                                                    <div>{subs.status != 'delivered' ? 'Not Delivered' : 'Delivered'}</div>
                                                </td>
                                                {/* <td>
                                                    <div>{moment(subs.created_at).format('ll')} - {moment(subs.created_at).format('LT')}</div>
                                                </td> */}
                                                <td>
                                                    <div className="d-flex justify-content-evenly">
                                                    {subs.status != 'delivered' ?
                                                        <Link href={route('admin.deliver')} method='POST' data={{
                                                            subscriptionId: subs.id,
                                                            packageId: subs.package.id,
                                                            userId: subs.user.id
                                                        }} 
                                                        className="btn btn-info btn-icon btn-sm rounded-pill ms-2"
                                                        preserveScroll
                                                        >
                                                           Make Delivery
                                                        </Link>
                                                    : <>____</> }
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
