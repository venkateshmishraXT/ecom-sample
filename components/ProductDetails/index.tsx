"use client"
import React, { useEffect, useState } from "react";
import Counter from "../Counter";
import { ReadMore } from "../ReadMore";
import { Spinner } from "../Skeleton";


export default function ProductDetails({id=61012050}) {
  const [data,setData] = useState<any>();
  const [spinner,setSpinner] = useState<any>(true);
  const [totalPrice,setTotalPrice] = useState<any>(0)
  const sendProductCountData = (productCount:any) => {
    console.log(productCount)
    const price = productCount*data.price;
    let parseValue = parseFloat(''+price).toFixed(2)
    setTotalPrice(parseValue)
  }
  useEffect(() => {
    fetch('../data/product.json')
   .then(response => response.json())
   .then(json => {
    let result = json.filter((el:any) => el.id == id);
    setSpinner(false);
    setData(result[0])
    let parseValue = parseFloat(''+result[0].price).toFixed(2)
    setTotalPrice(parseValue)
   }
    )
  },[id])
  return (
    spinner? <Spinner /> :
    <>
    {!data && <div className="flex justify-center items-center h-screen">
    <div className="p-4 rounded text-black">
    404 | This page could not be found.
    </div>
</div>}
    { data && <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="w-6/12 ">
        <div className="xl:w-236 ">
          <div className="bg-white p-7">
            <img className="w-full" alt={data.name} src={data.imagePath} />
          </div>
        </div>
        <div className="xl:w-236 mt-8 ">
          <div className="bg-white p-7">
            <p className="font-bold">How to measure</p>
            <div className="flow-root flex">
              <p className="float-left w-8/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the size guide.</p>
              <p className="float-right pr-3">
                <img className="w-full" alt="size guide" src="../images/size-guide.png" />
              </p>
            </div>


          </div>
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="bg-white p-7">
          <div className="border-b border-light-gray pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{data?.name}"</h1>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">${data.price}</h1>
          </div>
          <div className="py-4 flex items-center justify-between">
            <ReadMore>
            {data?.description}
            </ReadMore>
          </div>
          <div className="flex items-center w-10/12">
            <label htmlFor="countries" className="block mb-2 mr-3 text-sm font-medium text-black-900 dark:text-white flex items-center">Thickness(A)</label>
            <select id="countries" className="bg-gray-50 border border-black text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a Thickness</option>
              <option value="US">0.25</option>
              <option value="CA">0.50</option>
              <option value="FR">0.75</option>
              <option value="DE">0.85</option>
            </select>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-6 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Width(B)</label>


            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="option1" name="radio-group" className="hidden" />
              <label htmlFor="option1" className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                48.5
              </label>
            </div>
            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="option2" name="radio-group" className="hidden" />
              <label htmlFor="option2" className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                68.5
              </label>
            </div>
            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="option3" name="radio-group" className="hidden" />
              <label htmlFor="option3" className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                Custom
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-4 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Length(C)</label>


            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="length1" name="radio-group1" className="hidden" />
              <label htmlFor="length1" className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                144.5
              </label>
            </div>
            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="length2" name="radio-group1" className="hidden" />
              <label htmlFor="length2" className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                Custom
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-2-3 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2 text-base">Source</label>


            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="source1" name="source-group1" className="hidden" />
              <label htmlFor="source1" className="cursor-pointer bg-white border border-gray-300 p-2">
                Domestic
              </label>
            </div>
            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="source2" name="source-group1" className="hidden" />
              <label htmlFor="source2" className="cursor-pointer bg-white border border-gray-300 p-2">
                Import
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 ">
            <p className="font-bold mt-4 w-20">${totalPrice}</p>
            <Counter sendProductCount={sendProductCountData} />
          </div>
          <div className="mt-4">
            <button type="button" className="text-white bg-light-blue hover:bg-light-blue focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-light-blue dark:hover:bg-light-blue focus:outline-none dark:focus:ring-blue-800 w-72">Add to Cart</button>
          </div>
          <div className="flex items-center pl-4 border border-light-gray rounded dark:border-gray-700 bg-slate-300 mt-4">
            <input id="bordered-radio-1" type="checkbox" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Schedule a recurring Order</label>
          </div>
          <div>
            <p className="font-bold mt-4">Product Details</p>
          </div>
          <div className="container mx-auto pb-6 flex">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden sm:rounded-lg">
                    <table className="min-w-full">
                      <tbody className="bg-white font-light">
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Thickness (A)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">0.25</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Width (B)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">0.25</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Length (C)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">200</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Weight (each)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">176.67 LBs</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Alloy</td>
                          <td className="px-6 pt-2  whitespace-nowrap">176.67 LBs</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Temper</td>
                          <td className="px-6 pt-2  whitespace-nowrap">T651</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Source</td>
                          <td className="px-6 pt-2  whitespace-nowrap">Import</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Part #</td>
                          <td className="px-6 pt-2  whitespace-nowrap">61P0250412</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
   
  )


}
