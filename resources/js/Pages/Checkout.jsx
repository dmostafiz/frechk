import React from 'react'
import PublicLayout from './../Layouts/PublicLayout';

export default function Checkout() {
    return (
        <PublicLayout>
            <section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="offer-dedicated-body-left">
                                <div className="bg-white rounded shadow-sm p-4 mb-4">
                                    <h6 className="mb-3">You may also like</h6>
                                    <div className="owl-carousel owl-theme owl-carousel-five offers-interested-carousel">
                                        <div className="item">
                                            <div className="mall-category-item position-relative">
                                                <a className="btn btn-primary btn-sm position-absolute" href="#">ADD</a>
                                                <img className="img-fluid" src="/osahan/img/list/1.png" />
                                                <h6>Burgers</h6>
                                                <small>$500</small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="mall-category-item position-relative">
                                                <a className="btn btn-primary btn-sm position-absolute" href="#">ADD</a>
                                                <img className="img-fluid" src="/osahan/img/list/2.png" />
                                                <h6>Sandwiches</h6>
                                                <small>$260</small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="mall-category-item position-relative">
                                                <a className="btn btn-primary btn-sm position-absolute" href="#">ADD</a>
                                                <img className="img-fluid" src="/osahan/img/list/3.png" />
                                                <h6>Soups</h6>
                                                <small>$860</small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="mall-category-item position-relative">
                                                <a className="btn btn-primary btn-sm position-absolute" href="#">ADD</a>
                                                <img className="img-fluid" src="/osahan/img/list/4.png" />
                                                <h6>Pizzas</h6>
                                                <small>$602</small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="mall-category-item position-relative">
                                                <a className="btn btn-primary btn-sm position-absolute" href="#">ADD</a>
                                                <img className="img-fluid" src="/osahan/img/list/5.png" />
                                                <h6>Pastas</h6>
                                                <small>$360</small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="mall-category-item position-relative">
                                                <a className="btn btn-primary btn-sm position-absolute" href="#">ADD</a>
                                                <img className="img-fluid" src="/osahan/img/list/6.png" />
                                                <h6>Chinese</h6>
                                                <small>$760</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2" />
                                <div className="bg-white rounded shadow-sm p-4 mb-4">
                                    <h4 className="mb-1">Choose a delivery address</h4>
                                    <h6 className="mb-3 text-black-50">Multiple addresses in this location</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="bg-white card addresses-item mb-4 border border-success">
                                                <div className="gold-members p-4">
                                                    <div className="media">
                                                        <div className="mr-3"><i className="icofont-ui-home icofont-3x" /></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1 text-black">Home</h6>
                                                            <p className="text-black">291/d/1, 291, Jawaddi Kalan, Ludhiana, Punjab 141002, India</p>
                                                            <p className="mb-0 text-black font-weight-bold"><a className="btn btn-sm btn-success mr-2" href="#"> DELIVER HERE</a>
                                                                <span>30MIN</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white card addresses-item mb-4">
                                                <div className="gold-members p-4">
                                                    <div className="media">
                                                        <div className="mr-3"><i className="icofont-briefcase icofont-3x" /></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1 text-secondary">Work</h6>
                                                            <p>NCC, Model Town Rd Town, Ludhiana, Punjab 141002, India</p>
                                                            <p className="mb-0 text-black font-weight-bold"><a className="btn btn-sm btn-secondary mr-2" href="#"> DELIVER HERE</a>
                                                                <span>40MIN</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="bg-white card addresses-item">
                                                <div className="gold-members p-4">
                                                    <div className="media">
                                                        <div className="mr-3"><i className="icofont-location-pin icofont-3x" /></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1 text-secondary">Other</h6>
                                                            <p>Delhi Bypass Rd, Jawaddi Taksal, Ludhiana, Punjab 141002, India</p>
                                                            <p className="mb-0 text-black font-weight-bold"><a className="btn btn-sm btn-secondary mr-2" href="#"> DELIVER HERE</a>
                                                                <span>45MIN</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-white card addresses-item">
                                                <div className="gold-members p-4">
                                                    <div className="media">
                                                        <div className="mr-3"><i className="icofont-location-pin icofont-3x" /></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1 text-secondary">Other</h6>
                                                            <p>Pritm Nagar, Model Town, Ludhiana, Punjab 141002, India</p>
                                                            <p className="mb-0 text-black font-weight-bold"><a data-toggle="modal" data-target="#add-address-modal" className="btn btn-sm btn-primary mr-2" href="#"> ADD NEW ADDRESS</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2" />
                                <div className="bg-white rounded shadow-sm p-4 osahan-payment">
                                    <h4 className="mb-1">Choose payment method</h4>
                                    <h6 className="mb-3 text-black-50">Credit/Debit Cards</h6>
                                    <div className="row">
                                        <div className="col-sm-4 pr-0">
                                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="icofont-credit-card" /> Credit/Debit Cards</a>
                                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="icofont-id-card" /> Food Cards</a>
                                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="icofont-card" /> Credit</a>
                                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="icofont-bank-alt" /> Netbanking</a>
                                                <a className="nav-link" id="v-pills-cash-tab" data-toggle="pill" href="#v-pills-cash" role="tab" aria-controls="v-pills-cash" aria-selected="false"><i className="icofont-money" /> Pay on Delivery</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-8 pl-0">
                                            <div className="tab-content h-100" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
                                                    <p>WE ACCEPT <span className="osahan-card">
                                                        <i className="icofont-visa-alt" /> <i className="icofont-mastercard-alt" /> <i className="icofont-american-express-alt" /> <i className="icofont-payoneer-alt" /> <i className="icofont-apple-pay-alt" /> <i className="icofont-bank-transfer-alt" /> <i className="icofont-discover-alt" /> <i className="icofont-jcb-alt" />
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
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-cash" role="tabpanel" aria-labelledby="v-pills-cash-tab">
                                                    <h6 className="mb-3 mt-0 mb-3">Cash</h6>
                                                    <p>Please keep exact change handy to help us serve you better</p>
                                                    <hr />
                                                    <form>
                                                        <a href="thanks.html" className="btn btn-success btn-block btn-lg">PAY $1329
                                                            <i className="icofont-long-arrow-right" /></a>
                                                    </form></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                                <div className="d-flex mb-4 osahan-cart-item-profile">
                                    <img className="img-fluid mr-3 rounded-pill" alt="osahan" src="/osahan/img/2.jpg" />
                                    <div className="d-flex flex-column">
                                        <h6 className="mb-1 text-white">Spice Hut Indian Restaurant</h6>
                                        <p className="mb-0 text-white"><i className="icofont-location-pin" /> 2036 2ND AVE, NEW YORK, NY 10029</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded shadow-sm mb-2">
                                    <div className="gold-members p-2 border-bottom">
                                        <p className="text-gray mb-0 float-right ml-2">$314</p>
                                        <span className="count-number float-right">
                                            <button className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                            <input className="count-number-input" type="text" defaultValue={1} readOnly />
                                            <button className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-2"><i className="icofont-ui-press text-danger food-item" /></div>
                                            <div className="media-body">
                                                <p className="mt-1 mb-0 text-black">Chicken Tikka Sub</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gold-members p-2 border-bottom">
                                        <p className="text-gray mb-0 float-right ml-2">$260</p>
                                        <span className="count-number float-right">
                                            <button className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                            <input className="count-number-input" type="text" defaultValue={1} readOnly />
                                            <button className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-2"><i className="icofont-ui-press text-success food-item" /></div>
                                            <div className="media-body">
                                                <p className="mt-1 mb-0 text-black">Cheese corn Roll</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gold-members p-2 border-bottom">
                                        <p className="text-gray mb-0 float-right ml-2">$260</p>
                                        <span className="count-number float-right">
                                            <button className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                            <input className="count-number-input" type="text" defaultValue={1} readOnly />
                                            <button className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-2"><i className="icofont-ui-press text-success food-item" /></div>
                                            <div className="media-body">
                                                <p className="mt-1 mb-0 text-black">Cheese corn Roll</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gold-members p-2 border-bottom">
                                        <p className="text-gray mb-0 float-right ml-2">$056</p>
                                        <span className="count-number float-right">
                                            <button className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                            <input className="count-number-input" type="text" defaultValue={1} readOnly />
                                            <button className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-2"><i className="icofont-ui-press text-success food-item" /></div>
                                            <div className="media-body">
                                                <p className="mt-1 mb-0 text-black">Coke [330 ml]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gold-members p-2 border-bottom">
                                        <p className="text-gray mb-0 float-right ml-2">$652</p>
                                        <span className="count-number float-right">
                                            <button className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                            <input className="count-number-input" type="text" defaultValue={1} readOnly />
                                            <button className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-2"><i className="icofont-ui-press text-danger food-item" /></div>
                                            <div className="media-body">
                                                <p className="mt-1 mb-0 text-black">Black Dal Makhani</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gold-members p-2">
                                        <p className="text-gray mb-0 float-right ml-2">$122</p>
                                        <span className="count-number float-right">
                                            <button className="btn btn-outline-secondary  btn-sm left dec"> <i className="icofont-minus" /> </button>
                                            <input className="count-number-input" type="text" defaultValue={1} readOnly />
                                            <button className="btn btn-outline-secondary btn-sm right inc"> <i className="icofont-plus" /> </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-2"><i className="icofont-ui-press text-danger food-item" /></div>
                                            <div className="media-body">
                                                <p className="mt-1 mb-0 text-black">Mixed Veg</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 bg-white rounded p-2 clearfix">
                                    <div className="input-group input-group-sm mb-2">
                                        <input type="text" className="form-control" placeholder="Enter promo code" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button" id="button-addon2"><i className="icofont-sale-discount" /> APPLY</button>
                                        </div>
                                    </div>
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="icofont-comment" /></span>
                                        </div>
                                        <textarea className="form-control" placeholder="Any suggestions? We will pass it on..." aria-label="With textarea" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="mb-2 bg-white rounded p-2 clearfix">
                                    <p className="mb-1">Item Total <span className="float-right text-dark">$3140</span></p>
                                    <p className="mb-1">Restaurant Charges <span className="float-right text-dark">$62.8</span></p>
                                    <p className="mb-1">Delivery Fee <span className="text-info" data-toggle="tooltip" data-placement="top" title="Total discount breakup">
                                        <i className="icofont-info-circle" />
                                    </span> <span className="float-right text-dark">$10</span>
                                    </p>
                                    <p className="mb-1 text-success">Total Discount
                                        <span className="float-right text-success">$1884</span>
                                    </p>
                                    <hr />
                                    <h6 className="font-weight-bold mb-0">TO PAY <span className="float-right">$1329</span></h6>
                                </div>
                                <a href="thanks.html" className="btn btn-success btn-block btn-lg">PAY $1329
                                    <i className="icofont-long-arrow-right" /></a>
                            </div>
                            <div className="pt-2" />
                            <div className="alert alert-success" role="alert">
                                You have saved <strong>$1,884</strong> on the bill
                            </div>
                            <div className="pt-2" />
                            <div className="text-center pt-2">
                                <img className="img-fluid" src="https://dummyimage.com/352x504/ccc/ffffff.png&text=Google+ads" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </PublicLayout>
    )
}
