import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import BannerImage from './BannerImage';

export default function FourImageBanner({ foodCards }) {
    return (
        <div className="row ">
            {foodCards.map((item, index) => <div key={index} className={`col-md-3  col-6`}>
                <div className="products-box">
                    <Link href={`/menu/${item.slug}`}>
                        <BannerImage
                            image={`/${item.image}`}
                            title={item.name}
                            subtitle={item.title}
                        />
                    </Link>

                </div>
            </div>)}
        </div>
    )
}
