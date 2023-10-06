import React from "react";

export default function Footer() {
    return (
        <>
            <div className=" bg-white pt-2 mt-4 md:pt-8 md:mt-0 divide-y">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap justify-center m-2 md:m-8 mb-4">
                        <div className="sm:w-1/3 xl:w-1/4 h-auto mb-2 hidden md:block">
                            <div className="text-black mb-2 font-semibold uppercase">Quick Links</div>
                            <ul className="list-reset leading-normal">
                                <li className="hover:text-orange text-grey-darker pb-2">Home</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Services</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Careers</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Abou Us</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Customer Care</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Request a Quote</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/3 xl:w-1/4 h-auto mb-2 hidden md:block">
                            <div className="text-black mb-2 font-semibold uppercase">Products</div>
                            <ul className="list-reset leading-normal">
                                <li className="hover:text-orange text-grey-darker pb-2">Aluminum</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Stainless Steel</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Steel</li>
                                <li className="hover:text-orange text-grey-darker pb-2">REM Center</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/3 xl:w-1/4 h-auto mb-2 hidden md:block">
                            <div className="text-black mb-2 font-semibold uppercase">Contact Us</div>
                            <ul className="list-reset leading-normal">
                                <li className="hover:text-orange text-grey-darker pb-2">569 Charcot Avenue, San Jose</li>
                                <li className="hover:text-orange text-grey-darker pb-2">CA (408) 432-4890</li>
                                <li className="hover:text-orange text-grey-darker pb-2">sales@campbellmetal.com</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/3 xl:w-1/4 h-auto mb-2 text-center">
                            <div className="text-black mb-2 font-semibold uppercase">Joining Our Mail List</div>
                            <p className="text-grey-darker leading-normal text-xs">Learn about special events & deals </p>
                            <div className="mt-2">
                                <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Email Address" />
                                <button className="bg-black text-white rounded-sm h-auto text-xs p-3">Submit</button>
                            </div>
                            <p className="text-dark-gray leading-normal text-xs mt-1">I agree to receive emails in accordance with the Terms & Conditions and Privacy Policy.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-2 pb-2 text-xs bg-blue text-white">
                    <span className="copyright pl-2 hidden md:block">
                        Terms & Conditions
                    </span>
                    <span className="copyright pl-2 hidden md:block">
                        &nbsp;Privacy Policy
                    </span>
                    <span className="copyright pl-2 hidden md:block">
                    &nbsp;CA Prop 65
                    </span>
                    <span className="dark:text-gray-400 pl-2">
                    &nbsp;©2021 Industrial Metal Supply. All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
}