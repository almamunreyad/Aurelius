import React from 'react';
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom'
import img from '../assets/images/Lion.svg'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='left'>
                    <div className='img'>
                        <img src={img} alt="lion" />
                    </div>
                </div>

                <div className='right'>
                    <h5>Stay Updated</h5>
                    <h1>Sign up to receive our insights</h1>
                    <div className='ftr'></div>
                    <div className='reg'>
                        <input placeholder='Enter your email address' />
                        <a href='#' style={{ marginLeft: "10px" }}>Sign Up<svg style={{ marginLeft: "5px", }} xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.248288 14.569C0.512523 14.8333 0.953012 14.8333 1.21725 14.569L7.80181 7.98446C7.91191 7.87436 7.97801 7.69816 8 7.52197L8 7.45597C7.978 7.27978 7.91191 7.12564 7.80181 7.01554L1.21725 0.430977C0.953014 0.166742 0.512524 0.166742 0.248289 0.430977C-0.0380017 0.695212 -0.0380018 1.1357 0.248289 1.42193L6.32633 7.49997L0.248288 13.578C-0.0380029 13.8422 -0.0380029 14.3047 0.248288 14.569L0.248288 14.569Z" fill="#2C924A" />
                        </svg></a>
                    </div>


                </div>

            </div>

            <div className='bottomSection'>
                <h4><a href='#'>Copyright © Aurelius</a></h4>
                <h4><a href='#'>Cookie Notice</a> </h4>
                <h4><a href='#'> Privacy Notice</a> </h4>
                <h4><a href='#'>Terms of Use</a></h4>
                <h4><a href='#'>Site Produced by Skylark</a></h4>
            </div>
        </>
    );
};

export default Footer;