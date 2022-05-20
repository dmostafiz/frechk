import toolTip from '@/Helpers/toolTip'
import truncate from '@/Helpers/truncate'
import { Inertia } from '@inertiajs/inertia'
import { Link, useForm } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import EditTheTag from './EditTheTag'

export default function TagList({ tags }) {

    const handleDelete = (tagId) => {
        Inertia.post(route('tags.delete'), { tagId })
    }

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Tag list ({tags.length})</h4>
                </div>
            </div>
            <div className="card-body">

                <div className="table-responsive">
                    {tags.length ? <table className="table">
                        <thead className="text-left">
                            <tr>
                                <th>#</th>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Menus</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tags.map((tag, index) => <tr key={index}>
                                <td>
                                    <div>{index + 1}</div>
                                </td>
                                <td>
                                    <div>{tag.name}</div>
                                </td>
                                <td>
                                    <div {...toolTip(tag.description)}>
                                        {truncate(tag.description, 20, '...')}
                                    </div>
                                </td>
                                <td><div>0 menus</div></td>
                                <td>
                                    <div className="d-flex justify-content-evenly">

                                        <EditTheTag tag={tag} />

                                        <button onClick={() => handleDelete(tag.id)} {...toolTip('Delete the tag')} className="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#" role="button">
                                            <span className="btn-inner">
                                                <svg className="icon-32" width={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor" />
                                                    <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </td>
                            </tr>)}


                        </tbody>
                    </table>
                        : <div>
                            No data found!

                        </div>}

                </div>
            </div>
        </div>
    )
}
