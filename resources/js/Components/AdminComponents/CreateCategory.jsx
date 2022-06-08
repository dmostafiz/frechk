import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'

export default function CreateCategory() {
    const {errors} = usePage().props
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        description: '',
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('categories.create'))

        setData({
            name: '',
            description: ''
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h6 className="card-title">Create Category</h6>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="form-label" htmlFor="menuName">Category Name</label>
           
                        <input onChange={e=>setData({ ...data, name: e.target.value})} value={data.name} type="text" className="form-control" placeholder="Enter category name" id="menuName" />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="menuDescription">Category Description</label>
                        <textarea onChange={e=>setData({ ...data, description: e.target.value})} value={data.description} type="text" className="form-control" placeholder="Enter category description" id="menuDescription"></textarea>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Category featured image</label>
                        <input onChange={e => setData({...data, image: e.target.files[0]})} className="form-control" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                    </div>

                    <button type="submit" className="btn btn-success">Create Category</button>
                </div>
            </div>

        </form>
    )
}
