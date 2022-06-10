import toolTip from '@/Helpers/toolTip';
import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';
import ShippingAddressCard from './ShippingAddressCard';

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

                    <ShippingAddressCard title={false} address={address}/>

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
