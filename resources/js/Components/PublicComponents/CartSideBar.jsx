import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'

export default function CartSideBar({checkout = false}) {
    const { cartItems, cartTotal } = usePage().props

    const cart = Object.values(cartItems)

    // console.log('cart: ', cart)

    const handleAddToCart = (menuId) => {
        // alert(menuId)
        Inertia.post('/add_to_cart', { menuId: menuId }, {
            preserveScroll: true,
            preserveState: true
        })
    }

    const handleRemoveFromCart = (rowId, type) => {
        Inertia.post('/remove_from_cart', { rowId: rowId, type }, {
            preserveScroll: true,
            preserveState: true
        })
    }

    return (
        <>
            <div className="bg-white rounded mb-2">
                
                <div className="p-2 py-4  border-bottom">
                    <h5 className="mb-1 text-dark">
                        {checkout ? 'CHECKOUT' : 'CART'} 
                        <small> ( {cart.length} ITEMS {checkout && ' IN CART'} )</small></h5>
                    {/* <p className="text-dark"></p> */}
                </div>

                {cart.length ? <>

                    {cart.map((item, index) => {
                        return <div className="gold-members p-2 border-bottom">
                            {/* <p className="text-gray mb-0 float-left ml-2"></p> */}
                            <span className="count-number float-right">
                                <button onClick={() => handleRemoveFromCart(item.rowId, 'single')} className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                <input className="count-number-input" type="text" value={item.qty} readOnly />
                                <button onClick={() => handleAddToCart(item.id)} className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                            </span>
                            <div className="media">
                                <div className="mr-2"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                    <p className="mt-1 mb-0 text-black">{item.name} <small className="text-danger">( {item.qty} * ${item.price} = ${item.price * item.qty} )</small></p>
                                </div>
                            </div>
                        </div>

                    })}

                </> : <div className="p-2">
                  No items added to the cart
                </div>}

            </div>

            {cart.length ?
            <div className="mb-2 bg-white rounded p-2 clearfix">
                <p className="mb-1">Item Total <span className="float-right text-dark">${cartTotal}</span></p>
                <p className="mb-1">
                    Delivery Fee <span className="float-right text-dark">$12</span>
                </p>

                {/* <p className="mb-1 text-success">Total Discount
                    <span className="float-right text-success">$1884</span>
                </p> */}
                <hr />
                <h6 className="font-weight-bold mb-0">
                    TO PAY <span className="float-right">
                        ${cartTotal + 12.00}
                    </span>
                </h6>

                {!checkout && 
                <Link href={route('public.checkout')} className="btn btn-success btn-block mt-4">Checkout <i className="icofont-long-arrow-right" /></Link>}


            </div>
            : ''}
        </>
    )
}
