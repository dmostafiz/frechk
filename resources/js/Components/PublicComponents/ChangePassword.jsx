import auth from '@/Hooks/auth'
import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function ChangePassword() {

    const { data, setData } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    return (
        <div className="gold-members p-3">
            <div className="form-group">
                <label>Current Password</label>
                <input type='password' onChange={e => setData({ ...data, current_password: e.target.value })} value={data.current_password} className='form-control form-control-sm' placeholder='Enter current password'/>
            </div>

            <div className="form-group">
                <label>New Password</label>
                <input type='password' onChange={e => setData({ ...data, password: e.target.value })} value={data.password} className='form-control form-control-sm' placeholder='New password'/>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type='password' onChange={e => setData({ ...data, password_confirmation: e.target.value })} value={data.password_confirmation} className='form-control form-control-sm' placeholder='Re-Type Password'/>
            </div>

            <button className='btn btn-success'>Update Plassword</button>
        </div>
    )
}
