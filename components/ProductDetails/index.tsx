import Counter from "../Counter";
import { ReadMore } from "../ReadMore";

export default function ProductDetails() {
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

      <div className="xl:w-236 lg:w-3/6 w-80">
        <div className="bg-white p-7">
          <img className="w-full" alt="Aluminum Plate" src="./product-1.png" />
        </div>
      </div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="bg-white p-7">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">6061 Aluminum Plate 0.25"</h1>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">$153<sup>83</sup></h1>
          </div>
          <div className="py-4 flex items-center justify-between">
            {/* <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Colours</p> */}
            <ReadMore>
            6061-T651 Aluminum is...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, faucibus eu venenatis quis, convallis non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, faucibus eu venenatis quis, convallis non nisi.
            </ReadMore>
          </div>
          {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
      <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Size</p>
      <div className="flex items-center justify-center">
        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">38.2</p>
        <svg className="text-gray-300 dark:text-white cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div> */}
          <div className="flex items-center w-10/12">
            <label htmlFor="countries" className="block mb-2 mr-3 text-sm font-medium text-gray-900 dark:text-white flex items-center">Thickness(A)</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a Thickness</option>
              <option value="US">0.25</option>
              <option value="CA">0.50</option>
              <option value="FR">0.75</option>
              <option value="DE">0.85</option>
            </select>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-6 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Width(B)</label>

            <div className="relative inline-flex items-center">
              <input type="radio" id="option1" name="radio-group" className="hidden" />
              <label htmlFor="option1" className="cursor-pointer bg-white border border-gray-300 p-2">
                48.5
              </label>
            </div>
            <div className="relative inline-flex items-center">
              <input type="radio" id="option2" name="radio-group" className="hidden" />
              <label htmlFor="option2" className="cursor-pointer bg-white border border-gray-300 p-2">
                68.5
              </label>
            </div>
            <div className="relative inline-flex items-center">
              <input type="radio" id="option3" name="radio-group" className="hidden" />
              <label htmlFor="option3" className="cursor-pointer bg-white border border-gray-300 p-2">
                Custom
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-4 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Length(C)</label>

            <div className="relative inline-flex items-center">
              <input type="radio" id="length1" name="radio-group1" className="hidden" />
              <label htmlFor="length1" className="cursor-pointer bg-white border border-gray-300 p-2">
                144.5
              </label>
            </div>
            <div className="relative inline-flex items-center">
              <input type="radio" id="length2" name="radio-group1" className="hidden" />
              <label htmlFor="length2" className="cursor-pointer bg-white border border-gray-300 p-2">
                Custom
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="block mb-2 mr-2-3 text-sm font-medium text-gray-900 dark:text-white flex items-center mt-2">Source</label>

            <div className="relative inline-flex items-center">
              <input type="radio" id="source1" name="radio-group1" className="hidden" />
              <label htmlFor="source1" className="cursor-pointer bg-white border border-gray-300 p-2">
                Domestic
              </label>
            </div>
            <div className="relative inline-flex items-center">
              <input type="radio" id="source2" name="radio-group1" className="hidden" />
              <label htmlFor="source2" className="cursor-pointer bg-white border border-gray-300 p-2">
                Import
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <p className="font-bold mt-4">$303</p>
            <Counter />

          </div>
          <div className="mt-4">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-72">Add to Cart</button>

          </div>
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Schedule a recurring Order</label>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Code: 8BN321AF2IF0NYA</p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Length: 13.2 inches</p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Height: 10 inches</p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Depth: 5.1 inches</p>
            <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div data-menu className="flex justify-between items-center cursor-pointer">
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
                <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                  <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable</div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div data-menu className="flex justify-between items-center cursor-pointer">
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
                <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                  <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">If you have any questions on how to return your item to us, contact us.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}