import React from "react";

export default function Footer() {
    return (
        <>
            <div className=" bg-white pt-8 divide-y">
                <div className="mx-auto max-w-6xl">
                    <div className="sm:flex mb-4">
                        <div className="sm:w-1/4 h-auto">
                            <div className="text-black mb-2 font-bold">Quick Links</div>
                            <ul className="list-reset leading-normal">
                                <li className="hover:text-orange text-grey-darker pb-2">Home</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Services</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Careers</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Abou Us</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Customer Care</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Request a Quote</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 h-auto">
                            <div className="text-black mb-2 font-bold">Products</div>
                            <ul className="list-reset leading-normal">
                                <li className="hover:text-orange text-grey-darker pb-2">Aluminum</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Stainless Steel</li>
                                <li className="hover:text-orange text-grey-darker pb-2">Steel</li>
                                <li className="hover:text-orange text-grey-darker pb-2">REM Center</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 h-auto">
                            <div className="text-black mb-2 font-bold">Contact Us</div>
                            <ul className="list-reset leading-normal">
                                <li className="hover:text-orange text-grey-darker pb-2">569 Charcot Avenue,San Jose, CA</li>
                                <li className="hover:text-orange text-grey-darker pb-2">(408) 432-4890</li>
                                <li className="hover:text-orange text-grey-darker pb-2">sales@campbellmetal.com</li>
                            </ul>
                        </div>

                        <div className="sm:w-1/4 h-auto">
                            <div className="text-black mb-2 font-bold">Joining Our Mail List</div>
                            <p className="text-grey-darker leading-normal">Learn about special events & deals </p>
                            <div className="mt-4 flex">
                                <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Email Address" />
                                <button className="bg-black text-white rounded-sm h-auto text-xs p-3">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-2 pb-2 text-sm bg-blue text-white">
                    <span className="copyright pl-2">
                        Terms & Conditions
                    </span>
                    <span className="copyright pl-2">
                        &nbsp;Privacy Policy
                    </span>
                    <span className="copyright pl-2">
                    &nbsp;CA Prop 65
                    </span>
                    <span className="dark:text-gray-400 pl-2">

                    &nbsp;©2021 Industrial Metal Supply. All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
}