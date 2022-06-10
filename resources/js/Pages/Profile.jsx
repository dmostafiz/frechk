import ChangeAvatar from '@/Components/PublicComponents/ChangeAvatar'
import ChangePassword from '@/Components/PublicComponents/ChangePassword'
import UpdateProfile from '@/Components/PublicComponents/UpdateProfile'
import auth from '@/Hooks/auth'
import PublicLayout from '@/Layouts/PublicLayout'
import CustomerLayout from '@/Layouts/SubLayouts/CustomerLayout'
import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function Profile() {

    return (
        <PublicLayout>
            <CustomerLayout>
                <div className="mb-5">
                    <h4 className="font-weight-bold mt-0 mb-4">My Profile</h4>

                    <div className="bg-white card payments-item mb-5 pb-3 pt-3">
                        <ChangeAvatar />
                    </div>
                </div>

                <br />

                <div className="mb-3">
                    <h6 className="font-weight-bold mt-0 mb-4">Update Profile</h6>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-white card payments-item mb-4">

                                <UpdateProfile />

                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className="">
                    <h6 className="font-weight-bold mt-0 mb-4">Update Password</h6>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-white card payments-item mb-4">

                                <ChangePassword />

                            </div>
                        </div>
                    </div>
                </div>

            </CustomerLayout>
        </PublicLayout>
    )
}
