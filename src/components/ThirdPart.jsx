import React from 'react';
import '../assets/css/Third.css'
import img from '../assets/images/third.jpg'

const ThirdPart = () => {
    return (
        <>
            <>
                <div className='thirdContainer'>
                    <div className='left'>
                        <img src={img} alt="lion" />
                    </div>

                    <div className='right'>
                        <h1>Jacob Anderson</h1>
                        <p>Vice President</p>
                        <div className='thirdBorder'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href='/'>Read More
                            <svg style={{ marginLeft: "5px" }} xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.754148 14.569C1.01838 14.8333 1.45887 14.8333 1.72311 14.569L8.30767 7.98447C8.41777 7.87437 8.48386 7.69818 8.50586 7.52199L8.50586 7.45599C8.48386 7.27979 8.41776 7.12566 8.30767 7.01556L1.72311 0.430992C1.45887 0.166757 1.01838 0.166757 0.754149 0.430992C0.467858 0.695227 0.467858 1.13572 0.754149 1.42195L6.83219 7.49999L0.754148 13.578C0.467856 13.8423 0.467856 14.3047 0.754148 14.569L0.754148 14.569Z" fill="#23753B" />
                            </svg>
                        </a>
                    </div>
                </div>
            </>
        </>
    );
};

export default ThirdPart;