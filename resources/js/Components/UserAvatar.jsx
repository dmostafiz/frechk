import React, { useEffect, useState } from 'react'

export default function UserAvatar({ className='', user, width='' }) {

    const [img, setImage] = useState(null)

    useEffect(() => {

        const userImage = user?.avatar ? `/${user?.avatar}` : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
        setImage(userImage)

    }, [user])

    return (
        <img width={width} className={className} src={img} alt={user?.first_name+' '+user?.last_name}/>
    )
}
