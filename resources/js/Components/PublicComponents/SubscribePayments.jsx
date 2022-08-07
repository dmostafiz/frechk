import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

export default function SubscribePayments({ pkg }) {
    const { cartItems, cartTotal } = usePage().props

    function submitOrder(e, paymentMethod) {
        e.preventDefault();
        // subscribe.now
        Inertia.post(route('process.paypal', {
            packageId: pkg.id
        }))
    }

    const handleCreatSubscription = (data, actions) => {
        return actions.subscription.create({
            /* Creates the subscription */
            "plan_id": 'P-2VS1878681757670VMLAIT5I',
            custom_id: 'sdsdsdgdfdf'
        });
    }

    const handlePaypalApproval = (data, actions) => {
        console.log('Paypal Approved Data: ', actions)
        console.log('Paypal Approved Data: ', data)

        // const dataAttr = {
        //     _token: data.facilitatorAccessToken,
        //     _subscriptionID: data.subscriptionID,
        //     _orderID: data.orderID
        // }

        // Inertia.get(route('handle.subscription'), dataAttr)

    }

    // const handleClickPaypal= async () => {
    //     const res = await axios.post(route('process.paypal'), {packageId: pkg.id}, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

    //     console.log('Paypal Response: ', res.data)
    // }

    return (
        <div className="bg-white rounded shadow-sm p-4 osahan-payment">
            <h4 className="mb-4">Choose subscription mathod method</h4>
            {/* <h6 className="mb-3 text-black-50">Cash every month</h6> */}
            <div className="row">

                <div className="col-sm-12">

                    <Link
                        href={route('process.paypal')}
                        method='POST'
                        data={{packageId: pkg.id}}
                    >
                        <img width='100%' src='/paypal.png' />
                    </Link>

                    {/* <button onClick={handleClickPaypal}>Paypal subscription</button> */}

                    {/* <PayPalButtons
                        createSubscription={handleCreatSubscription}
                        onApprove={handlePaypalApproval}
                    /> */}

                </div>
            </div>
        </div >
    )
}
