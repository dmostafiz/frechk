import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import PublicLayout from '../Layouts/PublicLayout';

export default function Menus({ menus }) {

    const addToCart = (menuId) => {
        Inertia.post(route('add.cart'), { menuId }, {
            preserveScroll: true, preserveState: true
        })
    }

    return (
        <PublicLayout>
            {/* <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
                <h1 className="text-white">Offers for you</h1>
                <h6 className="text-white-50">Explore top deals and offers exclusively for you!</h6>
            </section> */}
            <section className="section pt-4 pb-5">

                <div className="container">
                    <div className="row">
                        <h5 className="mb-4 mt-3 col-md-12">Frech Menus</h5>
                        {menus.length ? menus.map((item, index) => {
                            return <div key={index} className="col-md-4 col-sm-6 mb-4">
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image" style={{
                                        backgroundImage: `url(${`/${item.image}`} )`,
                                        backgroundSize: 'cover',
                                        backdropFilter: 'blur(20px)',
                                        width: '100%',
                                        height: '250px'
                                    }}>
                                        <div className="star position-absolute">
                                            <span className="badge badge-success">
                                                <i className="icofont-star" /> 3.1 (300+)
                                            </span>
                                        </div>
                                        <div className="favourite-heart text-danger position-absolute">
                                            <a href="#"><i className="icofont-heart" /></a>
                                        </div>
                                        <div className="member-plan position-absolute">
                                            <span className="badge badge-dark">{item.category.name}</span>
                                        </div>
                                        {/* <a href="#">
                                            <img src={`/${menu.image}`} className="img-fluid item-img" />
                                        </a> */}
                                    </div>
                                    <div className="p-3 position-relative">
                                        <div className="list-card-body">
                                            <h6 className="mb-1"><Link href={`/menu/${item.slug}`} className="text-black">{item.name}</Link></h6>
                                            <p className="list-card-badge mb-2 text-xl">
                                                {item.title}
                                            </p>
                                            <p className="text-gray mb-2">
                                                {item?.tags.map((tag, index) => <span key={index}><Link href={`/tag/${tag.slug}`}><a className='text-dark'>{tag.name}</a></Link>{(item.tags.length > index + 1) && ' • '}</span>)}
                                            </p>
                                            <p className="text-gray time mb-0">
                                                <span className="btn pl-0">${item.price}</span>
                                                <span className="float-right">
                                                    <button onClick={() => addToCart(item.id)} className="btn btn-outline-secondary btn-sm">ADD TO CART</button>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }) : <div className='col-md-12'>
                            <p style={{ fontSize: '30px' }}>No menus added!</p>
                        </div>}


                    </div>
                </div>

            </section>
            <section className="section pt-5 pb-5 text-center bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h5 className="m-0">Operate food store or restaurants? <a href="login.html">Work With Us</a></h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 col-sm-12">
                            <h6 className="mb-3">Subscribe to our Newsletter</h6>
                            <form className="newsletter-form mb-1">
                                <div className="input-group">
                                    <input type="text" placeholder="Please enter your email" className="form-control" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-primary">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p><a className="text-info" href="register.html">Register now</a> to get updates on <a href="offers.html">Offers and Coupons</a></p>
                            <div className="app">
                                <p className="mb-2">DOWNLOAD APP</p>
                                <a href="#">
                                    <img className="img-fluid" src="/osahan/img/google.png" />
                                </a>
                                <a href="#">
                                    <img className="img-fluid" src="/osahan/img/apple.png" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-6 mobile-none" />
                        <div className="col-md-2 col-4 col-sm-4">
                            <h6 className="mb-3">About OE</h6>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Culture</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                            <h6 className="mb-3">For Foodies</h6>
                            <ul>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Blogger Help</a></li>
                                <li><a href="#">Verified Users</a></li>
                                <li><a href="#">Code of Conduct</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-4 col-sm-4">
                            <h6 className="mb-3">For Restaurants</h6>
                            <ul>
                                <li><a href="#">Advertise</a></li>
                                <li><a href="#">Add a Restaurant</a></li>
                                <li><a href="#">Claim your Listing</a></li>
                                <li><a href="#">For Businesses</a></li>
                                <li><a href="#">Owner Guidelines</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom-search pt-5 pb-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="text-black">POPULAR COUNTRIES</p>
                            <div className="search-links">
                                <a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a> | <a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a><a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a> | <a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a>
                            </div>
                            <p className="mt-4 text-black">POPULAR FOOD</p>
                            <div className="search-links">
                                <a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a> | <a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a><a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a> | <a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </PublicLayout>
    )
}
