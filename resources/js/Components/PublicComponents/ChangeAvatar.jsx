import auth from '@/Hooks/auth'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-react'
import React from 'react'
import UserAvatar from '../UserAvatar'

export default function ChangeAvatar() {

    const { data, setData } = useForm({
        avatar: auth().avatar,
    })

    const handleChange = (file) => {
        //    alert('Image uploaded');

        Inertia.post('/update_avatar', { file: file }, { preserveScroll: true })
    }

    return (
        <div className="gold-members text-center">

            <UserAvatar width='170px' className="mb-3 rounded-pill shadow-sm" user={auth()} />
            <br />

            <label htmlFor="change">
                <a style={{ cursor: 'pointer' }} className='btn btn-success text-light'>Change Avatar</a>
            </label>
            <input onChange={e => handleChange(e.target.files[0])} id='change' type='file' className='d-none' />
        </div>
    )
}
