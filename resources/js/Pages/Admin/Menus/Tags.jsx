import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import useScript from '@/Helpers/useScript';
import HeaderContent from '@/Components/AdminComponents/HeaderContent';
import { Link } from '@inertiajs/inertia-react';
import { BiArrowBack } from 'react-icons/bi'
import CreateTag from '@/Components/AdminComponents/CreateTag';
import TagList from '@/Components/AdminComponents/TagList';

export default function Tags({tags}) {

    // console.log('editTag: ', )

    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Tags</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">tags</li>
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
                    <CreateTag />
                </div>

                {/* end col */}
                <div className="col-lg-7">

                   <TagList tags={tags}/>
                </div>
            </div>



        </AdminLayout>
    )
}
