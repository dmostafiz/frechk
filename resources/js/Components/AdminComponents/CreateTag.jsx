import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'

export default function CreateTag() {
    const {errors} = usePage().props
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('tags.create'))

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
                        <h4 className="card-title">Create Tag</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="form-label" htmlFor="menuName">Tag Name</label>
                        <input onChange={e=>setData({ ...data, name: e.target.value})} value={data.name} type="text" className="form-control" placeholder="Enter tag name" id="menuName" />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="menuDescription">Tag Description</label>
                        <textarea onChange={e=>setData({ ...data, description: e.target.value})} value={data.description} type="password" className="form-control" placeholder="Enter tag description" id="menuDescription"></textarea>
                        {errors.description && <p className="text-danger">{errors.description}</p>}
                    </div>

                    <button disabled={processing ? true : false} type="submit" className={`btn ${processing ? 'btn-dark': 'btn-success'}`}>
                        Create Tag
                    </button>
                </div>
            </div>

        </form>
    )
}
