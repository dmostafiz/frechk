import auth from '@/Hooks/auth'
import { Inertia } from '@inertiajs/inertia'
import { useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function UpdateProfile() {

    const { errors } = usePage().props

    const { data, setData } = useForm({
        first_name: auth().first_name,
        last_name: auth().last_name,
        email: auth().email
    })


    const handleUpdate = () => {
        Inertia.post(route('update.profile'), { ...data }, { preserveScroll: true, preserveState: true })
    }

    return (
        <div className="gold-members p-3">
            <div className="form-group">
                <label>First Name</label>
                {errors.first_name && <p className="text-danger">{errors.first_name}</p>}
                <input onChange={e => setData({ ...data, first_name: e.target.value })} value={data.first_name} className='form-control form-control-sm' />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                {errors.last_name && <p className="text-danger">{errors.last_name}</p>}
                <input onChange={e => setData({ ...data, last_name: e.target.value })} value={data.last_name} className='form-control form-control-sm' />
            </div>

            <div className="form-group">
                <label>Email</label>
                {errors.email && <p className="text-danger">{errors.email}</p>}
                <input onChange={e => setData({ ...data, email: e.target.value })} value={data.email} className='form-control form-control-sm' />
            </div>

            <button onClick={handleUpdate} className='btn btn-success'>Update Profile</button>
        </div>
    )
}
