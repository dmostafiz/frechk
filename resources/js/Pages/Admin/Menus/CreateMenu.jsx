import AdminLayout from '@/Layouts/AdminLayout'
import React, { useState } from 'react'
import useScript from '@/Helpers/useScript';
import HeaderContent from '@/Components/AdminComponents/HeaderContent';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { BiArrowBack } from 'react-icons/bi'
import Select from 'react-select'

export default function CreateMenu({ tags, categories }) {

    const { errors } = usePage().props
    const { data, setData, post, processing, reset } = useForm({
        name: null,
        title: null,
        price: null,
        description: null,
        image: null,
        images: null,
        category: null,
        tags: [],
        homepageCarousel: true,
        popularFoods: true,
        status: 'published',
    });


    const [tagOptions, setTagOptions] = useState(() => {
        const builtTags = []

        tags.map(tag => {
            builtTags.push({ value: tag.id, label: tag.name })
        })

        return builtTags
    })

    const handleTagChange = (value) => {
        setData({ ...data, tags: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('menus.create'), {preserveState: true})

        // setData({
        //     name: null,
        //     title: null,
        //     price: null,
        //     description: null,
        //     image: null,
        //     images: null,
        //     category: null,
        //     tags: [],
        //     homepageCarousel: true,
        //     popularFoods: true,
        //     status: 'published',
        // })
    }


    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Create menu</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Create menu</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/menus' className="btn btn-link btn-soft-light">
                <BiArrowBack />
                <span style={{ marginLeft: 5 }}>Back to menus</span>
            </Link>}
        />}>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-8">

                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Menu information</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p> */}

                                <div className="form-group">
                                    <label className="form-label" htmlFor="menuName">Menu Name</label>
                                    {errors.name && <p className="text-danger">{errors.name}</p>}
                                    <input onChange={e => setData({ ...data, name: e.target.value })} value={data.name} type="text" className="form-control" placeholder="Enter menu name" id="menuName" />
                                </div>

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="menuName">Menu title</label>
                                            {errors.title && <p className="text-danger">{errors.title}</p>}
                                            <input onChange={e => setData({ ...data, title: e.target.value })} value={data.title} type="text" className="form-control" placeholder="Enter menu title" id="menuName" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-discount-input">Price</label>
                                            {errors.price && <p className="text-danger">{errors.price}</p>}
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="product-discount-addon">$</span>
                                                <input onChange={e => setData({ ...data, price: e.target.value })} value={data.price} type="text" className="form-control" id="product-discount-input" placeholder="Enter price" aria-label="discount" aria-describedby="product-discount-addon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="menuDescription">Menu Description</label>
                                    {errors.description && <p className="text-danger">{errors.description}</p>}
                                    <textarea onChange={e => setData({ ...data, description: e.target.value })} value={data.description} rows="7" className="form-control" placeholder="Enter menu description" id="menuDescription"></textarea>
                                </div>

                                {/* <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="submit" className="btn btn-danger">cancel</button> */}

                            </div>
                        </div>



                        {/* end card */}
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Menu Gallery</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-4">
                                    <h6 className="fs-14 mb-1">Featured Image</h6>
                                    {errors.image && <p className="text-danger">{errors.image}</p>}
                                    <p className="text-muted">Add menu featured Image.</p>
                                    <input onChange={e => setData({ ...data, image: e.target.files[0] })} className="form-control" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                </div>

                                <div className="mb-4">
                                    <h6 className="fs-14 mb-1">Gallery Images</h6>
                                    {errors.images && <p className="text-danger">{errors.images}</p>}
                                    <p className="text-muted">Add menu gallery images.</p>
                                    <input multiple={true} onChange={e => setData({ ...data, images: e.target.files })} className="form-control" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4">

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Menu Categories</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-muted mb-2">
                                    <a href="#" className="float-end text-decoration-underline">Add New</a>
                                    Select category
                                </p>
                                {errors.category && <p className="text-danger">{errors.category}</p>}
                                <select onChange={e => setData({ ...data, category: e.target.value })} value={data.category} className="form-select" name="choices-category-input" data-choices data-choices-sorting="true">
                                    <option value=''>Select a category</option>
                                    {categories.map((cat, index) => <option key={index} value={cat.id}>{cat.name}</option>)}
                                </select>
                            </div>
                            {/* end card body */}
                        </div>

                        {/* end card */}
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Menu Tags</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-muted mb-2">
                                    <a href="#" className="float-end text-decoration-underline">Add New</a>
                                    Select tags
                                </p>
                                {errors.tags && <p className="text-danger">{errors.tags}</p>}
                                <Select onChange={handleTagChange} value={data.tags} options={tagOptions} isMulti />
                            </div>
                            {/* end card body */}
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Options</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <div className="mb-3 form-check form-switch">
                                        <input onChange={e => setData({ ...data, homepageCarousel: !data.homepageCarousel })} checked={data.homepageCarousel} className="form-check-input" type="checkbox" id="carousel" />
                                        <label className="form-check-label" htmlFor="carousel">Add to homepage carousel</label>
                                    </div>

                                    {/* <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="foodCard" defaultChecked />
                                        <label className="form-check-label" htmlFor="foodCard">Add to homepage Foodcards</label>
                                    </div> */}


                                    <div className="mb-3 form-check form-switch">
                                        <input onChange={e => setData({ ...data, popularFoods: !data.popularFoods })} checked={data.popularFoods} className="form-check-input" type="checkbox" id="popularFoods" />
                                        <label className="form-check-label" htmlFor="popularFoods">Add to Popular Foods</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="choices-publish-status-input" className="form-label">Status</label>
                                    <select onChange={e => setData({ ...data, status: e.target.value })} value={data.status} className="form-select" id="choices-publish-status-input" data-choices data-choices-search-false>
                                        <option value="published" selected>Published</option>
                                        <option value="drafted">Draft</option>
                                    </select>
                                </div>

                                <div className="text-end mt-4">
                                    <button type="submit" className="btn btn-success w-sm">Save Menu</button>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>

                    </div>
                </div>
            </form>

        </AdminLayout>
    )
}
