"use client"
import React, { useEffect, useState } from "react";
import Counter from "../Counter";
import { ReadMore } from "../ReadMore";
import { Spinner } from "../Skeleton";
import { BreadCrumb } from "../BredCrumb";
import API_BASE_URL from "@/config/api";


export default function ProductDetails({id=61012050}) {
  const [data,setData] = useState<any>();
  const [spinner,setSpinner] = useState<any>(true);
  const [totalPrice,setTotalPrice] = useState<any>(0)
  const sendProductCountData = (productCount:any) => {
    const price = productCount*data.price;
    let parseValue = parseFloat(''+price).toFixed(2)
    setTotalPrice(parseValue)
  }
  useEffect(() => {
    fetch(`${API_BASE_URL}/getProductDetails`)
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
    { data &&<> <BreadCrumb productName={data.name} /> <div className="md:flex items-start justify-center pb-2 md:px-6">
      <div className="w-full md:w-6/12">
        <div className="xl:w-236 bg-white p-4 md:p-0">
          <div className="pb-4 block md:hidden">
            <h1 className="lg:text-2xl text-xl font-medium lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{data?.name}"</h1>
            <h1 className="lg:text-2xl text-xl font-medium lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">${data.price}</h1>
          </div>
          <div className="product-image hidden md:block">
            <img className="w-full" alt={data.name} src={data.imagePathDesktop} />
          </div>
          <div className="product-image block md:hidden">
            <img className="w-full" alt={data.name} src={data.imagePathMobile} />
          </div>
        </div>
        <div className="xl:w-236 mt-8 hidden md:block">
          <div className="bg-white p-7">
            <p className="font-semibold">How to measure</p>
            <div className="flow-root flex">
              <p className="float-left w-6/12 lg:w-8/12 text-sm font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the size guide.</p>
              <p className="float-right pr-3">
                <img className="w-full" alt="size guide" src="../images/size-guide.png" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 pt-0 mt-4 block md:hidden">
        <div className="flex items-center space-x-4">
          <Counter sendProductCount={sendProductCountData} />
          <div className="mt-3 w-3/4">
          <p className="font-semibold">${totalPrice}</p>
          <p className="font-semibold text-sm text-gray">
            <span>0.25” </span><span>x </span>
            <span>48.5” </span><span>x </span>
            <span>144.5”</span>
          </p>
          </div>
        </div>
        <div className="mt-4">
          <button type="button" className="text-white bg-light-blue hover:bg-light-blue focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 dark:bg-light-blue dark:hover:bg-light-blue focus:outline-none dark:focus:ring-blue-800 w-full">Add to Cart</button>
        </div>
      </div>
      <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-4 md:mt-0">
        <div className="bg-white p-4 md:p-7 mt-2">
          <div className="border-b border-light-gray pb-6 hidden md:block">
            <h1 className="lg:text-2xl text-xl font-medium lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{data?.name}"</h1>
            <h1 className="lg:text-2xl text-xl font-medium lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">${data.price}</h1>
          </div>
          <div className="py-4 block md:flex items-center justify-between text-sm">
            <ReadMore>
            {data?.description}
            </ReadMore>
            <div className="block md:hidden border-b border-light-gray mt-4"></div>
          </div>
          <div className="flex items-center w-10/12">
            <label htmlFor="countries" className="block mb-2 mr-3 text-sm font-medium text-black-900 dark:text-white flex items-center">Thickness(A)</label>
            <select defaultValue="0" id="countries" className="bg-gray-50 border border-black text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="0">Choose a Thickness</option>
             {
              data.thickness.map((thickness:any )=> (
                <option value={thickness.id}>{thickness.thick}</option>
              ))
             }
            </select>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-6 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Width(B)</label>
{
              data.width.map((widthData:any )=> (
                <div className="relative inline-flex items-center customInput">
              <input type="radio" id={'option'+widthData.id} name="radio-group" className="hidden" />
              <label htmlFor={'option'+widthData.id} className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                {widthData.width}
              </label>
            </div>
              ))
             }
            <div className="relative inline-flex items-center customInput">
              <input type="radio" id="option3" name="radio-group" className="hidden" />
              <label htmlFor="option3" className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                Custom
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-4 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Length(C)</label>
            {
              data.lengths.map((lengthData:any )=> (
                <div className="relative inline-flex items-center customInput">
                <input type="radio" id={'source'+lengthData.id} name="radio-group1" className="hidden" />
                <label htmlFor={'source'+lengthData.id} className="cursor-pointer bg-white border border-gray-300 p-2 text-base">
                {lengthData.length}
                </label>
              </div>
              ))
             }
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-2-3 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2 text-base">Source</label>
            {
              data.source.map((sourceData:any )=> (
                <div className="relative inline-flex items-center customInput">
                <input type="radio" id={sourceData.id} name="source-group1" className="hidden" />
                <label htmlFor={sourceData.id} className="cursor-pointer bg-white border border-gray-300 p-2">
                  {sourceData.source}
                </label>
              </div>
              ))
             }
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 mt-4 ">
              <p className="font-bold mt-4 w-20">${totalPrice}</p>
              <Counter sendProductCount={sendProductCountData} />
            </div>
            <div className="mt-4">
              <button type="button" className="text-white bg-light-blue hover:bg-light-blue focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-light-blue dark:hover:bg-light-blue focus:outline-none dark:focus:ring-blue-800 w-72">Add to Cart</button>
            </div>
          </div>
          <div className="flex items-center pl-4 border border-light-gray rounded dark:border-gray-700 bg-slate-300 mt-4">
            <input id="bordered-radio-1" type="checkbox" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Schedule a recurring Order</label>
          </div>
          <div className="xl:w-236 mt-4 md:mt-8 block md:hidden border-b border-light-gray pb-4">
          <div className="bg-white p-0 md:p-7">
            <p className="font-semibold">How to measure</p>
            <div className="flow-root flex">
              <p className="float-left w-6/12 text-sm font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the size guide.</p>
              <p className="float-right pr-3">
                <img className="w-full" alt="size guide" src="../images/size-guide.png" />
              </p>
            </div>
          </div>
        </div>
          <div>
            <p className="font-semibold mt-4">Product Details</p>
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
                          <td className="px-6 pt-2  whitespace-nowrap">{data.thicknessData}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Width (B)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.widthData}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Length (C)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.lengthData}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Weight (each)</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.weight}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Alloy</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.alloy}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Temper</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.temper}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Source</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.sourceData}</td>
                        </tr>
                        <tr>
                          <td className="pr-6 pt-2 whitespace-nowrap border-r border-light-gray">Part #</td>
                          <td className="px-6 pt-2  whitespace-nowrap">{data.part}</td>
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
    </div>
    </>
    }
    </>
  )
}
