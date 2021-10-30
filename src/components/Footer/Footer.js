import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black text-white font-semibold md:py-5 sm:py-3 sm:text-sm md:text-base sm:px-2 md:px-0">
            <p>
                <span className="border-r-2 px-2">Contact Us</span>
                <span className="border-r-2 px-2">About Us</span>
                <span className="border-r-2 px-2">Careers</span>
                <span className="border-r-2 px-2">Privacy Policy</span>
                <span className="border-r-2 px-2">Resources</span>
                <span className="px-2">Status</span>
            </p>
            <p className="text-xs mt-3">&copy; Copyright 2021 Anik Roy &nbsp;&nbsp; |&nbsp;&nbsp; All right reserved</p>
            <p className="text-4xl text-blue-200 mt-4">
                <a href="www.facebook.com"><i class="fab fa-facebook-square mx-3"></i></a>
                <a href="www.twitter.com"><i class="fab fa-twitter-square mx-3"></i></a>
                <a href="www.linkedin.com"><i class="fab fa-linkedin mx-3"></i></a>
            </p>
        </div>
    );
};

export default Footer;