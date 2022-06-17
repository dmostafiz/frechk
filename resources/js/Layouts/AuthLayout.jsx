import React from 'react'

export default function AuthLayout({ children }) {
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            
                                {children}
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
