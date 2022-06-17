import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function FoodDetailsModal({menu}) {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <button onClick={handleShow} className="btn badge badge-info" >Details</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{menu.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <h6>{menu.title}</h6>
                        <p>{menu.description}</p>
                    </div>
                 
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} type="button" class="btn btn-secondary">Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
