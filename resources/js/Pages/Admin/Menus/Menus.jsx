import HeaderContent from '@/Components/AdminComponents/HeaderContent';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import AdminLayout from '../../../Layouts/AdminLayout';
import { MdAdd } from 'react-icons/md'
import truncate from '@/Helpers/truncate';
import toolTip from '@/Helpers/toolTip';
import MenuFilter from '@/Components/AdminComponents/MenuFilter';
import DeleteItem from '@/Components/AdminComponents/DeleteItem';
export default function Menus({ menus, categories }) {

    console.log('Menus', menus)

    return (
        <AdminLayout header={<HeaderContent
            title={<h1>Menus</h1>}
            subtitle={<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item active">Menu list</li>
                </ol>
            </nav>
            }
            button={<Link href='/admin/create_menu' className="btn btn-link btn-soft-light">
                <MdAdd />
                Create Menu
            </Link>}
        />}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Menus</h5>

                            <div className="pt-3">
                                <p>Filter menus</p>
                                <MenuFilter categories={categories} />
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="fancy-table table-responsive rounded">
                                <table className="table table-bodered mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Menu</th>
                                            <th scope="col">Category, Tags</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Sale stats</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {menus.map((menu, index) =>

                                            <tr key={index}>
                                                <td>
                                                    <div className="text-center">
                                                        <img width='100px' className="rounded img-fluid" src={`/${menu.image}`} alt loading="lazy" />
                                                        <div className="caption">
                                                            <span className="text-xs font-bold">{menu.name}</span>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="text-xs">
                                                    <span className="text-xs badge rounded-pill bg-primary text-light">{menu?.category.name}</span>
                                                    {menu?.tags.map((tag, index) => <div key={index} >
                                                        <span className="ml-5 text-xs badge rounded-pi text-dark">
                                                            #{tag.name}</span>
                                                    </div>)}
                                                </td>

                                                <td className="text-xs">
                                                    <p className='text-xs' {...toolTip(menu.description)}>{truncate(menu.description, 20)}</p>
                                                </td>

                                                <td className="text-xs">${menu.price}</td>

                                                <td className="text-xs">
                                                    <div className="text-xs">
                                                        <span className="text-xs">orders - 0</span> <br />
                                                        <span className="text-xs">sales - $0</span> <br />
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="badge bg-soft-success p-2 text-success">{menu.status}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-evenly">

                                                        <Link href={route('admin.menu.edit', menu.id)} className="btn btn-soft-info btn-icon btn-sm rounded-pill ms-2" role="button">
                                                            <span className="btn-inner">
                                                                <svg className="icon-32" width={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor" />
                                                                    <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor" />
                                                                    <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </Link>

                                                        <DeleteItem routerLink={'menus.delete'} item={menu} />
                                                    </div>
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AdminLayout>
    )
}
