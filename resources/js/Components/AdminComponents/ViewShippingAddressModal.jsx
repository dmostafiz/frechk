import toolTip from '@/Helpers/toolTip';
import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';

export default function ViewShippingAddressModal({ address }) {

    console.log('Shipping Addr: ', address);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <button onClick={handleShow} {...toolTip('View shipping address')} className="btn btn-outline-success btn-icon btn-sm rounded-pill ms-2">
                view address
            </button>

            <Modal key={address?.id} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shipping Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="card-body">
                        <div className="mb-1">
                            Street Address: <a href="#" className="ms-1">{address?.street_address}</a>
                        </div>
                        <div className="mb-1">
                            City: <a href="#" className="ms-1">{address?.city}</a>
                        </div>
                        <div className="mb-1">
                            Zip Code: <a href="#" className="ms-1">{address?.zip_code}</a>
                        </div>

                        <div className="mb-1">
                            Email: <a href="#" className="ms-1">{address?.email}</a>
                        </div>

                        <div className="mb-1">
                            Phone Number: <a href="#" className="ms-1">{address?.phone}</a>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
