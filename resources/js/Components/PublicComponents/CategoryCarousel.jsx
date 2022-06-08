import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function CategoryCarousel({ categories }) {
    return (
        <div className="owl-carousel owl-carousel-category owl-theme">

            {categories.map((cat, index) => <div key={index} className="item">
                <div className="osahan-category-item">
                    <Link href={`/category/${cat.slug}`}>
                        <img className="img-fluid" src={`/${cat.image}`} alt={cat.name} />
                        <h6>{cat.name}</h6>
                        <p>{cat.menus.length}</p>
                    </Link>
                </div>
            </div>)}


        </div>
    )
}
