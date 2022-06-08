import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function SubscribePayments({pkg}) {
    const { cartItems, cartTotal } = usePage().props

    function submitOrder(e, paymentMethod) {
        e.preventDefault();

        Inertia.post(route('subscribe.now', { 
            paymentMethod: paymentMethod,
            packageId: pkg.id 
        }))
    }

    return (
        <div className="bg-white rounded shadow-sm p-4 osahan-payment">
            <h4 className="mb-1">Choose payment method</h4>
            {/* <h6 className="mb-3 text-black-50">Cash every month</h6> */}
            <div className="row">
                <div className="col-sm-4 pr-0">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="icofont-credit-card" /> Credit/Debit Cards</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="icofont-id-card" /> Food Cards</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="icofont-card" /> Credit</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="icofont-bank-alt" /> Netbanking</a> */}
                        <a className="nav-link active" id="v-pills-cash-tab" data-toggle="pill" href="#v-pills-cash" role="tab" aria-controls="v-pills-cash" aria-selected="false">
                            <i className="icofont-money" /> Cash every month
                        </a>
                    </div>
                </div>
                <div className="col-sm-8 pl-0">
                    <div className="tab-content h-100" id="v-pills-tabContent">
                        {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h6 className="mb-3 mt-0">Add new card</h6>
                            <p>WE ACCEPT 
                                <span className="osahan-card">
                                <i className="icofont-visa-alt" /> 
                                <i className="icofont-mastercard-alt" /> 
                                <i className="icofont-american-express-alt" /> 
                                <i className="icofont-payoneer-alt" /> 
                                <i className="icofont-apple-pay-alt" /> 
                                <i className="icofont-bank-transfer-alt" /> 
                                <i className="icofont-discover-alt" /> 
                                <i className="icofont-jcb-alt" />
                            </span>
                            </p>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputPassword4">Card number</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" placeholder="Card number" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="icofont-card" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <label>Valid through(MM/YY)
                                        </label>
                                        <input type="number" className="form-control" placeholder="Enter Valid through(MM/YY)" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>CVV
                                        </label>
                                        <input type="number" className="form-control" placeholder="Enter CVV Number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Name on card
                                        </label>
                                        <input type="text" className="form-control" placeholder="Enter Card number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Securely save this card for a faster checkout next time.</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12 mb-0">
                                        <a href="thanks.html" className="btn btn-success btn-block btn-lg">PAY $1329
                                            <i className="icofont-long-arrow-right" /></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h6 className="mb-3 mt-0 mb-3">Add new food card</h6>
                            <p>WE ACCEPT <span className="osahan-card">
                                <i className="icofont-sage-alt" /> <i className="icofont-stripe-alt" /> <i className="icofont-google-wallet-alt-1" />
                            </span>
                            </p>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputPassword4">Card number</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" placeholder="Card number" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="icofont-card" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-8">
                                        <label>Valid through(MM/YY)
                                        </label>
                                        <input type="number" className="form-control" placeholder="Enter Valid through(MM/YY)" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>CVV
                                        </label>
                                        <input type="number" className="form-control" placeholder="Enter CVV Number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Name on card
                                        </label>
                                        <input type="text" className="form-control" placeholder="Enter Card number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Securely save this card for a faster checkout next time.</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12 mb-0">
                                        <a href="thanks.html" className="btn btn-success btn-block btn-lg">PAY $1329
                                            <i className="icofont-long-arrow-right" /></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <div className="border shadow-sm-sm p-4 d-flex align-items-center bg-white mb-3">
                                <i className="icofont-apple-pay-alt mr-3 icofont-3x" />
                                <div className="d-flex flex-column">
                                    <h5 className="card-title">Apple Pay</h5>
                                    <p className="card-text">Apple Pay lets you order now &amp; pay later at no extra cost.</p>
                                    <a href="#" className="card-link font-weight-bold">LINK ACCOUNT <i className="icofont-link-alt" /></a>
                                </div>
                            </div>
                            <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center mb-3">
                                <i className="icofont-paypal-alt mr-3 icofont-3x" />
                                <div className="d-flex flex-column">
                                    <h5 className="card-title">Paypal</h5>
                                    <p className="card-text">Paypal lets you order now &amp; pay later at no extra cost.</p>
                                    <a href="#" className="card-link font-weight-bold">LINK ACCOUNT <i className="icofont-link-alt" /></a>
                                </div>
                            </div>
                            <div className="border shadow-sm-sm p-4 d-flex bg-white align-items-center">
                                <i className="icofont-diners-club mr-3 icofont-3x" />
                                <div className="d-flex flex-column">
                                    <h5 className="card-title">Diners Club</h5>
                                    <p className="card-text">Diners Club lets you order now &amp; pay later at no extra cost.</p>
                                    <a href="#" className="card-link font-weight-bold">LINK ACCOUNT <i className="icofont-link-alt" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <h6 className="mb-3 mt-0 mb-3">Netbanking</h6>
                            <form>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-outline-primary active">
                                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> HDFC <i className="icofont-check-circled" />
                                    </label>
                                    <label className="btn btn-outline-primary">
                                        <input type="radio" name="options" id="option2" autoComplete="off" /> ICICI <i className="icofont-check-circled" />
                                    </label>
                                    <label className="btn btn-outline-primary">
                                        <input type="radio" name="options" id="option3" autoComplete="off" /> AXIS <i className="icofont-check-circled" />
                                    </label>
                                </div>
                                <hr />
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Select Bank
                                        </label>
                                        <br />
                                        <select className="custom-select form-control">
                                            <option selected>Bank</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-12 mb-0">
                                        <a href="thanks.html" className="btn btn-success btn-block btn-lg">PAY $1329
                                            <i className="icofont-long-arrow-right" /></a>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                        <div className="tab-pane fade show active" id="v-pills-cash" role="tabpanel" aria-labelledby="v-pills-cash-tab">
                            <h6 className="mb-3 mt-0">Cash</h6>
                            <p>Please keep exact change handy to help us serve you better</p>
                            <hr />
                            <button onClick={e => submitOrder(e, 'cash_on_delivery')} className="btn btn-success btn-block btn-lg">
                                Subscribe Now <i className="icofont-long-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
