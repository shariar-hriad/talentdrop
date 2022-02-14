import Link from 'next/link';
import Company from './Company/Company';
import Jobs from './Jobs/Jobs';
import Location from './Location/Location';
import Logo from './Logo/Logo';
import Tag from './Tag/Tag';


const Aside = () => {

    return (

        <div id="kt_aside" className='aside aside-dark aside-hoverable' data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle" data-kt-aside-minimize="on">
            <Logo></Logo>
            <div className="aside-menu flex-column-fluid">
                <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset={0}>
                    <div style={{ height: '100vh' }} className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                        <div className="menu-item">
                            <Link href='/admin/dashboard'>
                                <a className="menu-link">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3" />
                                                <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <div className="menu-content pt-8 pb-2">
                                <span className="menu-section text-muted text-uppercase fs-8">Crafted</span>
                            </div>
                        </div>
                        <Company></Company>
                        <Jobs></Jobs>
                        <Tag></Tag>
                        <Location />
                    </div>
                </div>
            </div>
            <div className="aside-footer flex-column-auto" id="kt_aside_footer" />
        </div>

    );
};

export default Aside;