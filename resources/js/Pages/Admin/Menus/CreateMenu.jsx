import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import useScript from '@/Helpers/useScript';
import HeaderContent from '@/Components/AdminComponents/HeaderContent';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { BiArrowBack } from 'react-icons/bi'
import Select from 'react-select'

export default function CreateMenu() {

    const {errors} = usePage().props
    const { data, setData, post, processing, reset } = useForm({
        name: null,
        title: null,
        price: null,
        description: null,
        image: null,
        images: null,
        category: null,
        tags: null,
        homepageCarousel: true,
        popularFoods: true,
        status: 'published',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('menus.create'))

        setData({
            name: '',
            description: ''
        })
    }


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

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
                                    <input onChange={e=>setData({...data, name: e.target.value})} value={data.name} type="text" className="form-control" placeholder="Enter menu name" id="menuName" />
                                </div>

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="menuName">Menu title</label>
                                            <input onChange={e=>setData({...data, title: e.target.value})} value={data.title} type="text" className="form-control" placeholder="Enter menu title" id="menuName" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-discount-input">Price</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="product-discount-addon">$</span>
                                                <input onChange={e=>setData({...data, price: e.target.value})} value={data.price} type="text" className="form-control" id="product-discount-input" placeholder="Enter price" aria-label="discount" aria-describedby="product-discount-addon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="menuDescription">Menu Description</label>
                                    <textarea onChange={e=>setData({...data, description: e.target.value})} value={data.description} rows="7" className="form-control" placeholder="Enter menu description" id="menuDescription"></textarea>
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
                                    <p className="text-muted">Add menu featured Image.</p>
                                    <input onChange={e=>setData({...data, image: e.target.files[0]})} className="form-control" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                </div>

                                <div className="mb-4">
                                    <h6 className="fs-14 mb-1">Gallery Images</h6>
                                    <p className="text-muted">Add menu gallery images.</p>
                                    <input multiple={true} onChange={e=>setData({...data, images: e.target.files})} className="form-control" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
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
                                <select onChange={e=>setData({...data, category: e.target.value})} value={data.category} className="form-select" name="choices-category-input" data-choices data-choices-sorting="true">
                                    <option value="Appliances">Appliances</option>
                                    <option value="Fashion" selected>Fashion</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Home & Furniture">Home &amp; Furniture</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Mobiles">Mobiles</option>
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
                                <Select onChange={e=>setData({...data, tags: e.target.value})} value={data.tags} options={options} isMulti />
                                {/* <select className="form-select" name="choices-category-input">
                                    <option value="Appliances">Appliances</option>
                                    <option value="Fashion" selected>Fashion</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Home & Furniture">Home &amp; Furniture</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Mobiles">Mobiles</option>
                                </select> */}
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
                                        <input onChange={e=>setData({...data, homepageCarousel: e.target.value})} value={data.homepageCarousel} className="form-check-input" type="checkbox" id="carousel" defaultChecked />
                                        <label className="form-check-label" htmlFor="carousel">Add to homepage carousel</label>
                                    </div>

                                    {/* <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="foodCard" defaultChecked />
                                        <label className="form-check-label" htmlFor="foodCard">Add to homepage Foodcards</label>
                                    </div> */}

                                    
                                    <div className="mb-3 form-check form-switch">
                                        <input onChange={e=>setData({...data, popularFoods: e.target.value})} value={data.popularFoods}  className="form-check-input" type="checkbox" id="popularFoods" defaultChecked />
                                        <label className="form-check-label" htmlFor="popularFoods">Add to Popular Foods</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="choices-publish-status-input" className="form-label">Status</label>
                                    <select onChange={e=>setData({...data, status: e.target.value})} value={data.status}  className="form-select" id="choices-publish-status-input" data-choices data-choices-search-false>
                                        <option value="Published" selected>Published</option>
                                        <option value="Draft">Draft</option>
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
