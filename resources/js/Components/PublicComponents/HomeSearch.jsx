import React from 'react'

export default function HomeSearch() {
    return (
        <>
            <div className="homepage-search-form">
                <form className="form-noborder">
                    <div className="form-row">
                        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                            <div className="location-dropdown">
                                <i className="icofont-location-arrow" style={{zIndex:9}} />
                                <select className="custom-select form-control-lg">
                                    <option> Quick Searches </option>
                                    <option> Breakfast </option>
                                    <option> Lunch </option>
                                    <option> Dinner </option>
                                    <option> Cafés </option>
                                    <option> Delivery </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 form-group">
                            <input type="text" placeholder="Search menus..." className="form-control form-control-lg" />
                            <button className="locate-me btn-primary btn-sm"><i className="icofont-search-1" /> Search</button>
                        </div>
                        {/* <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                                            <a href="listing.html" className="btn btn-primary btn-block btn-lg btn-gradient">Search</a>
                                        </div> */}
                    </div>
                </form>
            </div>
        </>
    )
}
