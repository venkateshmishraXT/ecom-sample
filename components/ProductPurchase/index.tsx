import React from "react"

export default function ProductPurchase() {
    const productPurchases = [
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:1
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:2
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:3
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:4
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:5
        },
        {
            name: "abc",
            width: 13,
            length: 12,
            temper: "T651",
            source: "Import",
            price: "12",
            id:6
        }
    ]
    return (
        <div className="mx-auto ">
            <div className="shadow shadow-gray-600 bg-white  m-8">
                <p className="pl-8 pt-8 font-bold">Frequently purchased togrther</p>
            <div className="flex flex-wrap -mx-6 px-8">
                {
                    productPurchases.map(data => (
                        <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/6 p-4" key={data.id}>
                        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                        <div className="relative pb-48 overflow-hidden">
                          <img className="absolute inset-0 h-full w-full object-cover" src="../images/fixed-aspect-ratio-spacer.png" alt="Frequently purchased togrther

" />
                        </div>
                        <div className="p-4">
                          <h2 className="mt-2 mb-4  font-bold">{data.name}</h2>
                          <div className="container mx-auto pb-6 flex">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                  <div className="overflow-hidden sm:rounded-lg">
                    <table className="min-w-full">
                      <tbody className="bg-white font-light text-sm">
                       
                        <tr>
                          <td className=" pr-4 whitespace-nowrap border-r border-light-gray">Width(B)</td>
                          <td className="px-4   whitespace-nowrap">0.25</td>
                        </tr>
                        <tr>
                          <td className="pt-2 whitespace-nowrap border-r border-light-gray">Length(C)</td>
                          <td className="px-4 pt-2  whitespace-nowrap">200</td>
                        </tr>
                       
                       
                        <tr>
                          <td className=" pt-2 whitespace-nowrap border-r border-light-gray">Temper</td>
                          <td className="px-4 pt-2  whitespace-nowrap">T651</td>
                        </tr>
                        <tr>
                          <td className=" pt-2 whitespace-nowrap border-r border-light-gray">Source</td>
                          <td className="px-4 pt-2  whitespace-nowrap">Import</td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
                          {/* <p className="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p> */}
                          <div className="mt-3 flex items-center">
                            <span className="text-sm font-semibold"></span>&nbsp;<span className="font-bold text-xl">$45<sup>00</sup></span>&nbsp;
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