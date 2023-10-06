"use client"
import API_BASE_URL from "@/config/api"
import React, { useEffect, useState } from "react"
export default function ProductPurchase() {
    const [productPurchases, setProductPurchases] = useState([])
    useEffect(() => {
        fetch(`${API_BASE_URL}/purchasedProduct`)
            .then(response => response.json())
            .then(json => {
                setProductPurchases(json)
            }
            )
    }, [])
    return (
        productPurchases && <div className="mx-auto ">
            <div className="shadow shadow-gray-600 bg-white md:m-8 mt-2">
                <p className="pl-8 pt-4 md:pt-8 text-m font-medium">Frequently purchased togrther</p>
                <div className="flex md:flex-wrap -mx-6 px-8 overflow-hidden">
                    {
                        productPurchases.map((data:any )=> (
                            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-4" key={data.id}>
                                <a href="" className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <img className="object-cover ml-4" src="../images/fixed-aspect-ratio-spacer.png" alt="Frequently purchased togrther" />
                                    </div>
                                    <div className="p-4 pt-1">
                                        <h2 className="mt-2 mb-4 font-medium">{data.name}</h2>
                                        <div className="container mx-auto pb-6 flex">
                                            <div className="flex flex-col">
                                                <div className="-my-2 overflow-x-auto">
                                                    <div className="align-middle inline-block min-w-full">
                                                        <div className="overflow-hidden sm:rounded-lg">
                                                            <table className="min-w-full">
                                                                <tbody className="bg-white font-light text-sm">

                                                                    <tr>
                                                                        <td className=" pr-4 whitespace-nowrap border-r border-light-gray">Width(B)</td>
                                                                        <td className="px-4   whitespace-nowrap">{data.width}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="pt-2 whitespace-nowrap border-r border-light-gray">Length(C)</td>
                                                                        <td className="px-4 pt-2  whitespace-nowrap">{data.length}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className=" pt-2 whitespace-nowrap border-r border-light-gray">Temper</td>
                                                                        <td className="px-4 pt-2  whitespace-nowrap">{data.temper}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className=" pt-2 whitespace-nowrap border-r border-light-gray">Source</td>
                                                                        <td className="px-4 pt-2  whitespace-nowrap">{data.source}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex items-center">
                                            <span className="text-sm font-semibold"></span>&nbsp;<span className="font-bold text-xl">$120<sup>00</sup></span>&nbsp;
                                        </div>
                                    </div>

                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}