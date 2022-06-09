import truncate from '@/Helpers/truncate'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function FoodCardCarousel({ popularMenus }) {

    const addToCart = (menuId) => {
        Inertia.post(route('add.cart'), { menuId }, {
            preserveScroll: true, preserveState: true
        })
    }

    return (
        <div className="owl-carousel owl-carousel-four owl-theme">
            {popularMenus.map((item, index) => <div key={index} className="item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image" style={{
                        backgroundImage: `url(${`/${item.image}`} )`,
                        backgroundSize: 'cover',
                        backdropFilter: 'blur(20px)',
                        width: '100%',
                        height: '200px'
                    }}>
                        <div className="star position-absolute"><span className="badge badge-success"><i className="icofont-star" /> 3.1 (300+)</span></div>
                        <div className="favourite-heart text-danger position-absolute"><a href="detail.html"><i className="icofont-heart" /></a></div>
                        <div className="member-plan position-absolute">
                            <span className="badge badge-dark">{item.category.name}</span>
                        </div>
                        {/* <a href={`/menu/${item.slug}`}>
                            <img style={{ maxHeight: '200px', margin: '0 auto !important' }} src={`/${item.image}`} className="img-fluid item-img" />
                        </a> */}
                    </div>
                    <div className="p-3 position-relative">
                        <div className="list-card-body">
                            <h6 className="mb-1"><a href={`/menu/${item.slug}`} className="text-black">{item.name}</a></h6>
                            <p className="list-card-badge mb-2 text-xl">
                                {item.title}
                            </p>
                            <p className="text-gray mb-2">
                                {item?.tags.map((tag, index) => <span key={index}><Link href={`/tag/${tag.slug}`}><a className='text-dark'>{tag.name}</a></Link>{(item.tags.length > index + 1) && ' • '}</span>)}
                            </p>


                            {/* <div className="list-card-badge">
                                <small>
                                    {truncate(item.description, 90)}
                                </small>
                            </div> */}

                            <div className="text-gray mt-3 taddToCartime">
                                <span className="badge badge-succes" style={{
                                    fontSize: '18px',
                                }}> ${item.price} </span>
                                <button onClick={() => addToCart(item.id)} className="float-right border-0 shadow-sm bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-shopping-cart" /> Add to cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>)
            }


        </div >
    )
}
