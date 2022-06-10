import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function CreateAddressModal() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: 'Home',
        phone: '',
        email: '',
        street: '',
        city: '',
        zip: '',
    });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const submit = (e) => {
        e.preventDefault();

        post(route('save.address'));

        setData({
            name: 'Home',
            phone: '',
            email: '',
            street: '',
            city: '',
            zip: '',
        });

        setShow(false)
    };

    return (
        <>

            <button onClick={handleShow} className="btn btn-sm btn-info mr-2">
                ADD NEW ADDRESS
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Default Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label htmlFor="inputState">Address to</label>
                            <select
                                onChange={e => setData({ ...data, name: e.target.value })}
                                value={data.name}
                                id="inputState" className="form-control">
                                <option value="Home">Home</option>
                                <option value='Work'>Work</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                onChange={e => setData({ ...data, phone: e.target.value })}
                                value={data.phone}
                                type="text" className="form-control" placeholder='Enter your phone number' id="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={e => setData({ ...data, email: e.target.value })}
                                value={data.email}
                                type="email" className="form-control" id="email" placeholder='Enter your email address' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="street">Street Address</label>
                            <input
                                onChange={e => setData({ ...data, street: e.target.value })}
                                value={data.street}
                                type="text" className="form-control" placeholder='Enter street address' id="street" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                onChange={e => setData({ ...data, city: e.target.value })}
                                value={data.city}
                                type="text" className="form-control" placeholder='Enter your city name' id="city" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="zip">Zip Code</label>
                            <input
                                onChange={e => setData({ ...data, zip: e.target.value })}
                                value={data.zip}
                                type="text" className="form-control" placeholder='Enter zip code' id="zip" />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} type="button" class="btn btn-secondary">Cancel</button>
                    <button onClick={submit} type="button" class="btn btn-primary">Create address</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
