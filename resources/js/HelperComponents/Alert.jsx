import { usePage } from '@inertiajs/inertia-react'
import React, { useState, useEffect } from 'react'

export default function Alert() {
    const { flash } = usePage().props

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }, [flash])


    useEffect(() => {
        // if(flash.success || flash.error || flash.warning || flash.info) {
            setShow(true)
        // }
    }, [flash])

    const flashType = flash.success ? 'bg-success text-light'
        : flash.error ? 'bg-danger text-light'
        : flash.info ? 'bg-info text-light'
        : flash.warning ? 'bg-warning text-dark'
        : ''

    return (
       <>
       {(flash.success || flash.error || flash.warning || flash.info) && 
        <div
            style={{
                position: 'fixed',
                zIndex: 999,
                bottom: '10px',
                right: '10px'
            }}
            class={`toast fade ${show ? 'show' : ''} ${flashType}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">

                <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <strong class="me-auto" style={{ marginLeft: '3px' }}>
                    {flash.success && 'Success'}
                    {flash.error && 'Error'}
                    {flash.info && 'Information'}
                    {flash.warning && 'Warning'}
                </strong>
                {/* <small class="text-muted">11 mins ago</small> */}
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>

            </div>
            <div class="toast-body">
                {flash.success && flash.success}
                {flash.error && flash.error}
                {flash.info && flash.info}
                {flash.warning && flash.warning}
            </div>
        </div>
       }
       </>

    )
}
