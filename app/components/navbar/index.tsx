
export default function Navbar() {
    return (
        <nav className="bg-indigo-500">
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

            <div className="grid grid-rows-3 grid-flow-col gap-4 bg-white border-b-2 p-4 border-indigo-500">
                <div className="row-span-3 relative flex h-24 flex-col justify-between">
                    <div className="block">
                        <div className="m-3">
                            <img src="./logo.webp" width={200}
                                height={50} />
                        </div>

                    </div>
                    <div className="block pt-6">
                        <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Aluminum</a>
                        <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium">Stainless Steel</a>
                        <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium">Steel</a>
                        <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium">REM Center</a>
                    </div>
                </div>
                <div className="row-span-3 relative flex h-24 flex-col justify-between pr-3" >
                    <div className="flex justify-end">
                        <form className="w-72">
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" placeholder="Search" required />
                            </div>
                        </form>
                    </div>
                    <div  className="flex justify-end pt-4">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                            Dashboard
                        </button>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            New Quote
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            {/* <div className="mx-auto max-w-7xl px-2 bg-white">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
                <div className="flex">
                  <img src="./logo.webp" width={200}
              height={50} />
                </div>
            </div>
            <div>

<form className="w-72">   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
    </div>
</form>

            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-2 bg-white">
          <div className="relative flex h-10 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
                <div className="flex">
                  <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Aluminum</a>
                  <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium">Stainless Steel</a>
                  <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium">Steel</a>
                  <a href="#" className="text-black rounded-md px-3 py-2 text-sm font-medium">REM Center</a>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
                <div className="flex">
                 
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
  </svg>
 Dashboard
</button>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    New Quote
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button>

                </div>
            </div>
          </div>
        </div> */}

        </nav>

    )
}
