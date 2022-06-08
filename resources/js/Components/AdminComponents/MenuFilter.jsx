import queryStringObject from '@/Helpers/queryStringObject'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'

export default function MenuFilter({ categories }) {
    const page = usePage()

    const [queries, setQueries] = useState(queryStringObject(page.url))

    const handleChangeStatus = (e) => {
        setQueries({ ...queries, status: e.target.value })

        Inertia.get(route('admin.menu.all'), { ...queries, status: e.target.value }, { preserveScroll: true, preserveState: true })
    }

    const handleChangeOrderBy = (e) => {
        setQueries({ ...queries, orderBy: e.target.value })

        Inertia.get(route('admin.menu.all'), { ...queries, orderBy: e.target.value }, { preserveScroll: true, preserveState: true })

    }

    const handleChangeCategory = (e) => {
        setQueries({ ...queries, category: e.target.value })
        Inertia.get(route('admin.menu.all'), { ...queries, category: e.target.value }, { preserveScroll: true, preserveState: true })
    }

    const handleChangeSearch = (e) => {
        setQueries({ ...queries, q: e.target.value })
        Inertia.get(route('admin.menu.all'), { ...queries, q: e.target.value }, { preserveScroll: true, preserveState: true })
    }

    // useEffect(() => {
    //     setQueries({...queryStringObject(page.url)})
    // }, [page])

    return (
        <div className="row">
            <div className="col-sm-2">
                <div className="form-group">
                    <label>Status</label>
                    <select onChange={handleChangeStatus} value={queries?.status} className='form-control form-control-sm'>
                        <option value=''>Select Status</option>
                        <option value='published'>Published</option>
                        <option value='drafted'>Drafted</option>
                        <option value='trushed'>Trushed</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="form-group">
                    <label>Sort</label>
                    <select onChange={handleChangeOrderBy} value={queries?.orderBy} className='form-control form-control-sm'>
                        <option value=''>Select order</option>
                        <option value='id'>Menu id</option>
                        <option value='name'>Menu name</option>
                        <option value='price'>Menu price</option>
                        <option value='created_at'>Created date</option>
                        <option value='updated_at'>Updated date</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="form-group">
                    <label>Category</label>
                    <select onChange={handleChangeCategory} value={queries?.category} className='form-control form-control-sm'>
                        <option value=''>Select Category</option>
                        {categories.map((cat, index) =>
                            <option key={index} value={cat.id}>{cat.name}</option>)}

                    </select>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="form-group">
                    <label>Keywords</label>
                    <input onChange={handleChangeSearch} value={queries?.q} className="form-control form-control-sm" placeholder="Search by keywords..." />
                </div>
            </div>

        </div>
    )
}
