import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-blue">
            <div className="mx-auto max-w-7xl px-2">
                <div className="relative flex h-10 items-center justify-between">
                    <div className="flex flex-1 items-center justify-end">
                        <div className="flex">
                            <a href="#" className="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About Us</a>
                            <a href="#" className="text-white  rounded-md px-3 py-2 text-sm font-medium">Services</a>
                            <a href="#" className="text-white  rounded-md px-3 py-2 text-sm font-medium">Customer Services</a>
                            <a href="#" className="text-white rounded-md px-3 py-2 text-sm font-medium">Careers</a>
                            <a href="#" className="text-white  rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-blue border-b-2">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-rows-3 grid-flow-col gap-4 p-4">
                        <div className="row-span-3 relative flex flex-col justify-between">
                            <div className="block">
                                <div className="m-3">
                                    <img src="../images/logo.png" width={200}
                                        height={50} />
                                </div>

                            </div>
                            <div className="block pt-6 text-black">
                                <a href="#" className="px-3 py-2 text-sm font-medium" aria-current="page">Aluminum</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium">Stainless Steel</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium">Steel</a>
                                <a href="#" className="px-3 py-2 text-sm font-medium">REM Center</a>
                            </div>
                        </div>
                        <div className="row-span-3 relative flex h-24 flex-col justify-between pr-3" >
                            <div className="flex justify-end">
                                <form className="w-72">
                                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" className="block w-full p-2 pl-10 text-sm text-black border border-light-gray bg-stone focus:ring-light-blue focus:border-light-blue dark:bg-light-grey dark:border-grey dark:placeholder-gray dark:text-white dark:focus:ring-light-blue dark:focus:border-light-blue mt-3" placeholder="Search" required />
                                    </div>
                                </form>
                            </div>
                            <div  className="flex justify-end pt-4">
                                <button type="button" className="text-light-blue bg-white border-light-blue border hover:white focus:ring-4 focus:outline-none focus:ring-white font-medium text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-light-blue">
                                    <img src="../images/icon-dashboard.png" className="pr-2" />
                                    Dashboard
                                </button>
                                <button type="button" className="text-white bg-light-blue hover:bg-light-blue focus:ring-4 focus:outline-none focus:ring-light-blue font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-light-blue">
                                <img src="../images/icon-quote.png" className="pr-2" />
                                    New Quote
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}
