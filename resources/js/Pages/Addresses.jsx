import CheckoutAddresses from '@/Components/PublicComponents/CheckoutAddresses'
import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import React from 'react'

export default function Addresses({addresses}) {
    return (
        <PublicLayout>
            <CustomerLayout>
                <div className="e">
                    <h4 className="font-weight-bold mt-0 mb-4">Manage Addresses</h4>
                    
                    <CheckoutAddresses addresses={addresses} />

                </div>

            </CustomerLayout>
        </PublicLayout>
    )
}

