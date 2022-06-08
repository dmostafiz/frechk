// import PublicLayout from '/Layouts/PublicLayout'
import HomeSearch from '@/Components/PublicComponents/HomeSearch';
import React from 'react'
import PublicLayout from './../Layouts/PublicLayout';
import CategoryCarousel from './../Components/PublicComponents/CategoryCarousel';
import BannerCarousel from './../Components/PublicComponents/BannerCarousel';
import FourImageBanner from '../Components/PublicComponents/FourImageBanner';
import FoodCardCarousel from '@/Components/PublicComponents/FoodCardCarousel';
import Zoom from 'react-reveal/Zoom';
import Packages from '@/Components/Packages';

export default function Home({ categories, carouselMenus, foodCards, popularMenus, packages }) {
    return (
        <PublicLayout>

            <section style={{
                background: 'url(/banner.png)',
                backgroundSize: 'cover',
                minHeight: 'calc(100vh - 150px)'
            }} className="pt-5 homepage-search-block position-relative">
                <div className="banner-overlay" />
                <div className="container">
                    <div className="row d-flex align-items-center">

                        <div className="col-md-6">
                            <div className="homepage-search-title">
                                <h1 className="mb-3 font-weight-normal">
                                    <span className="font-weight-bold">Fresh & healthy meals anywhere</span> in Canada
                                </h1>
                                <h5 className="mb-3 text-dark font-weight-normal">Lists of top restaurants, cafes, pubs, and bars in Melbourne, based on trends</h5>
                            </div>



                            <HomeSearch />


                            <h6 className="mt-4 text-shadow font-weight-normal">E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h6>

                            <CategoryCarousel categories={categories} />

                        </div>


                        <div className="col-md-6">
                            <Zoom>
                                <BannerCarousel items={carouselMenus} />
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
            <Zoom>
                <Packages packages={packages} />
            </Zoom>
            <section className="section pt-5 pb-5 products-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Frechk's popular menus</h2>
                        <p>Top restaurants, cafes, pubs, and bars in Ludhiana, based on trends</p>
                        {/* <span className="line" /> */}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <FoodCardCarousel popularMenus={popularMenus} />
                        </div>
                    </div>
                </div>
            </section>


        </PublicLayout>
    )
}
