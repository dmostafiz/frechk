import { Inertia } from '@inertiajs/inertia'
import { useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function ChangePassword() {

    const {errors} = usePage().props

    const { data, setData } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    const handleSubmit = () => {
        
        Inertia.post(route('update.password'), { ...data }, { preserveScroll: true })
      
        setData({
            current_password: '',
            password: '',
            password_confirmation: '',
        })
  
    }

    return (
        <div className="gold-members p-3">
            <div className="form-group">
                <label>Current Password</label>
                {errors.current_password && <p className="text-danger">{errors.current_password}</p>}
                <input type='password' onChange={e => setData({ ...data, current_password: e.target.value })} value={data.current_password} className='form-control form-control-sm' placeholder='Enter current password' />
            </div>

            <div className="form-group">
                <label>New Password</label>
                {errors.password && <p className="text-danger">{errors.password}</p>}
                <input type='password' onChange={e => setData({ ...data, password: e.target.value })} value={data.password} className='form-control form-control-sm' placeholder='New password' />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation}</p>}
                <input type='password' onChange={e => setData({ ...data, password_confirmation: e.target.value })} value={data.password_confirmation} className='form-control form-control-sm' placeholder='Re-Type Password' />
            </div>

            <button onClick={handleSubmit} className='btn btn-success'>Update Password</button>
        </div>
    )
}
