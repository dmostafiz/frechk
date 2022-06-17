import HeaderContent from '@/Components/AdminComponents/HeaderContent'
import ChangeAvatar from '@/Components/PublicComponents/ChangeAvatar'
import ChangePassword from '@/Components/PublicComponents/ChangePassword'
import UpdateProfile from '@/Components/PublicComponents/UpdateProfile'
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'

export default function Profile() {
    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Account</h1>}
            subtitle={<p>Update your account settings</p>}
        // button={<Link href='/admin/create_menu' className="btn btn-link btn-soft-light">
        //     <MdAdd />
        //     Create Menu
        // </Link>}
        />}>


            <div className="mb-3">
                <div className="bg-white card payments-item pb-5 pt-5">
                    <ChangeAvatar />
                </div>
            </div>


            <div className="mb-3">
                <h6 className="font-weight-bold mt-0 mb-4">Update Profile</h6>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg-white card payments-item">
                            <UpdateProfile />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <h6 className="font-weight-bold mt-0 mb-4">Update Password</h6>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg-white card payments-item mb-4">
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>


        </AdminLayout>
    )
}
