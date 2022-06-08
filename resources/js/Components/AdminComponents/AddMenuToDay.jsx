import { useForm, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react';

export default function AddMenuToDay({ pkg, day, menus }) {
    const { errors } = usePage().props

    const { data, setData, post, processing, reset } = useForm({
        dayId: day.id,
        packageId: pkg.id,
        menuIds: []
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMenuCheck = (menuId) => {
        // const menus = [];

        const exists = data.menuIds.includes(menuId)
        // setData({})
        if(exists){

            setData({...data, menuIds: data.menuIds.filter(mnu => mnu != menuId)})

        }else{

            setData({...data, menuIds: [...data.menuIds, menuId]})
        }

    }

    // useEffect(() => {
    //     console.log('Menu IDS: ', data.menuIds)
    // }, [data.menuIds])

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('menu.package.day.update'))

        setShow(false)
    }


    return (
        <>
            <button onClick={handleShow} type="button" className="btn btn-sm btn-primary">
                Sync
            </button>
            {/* Modal */}
            <Modal key={day.id} show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Menu ({day.day})</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {menus.map((menu, index) => {
                        return <div key={index} className='form-group'>
                            <input onChange={() => handleMenuCheck(menu.id)} id={`menu-${menu.id}`} type='checkbox' className='form-checkbox mr-2'/>
                            <label htmlFor={`menu-${menu.id}`}>{menu.name} ( ${menu.price} )</label>
                        </div>
                    })}

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
