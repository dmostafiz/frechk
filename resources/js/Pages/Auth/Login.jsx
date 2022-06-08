import LoginComponent from '@/Components/PublicComponents/LoginComponent'
import AuthLayout from '@/Layouts/AuthLayout'
import React from 'react'

export default function Login({ status, canResetPassword }) {




    return (
        <AuthLayout>

            <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">

                <LoginComponent />
         
                <hr className="my-4" />
                <p className="text-center">LOGIN WITH</p>
                <div className="row">
                    <div className="col pr-2">
                        <button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Google</button>
                    </div>
                    <div className="col pl-2">
                        <button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Facebook</button>
                    </div>
                </div>
            </div>

        </AuthLayout>

    )
}
