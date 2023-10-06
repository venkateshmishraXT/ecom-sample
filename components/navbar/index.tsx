import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-blue sticky md:relative top-0 left-0">
            <div className="mx-auto max-w-7xl px-2 hidden md:block">
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

            <div className="bg-white border-blue border-b-0 md:border-b-2 ">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-rows-3 grid-flow-col gap-4 p-4">
                        <div className="row-span-3 relative flex flex-col justify-between">
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                            <div className="block">
                                <div className="m-3 hidden md:block">
                                    <img src="../images/logo.png" width={298} height={50} />
                                </div>
                            </div>
                            <div className="block pt-6 text-black hidden md:block">
                                <a href="#" className="sm:px-3 lg:px-6 pl-3 py-2 text-sm font-medium" aria-current="page">Aluminum</a>
                                <a href="#" className="sm:px-3 lg:px-6 py-2 text-sm font-medium">Stainless Steel</a>
                                <a href="#" className="sm:px-3 lg:px-6 py-2 text-sm font-medium">Steel</a>
                                <a href="#" className="sm:px-3 lg:px-6 py-2 text-sm font-medium">REM Center</a>
                            </div>
                        </div>
                        <div className="row-span-3 relative flex items-center flex-col justify-between md:hidden">
                            <img src="../images/logo-m.png" width={40} height={40} />
                        </div>
                        <div className="row-span-3 relative h-24 flex-col justify-between pr-3 hidden md:flex" >
                            <div className=" justify-end hidden md:flex">
                                <form className="w-72">
                                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" className="block w-full p-2 pl-10 text-sm text-black border border-light-gray bg-stone focus:ring-light-blue focus:border-light-blue dark:bg-light-grey dark:border-grey dark:placeholder-gray dark:text-white dark:focus:ring-light-blue dark:focus:border-light-blue mt-3" placeholder="Search" required />
                                    </div>
                                </form>
                            </div>
                            <div  className="justify-end pt-4 hidden md:flex">
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
                        <div className="row-span-3 relative flex items-center  mt-3 pr-3 md:hidden" >
                            <a href="#" className="flex mr-4">
                            <svg className="w-4 h-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            </a>
                            <a href="#" className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
