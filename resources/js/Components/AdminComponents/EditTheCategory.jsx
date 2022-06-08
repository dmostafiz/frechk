import toolTip from '@/Helpers/toolTip';
import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';

export default function EditTheCategory({ category }) {
    const { errors } = usePage().props

    const { data, setData, post, processing, reset } = useForm({
        id: null,
        name: '',
        description: '',
    });

    useEffect(() => {
        setData({
            id: category.id,
            name: category.name,
            description: category.description,
            image: null
        });
    }, [category])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('categories.update'))

        setShow(false)
    }

    return (
        <>
            <button onClick={handleShow} {...toolTip('Edit the tag')} className="btn btn-success btn-icon btn-sm rounded-pill ms-2">
                <span className="btn-inner">
                    <svg className="icon-32" width={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor" />
                        <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor" />
                        <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor" />
                    </svg>
                </span>
            </button>

            <Modal key={category.id} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="form-group">
                        <label className="form-label" htmlFor="menuName">Category Name</label>

                        <input onChange={e => setData({ ...data, name: e.target.value })} value={data.name} type="text" className="form-control" placeholder="Enter category name" id="menuName" />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="menuDescription">Category Description</label>
                        <textarea onChange={e => setData({ ...data, description: e.target.value })} value={data.description} type="text" className="form-control" placeholder="Enter category description" id="menuDescription"></textarea>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Existing Image</label> <br />
                        <img width='200px' className="img-fluid" src={`/${category.image}`}  alt={category.name} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Change featured image</label>
                        <input onChange={e => setData({ ...data, image: e.target.files[0] })} className="form-control" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                    </div>

                </Modal.Body>
                
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={handleSubmit} className="btn btn-primary">
                        Save Changes
                    </button>
                </Modal.Footer>

            </Modal>
        </>
    )
}
