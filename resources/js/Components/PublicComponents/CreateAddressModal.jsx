import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react';

export default function CreateAddressModal() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: 'Home',
        phone: '',
        email: '',
        street: '',
        city: '',
        zip: '',
    });

    useEffect(() => {
        return () => {
            reset('name')
            reset('phone')
            reset('email')
            reset('street')
            reset('city')
            reset('zip')
        };
    }, []);


    const submit = (e) => {
        e.preventDefault();

        post(route('save.address'));

        reset('name')
        reset('phone')
        reset('email')
        reset('street')
        reset('city')
        reset('zip')
    };

    return (

        <div class="modal fade" id="createAddress" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create address</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

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

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button onClick={submit} type="button" class="btn btn-primary">Create address</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
