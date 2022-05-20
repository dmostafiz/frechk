import React from 'react'
import useScript from '@/Helpers/useScript';
import Sidebar from '@/Components/AdminComponents/Sidebar';
import Topbar from '@/Components/AdminComponents/Topbar';
import HeaderContent from '@/Components/AdminComponents/HeaderContent';
import Alert from '@/HelperComponents/Alert';

const headerContent = <HeaderContent
    title={<h1>Hello Devs!</h1>}
    subtitle={<p>We are on a mission to help developers like you build</p>}
    button={<a href='#' className="btn btn-link btn-soft-light">
        <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8251 15.2171H12.1748C14.0987 15.2171 15.731 13.985 16.3054 12.2764C16.3887 12.0276 16.1979 11.7713 15.9334 11.7713H14.8562C14.5133 11.7713 14.2362 11.4977 14.2362 11.16C14.2362 10.8213 14.5133 10.5467 14.8562 10.5467H15.9005C16.2463 10.5467 16.5263 10.2703 16.5263 9.92875C16.5263 9.58722 16.2463 9.31075 15.9005 9.31075H14.8562C14.5133 9.31075 14.2362 9.03619 14.2362 8.69849C14.2362 8.35984 14.5133 8.08528 14.8562 8.08528H15.9005C16.2463 8.08528 16.5263 7.8088 16.5263 7.46728C16.5263 7.12575 16.2463 6.84928 15.9005 6.84928H14.8562C14.5133 6.84928 14.2362 6.57472 14.2362 6.23606C14.2362 5.89837 14.5133 5.62381 14.8562 5.62381H15.9886C16.2483 5.62381 16.4343 5.3789 16.3645 5.13113C15.8501 3.32401 14.1694 2 12.1748 2H11.8251C9.42172 2 7.47363 3.92287 7.47363 6.29729V10.9198C7.47363 13.2933 9.42172 15.2171 11.8251 15.2171Z" fill="currentColor" />
            <path opacity="0.4" d="M19.5313 9.82568C18.9966 9.82568 18.5626 10.2533 18.5626 10.7823C18.5626 14.3554 15.6186 17.2627 12.0005 17.2627C8.38136 17.2627 5.43743 14.3554 5.43743 10.7823C5.43743 10.2533 5.00345 9.82568 4.46872 9.82568C3.93398 9.82568 3.5 10.2533 3.5 10.7823C3.5 15.0873 6.79945 18.6413 11.0318 19.1186V21.0434C11.0318 21.5715 11.4648 22.0001 12.0005 22.0001C12.5352 22.0001 12.9692 21.5715 12.9692 21.0434V19.1186C17.2006 18.6413 20.5 15.0873 20.5 10.7823C20.5 10.2533 20.066 9.82568 19.5313 9.82568Z" fill="currentColor" />
        </svg>
        Announcements
    </a>}
/>


