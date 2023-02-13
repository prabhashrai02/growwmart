import React from 'react';

import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer67Section}>
            <span>
                Quick links
            </span>
            <div className={style.footer80Policies}>
                <span>
                    About Us
                </span>
                <span>
                    Terms of Service
                </span>
                <span>
                    Privacy Policy
                </span>
                <span>
                    Cancellation & Refund Policy
                </span>
                <span>
                    Shipping Policy
                </span>
            </div>
            <div className={style.footer79TrackContactBlog}>
                <span>
                    Track My Order
                </span>
                <span>
                    Contact Us
                </span>
                <span>
                    Our Blog
                </span>
            </div>
        </div>
    )
}

export default Footer;
