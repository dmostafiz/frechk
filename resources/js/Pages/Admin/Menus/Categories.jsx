import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import useScript from '@/Helpers/useScript';
import HeaderContent from '@/Components/AdminComponents/HeaderContent';
import { Link } from '@inertiajs/inertia-react';
import { BiArrowBack } from 'react-icons/bi'
import CreateCategory from '@/Components/AdminComponents/CreateCategory';
import CategoryList from '@/Components/AdminComponents/CategoryList';

export default function Categories({categories}) {

    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Categories</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Categories</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/dashboard' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to dashboard</span>
            </Link>}
        />}>

            <div className="row">
                <div className="col-lg-5">
                    <CreateCategory />
                </div>

                {/* end col */}
                <div className="col-lg-7">
                   <CategoryList categories={categories}/>
                </div>
            </div>



        </AdminLayout>
    )
}