export default function AdminLayout({ children, header = headerContent }) {

    // useScript('/admin/js/hope-ui.js')

    // useScript('/admin/js/core/libs.min.js', 'core')
    // useScript('/admin/js/core/external.min.js', 'external')
    // useScript('/admin/js/charts/widgetcharts.js', 'widgetcharts')
    // useScript('/admin/js/charts/vectore-chart.js', 'vectore')
    // useScript('/admin/js/plugins/fslightbox.js', 'fslightbox')
    // useScript('/admin/js/plugins/setting.js', 'setting')
    // useScript('/admin/js/plugins/slider-tabs.js', 'slider')
    // useScript('/admin/js/plugins/form-wizard.js', 'form')
    // useScript('/admin/vendor/aos/dist/aos.js', 'aos')
    useScript('/admin/js/charts/dashboard.js')
    useScript('/admin/js/hope-ui.js')

    return (
        <div>

            <Sidebar />

            <main className="main-content">
                <div className="position-relative iq-banner">
                    {/*Nav Start*/}

                    <Topbar />


                    <div className="iq-navbar-header" style={{ height: 215 }}>
                        <div className="container-fluid iq-container">
                            <div className="row">
                                <div className="col-md-12">

                                    {header}
                                </div>
                            </div>
                        </div>
                        <div className="iq-header-img">
                            <img src="/admin/images/dashboard/top-header.png" alt="header" className="theme-color-default-img img-fluid w-100 h-100" />
                            <img src="/admin/images/dashboard/top-header1.png" alt="header" className="theme-color-purple-img img-fluid w-100 h-100" />
                            <img src="/admin/images/dashboard/top-header2.png" alt="header" className="theme-color-blue-img img-fluid w-100 h-100" />
                            <img src="/admin/images/dashboard/top-header3.png" alt="header" className="theme-color-green-img img-fluid w-100 h-100" />
                            <img src="/admin/images/dashboard/top-header4.png" alt="header" className="theme-color-yellow-img img-fluid w-100 h-100" />
                            <img src="/admin/images/dashboard/top-header5.png" alt="header" className="theme-color-pink-img img-fluid w-100 h-100" />
                        </div>
                    </div>

                </div>

                <div className="conatiner-fluid content-inner mt-n5 py-0">


                    {children}


                    <Alert /> 

                </div>

                {/* Footer Section Start */}
                <footer className="footer">
                    <div className="footer-body">
                        <ul className="left-panel list-inline mb-0 p-0">
                            <li className="list-inline-item"><a href="../dashboard/extra/privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item"><a href="../dashboard/extra/terms-of-service.html">Terms of Use</a>
                            </li>
                        </ul>
                        <div className="right-panel">
                            ©
                            Hope UI, Made with
                            <span className="text-gray">
                                <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.85 2.50065C16.481 2.50065 17.111 2.58965 17.71 2.79065C21.401 3.99065 22.731 8.04065 21.62 11.5806C20.99 13.3896 19.96 15.0406 18.611 16.3896C16.68 18.2596 14.561 19.9196 12.28 21.3496L12.03 21.5006L11.77 21.3396C9.48102 19.9196 7.35002 18.2596 5.40102 16.3796C4.06102 15.0306 3.03002 13.3896 2.39002 11.5806C1.26002 8.04065 2.59002 3.99065 6.32102 2.76965C6.61102 2.66965 6.91002 2.59965 7.21002 2.56065H7.33002C7.61102 2.51965 7.89002 2.50065 8.17002 2.50065H8.28002C8.91002 2.51965 9.52002 2.62965 10.111 2.83065H10.17C10.21 2.84965 10.24 2.87065 10.26 2.88965C10.481 2.96065 10.69 3.04065 10.89 3.15065L11.27 3.32065C11.3618 3.36962 11.4649 3.44445 11.554 3.50912C11.6104 3.55009 11.6612 3.58699 11.7 3.61065C11.7163 3.62028 11.7329 3.62996 11.7496 3.63972C11.8354 3.68977 11.9247 3.74191 12 3.79965C13.111 2.95065 14.46 2.49065 15.85 2.50065ZM18.51 9.70065C18.92 9.68965 19.27 9.36065 19.3 8.93965V8.82065C19.33 7.41965 18.481 6.15065 17.19 5.66065C16.78 5.51965 16.33 5.74065 16.18 6.16065C16.04 6.58065 16.26 7.04065 16.68 7.18965C17.321 7.42965 17.75 8.06065 17.75 8.75965V8.79065C17.731 9.01965 17.8 9.24065 17.94 9.41065C18.08 9.58065 18.29 9.67965 18.51 9.70065Z" fill="currentColor" />
                                </svg>
                            </span> by <a href="https://iqonic.design/">IQONIC Design</a>.
                        </div>
                    </div>
                </footer>
                {/* Footer Section End */}
            </main>
        </div>
    )
}
