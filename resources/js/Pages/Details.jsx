import CartSideBar from '@/Components/PublicComponents/CartSideBar'
import PublicLayout from '@/Layouts/PublicLayout'
import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'

export default function Details({ menu }) {

  const [qty, setQty] = useState(1)

  const handleChangeQty = (event) => {
    if (event == 'add') {
      if (qty < 20) {
        setQty(qty + 1)
      }

    }

    if (event == 'sub') {
      if (qty > 1) {
        setQty(qty - 1)
      }
    }
  }

  const handleAddToCart = () => {
     Inertia.post('/add_to_cart', {menuId: menu.id, qty}, {
       preserveScroll: true, 
       preserveState: true
     })
     setQty(1)
  }

  return (
    <PublicLayout>

      <section className="offer-dedicated-nav border-top-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="restaurant-detailed-action-btn float-left">
                <button className="btn btn-light btn-sm border-light-btn" type="button"><i className="icofont-heart text-danger" /> Mark as Favourite</button>
                <button className="btn btn-light btn-sm border-light-btn" type="button"><i className="icofont-cauli-flower text-success" /> Pure Veg</button>
                <button className="btn btn-outline-danger btn-sm" type="button"><i className="icofont-sale-discount" /> OFFERS</button>
              </span>

            </div>
          </div>
        </div>
      </section>

      <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="offer-dedicated-body-left">
                <div className="tab-content" id="pills-tabContent">

                  <div id="gallery" className="bg-white rounded shadow-sm p-4 mb-4">
                    <div>

                      <h5>{menu.title}</h5>
                      <p>{menu.description}</p>

                      <div className="restaurant-detailed-header-right pb-3">
                        {/* <button className="btn btn-success" type="button"> */}
                        {/* ${menu.price} */}
                        {/* </button> */}
                        <h6 className="text-dark mb-0 restaurant-detailed-ratings"><span className="generator-bg rounded text-dark"><i className="icofont-star" /> 3.1</span> 23
                          Ratings <i className="ml-3 icofont-speech-comments" /> 91 reviews</h6>
                      </div>
                    </div>
                    <div className="restaurant-slider-main position-relative homepage-great-deals-carousel">
                      <div className="owl-carousel owl-theme homepage-ad">
                        {menu.images.map((img, index) => <div key={index} className="item">
                          <div style={{
                            width: '100%',
                            height: '500px',
                            backgroundImage: `url(/${img})`,
                            backgroundSize: 'cover',
                          }}></div>
                        </div>)}
                      </div>
                    </div>
                  </div>


                  <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                    <a href="#" className="btn btn-outline-primary btn-sm float-right">Top Rated</a>
                    <h5 className="mb-1">All Ratings and Reviews</h5>
                    <div className="reviews-members pt-4 pb-4">
                      <div className="media">
                        <a href="#"><img alt="Generic placeholder image" src="/osahan/img/user/1.png" className="mr-3 rounded-pill" /></a>
                        <div className="media-body">
                          <div className="reviews-members-header">
                            <span className="star-rating float-right">
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating" /></a>
                            </span>
                            <h6 className="mb-1"><a className="text-black" href="#">Singh Osahan</a>
                            </h6>
                            <p className="text-gray">Tue, 20 Mar 2020</p>
                          </div>
                          <div className="reviews-members-body">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random
                              text. It has roots in a piece of classical Latin literature from
                              45 BC, making it over 2000 years old. Richard McClintock, a
                              Latin professor at Hampden-Sydney College in Virginia, looked up
                              one of the more obscure Latin words, consectetur, from a Lorem
                              Ipsum passage, and going through the cites of the word in
                              classical literature, discovered the undoubtable source. Lorem
                              Ipsum comes from sections </p>
                          </div>
                          <div className="reviews-members-footer">
                            <a className="total-like" href="#"><i className="icofont-thumbs-up" />
                              856M</a> <a className="total-like" href="#"><i className="icofont-thumbs-down" /> 158K</a>
                            <span className="total-like-user-main ml-2" dir="rtl">
                              <a data-toggle="tooltip" data-placement="top" title="Gurdeep Osahan" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/5.png" className="total-like-user rounded-pill" /></a>
                              <a data-toggle="tooltip" data-placement="top" title="Gurdeep Singh" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/2.png" className="total-like-user rounded-pill" /></a>
                              <a data-toggle="tooltip" data-placement="top" title="Askbootstrap" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/3.png" className="total-like-user rounded-pill" /></a>
                              <a data-toggle="tooltip" data-placement="top" title="Osahan" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/4.png" className="total-like-user rounded-pill" /></a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="reviews-members pt-4 pb-4">
                      <div className="media">
                        <a href="#"><img alt="Generic placeholder image" src="/osahan/img/user/6.png" className="mr-3 rounded-pill" /></a>
                        <div className="media-body">
                          <div className="reviews-members-header">
                            <span className="star-rating float-right">
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating active" /></a>
                              <a href="#"><i className="icofont-ui-rating" /></a>
                            </span>
                            <h6 className="mb-1"><a className="text-black" href="#">Gurdeep Singh</a>
                            </h6>
                            <p className="text-gray">Tue, 20 Mar 2020</p>
                          </div>
                          <div className="reviews-members-body">
                            <p>It is a long established fact that a reader will be distracted by
                              the readable content of a page when looking at its layout. The
                              point of using Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using 'Content here,
                              content here', making it look like readable English.</p>
                          </div>
                          <div className="reviews-members-footer">
                            <a className="total-like" href="#"><i className="icofont-thumbs-up" />
                              88K</a> <a className="total-like" href="#"><i className="icofont-thumbs-down" /> 1K</a>
                            <span className="total-like-user-main ml-2" dir="rtl">
                              <a data-toggle="tooltip" data-placement="top" title="Gurdeep Osahan" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/5.png" className="total-like-user rounded-pill" /></a>
                              <a data-toggle="tooltip" data-placement="top" title="Gurdeep Singh" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/2.png" className="total-like-user rounded-pill" /></a>
                              <a data-toggle="tooltip" data-placement="top" title="Askbootstrap" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/3.png" className="total-like-user rounded-pill" /></a>
                              <a data-toggle="tooltip" data-placement="top" title="Osahan" href="#"><img alt="Generic placeholder image" src="/osahan/img/user/4.png" className="total-like-user rounded-pill" /></a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <a className="text-center w-100 d-block mt-4 font-weight-bold" href="#">See All
                      Reviews</a>
                  </div>
                  <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
                    <h5 className="mb-4">Leave Comment</h5>
                    <p className="mb-2">Rate the Place</p>
                    <div className="mb-4">
                      <span className="star-rating">
                        <a href="#"><i className="icofont-ui-rating icofont-2x" /></a>
                        <a href="#"><i className="icofont-ui-rating icofont-2x" /></a>
                        <a href="#"><i className="icofont-ui-rating icofont-2x" /></a>
                        <a href="#"><i className="icofont-ui-rating icofont-2x" /></a>
                        <a href="#"><i className="icofont-ui-rating icofont-2x" /></a>
                      </span>
                    </div>
                    <form>
                      <div className="form-group">
                        <label>Your Comment</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary btn-sm" type="button"> Submit Comment
                        </button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap">
                  <img className="img-fluid float-left mr-3" src={`/${menu.image}`} />
                  <h6 className="mb-">{menu.name} </h6>
                  <h6 className="pt-0 text-primary mb-4 font-weight-bold">
                    ${menu.price}  <span className="ml-1 count-number ">
                      <button onClick={() => handleChangeQty('sub')} className="btn btn-outline-secondary left dec"> <i className="icofont-minus" />
                      </button>
                      <input className="count-number-input" type="text" readOnly value={qty} />
                      <button onClick={() => handleChangeQty('add')} className="btn btn-outline-secondary btn-sm right inc">
                        <i className="icofont-plus" />
                      </button>
                    </span>
                  </h6>


                  <span className="restaurant-detailed-action-btn mt-3">

                    <button onClick={handleAddToCart} className="btn btn-info btn-sm w-100" type="button">
                      <i className="icofont-cart-alt" /> ADD TO CART
                    </button>
                  </span>

                  {/* <div className="icon-overlap">
                    <i className="icofont-sale-discount" />
                  </div> */}


                </div>
              </div>
              
              <CartSideBar />
              <div className="text-center pt-2 mb-4">
                <img className="img-fluid" src="https://dummyimage.com/352x600/ccc/ffffff.png&text=Google+ads" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
