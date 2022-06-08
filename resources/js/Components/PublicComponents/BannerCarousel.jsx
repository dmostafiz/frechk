import React from 'react'
import CarouselImage from './CarouselImage'

export default function BannerCarousel({ items }) {
    return (
        <div className="osahan-slider pl-4 pt-3">
            <div className="owl-carousel homepage-ad owl-theme">
                {items.map((item, index) => <div key={index} className="item rounded shadow">
                    <a href={`/menu/${item.slug}`}>
                        <CarouselImage image={`/${item.image}`} title={item.name} subtitle={item.title} />
                        {/* <img className="img-fluid rounded" src="/img/1.jpeg" /> */}
                    </a>
                </div>)}
            </div>
        </div>
    )
}
