'use client'
import useCabStore from '../store/CabStore.js'

function PricingDetails(){
  const { setShowPricing } = useCabStore();
  return (
    <div className="fixed top-0 left-0 sm:static sm:mt-10 sm:mb-8 border-4 border-black bg-[#D6F527] shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none p-6 transition-all duration-300 ease-in-out w-full overflow-y-auto max-h-screen">
      <span onClick={() => setShowPricing(false)} 
            className="cursor-pointer float-right text-black font-extrabold hover:text-purple-400 hover:bg-gray-800 transition-all duration-200 ease-in-out active:text-purple-400 active:bg-gray-800">X</span>

      <div className='overflow-x-auto w-full shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-black border-purple-400 border-4 ">
                      <tr>
                        <th colSpan="4" className="text-center text-base sm:text-lg font-extrabold py-3 text-yellow-300 ">
                          Pricing Details
                        </th>
                      </tr>
                    </thead>

                    <thead className="bg-gray-100 border-l-3  border-r-4 border-t-0 border-b-0 border-black">
                      <tr className='border-b-3 border-l-0 border-r-0 border-t-0 border-gray-400 border-dashed'>
                        <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Category</th>
                        <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Base Fare (₹)</th>
                        <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Minimum Fare (₹)</th>
                        <th className="px-4 py-2 text-left text-sm font-bold text-gray-900">Rate per KM</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 border-b border-l-3  border-r-4 border-t-0 border-b-4 border-black">
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🏍️ Bike</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">20</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">35</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">12/km</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🛺 Auto</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">25</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">45</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">15/km</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🚗 Mini</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">35</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">70</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">20/km</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🚘 Sedan</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">45</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">90</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">27/km</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🚙 Prime SUV</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">60</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">120</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">38/km</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🛞 Lux</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">100</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">250</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">75/km</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm sm:text-base">🚞 Intercity</td>
                        <td className="px-4 py-2 text-rose-700 font-semibold text-sm sm:text-base">60</td>
                        <td className="px-4 py-2 text-orange-500 font-semibold text-sm sm:text-base">300</td>
                        <td className="px-4 py-2 text-green-700 font-semibold text-sm sm:text-base">14/km</td>
                      </tr>
                    </tbody>
                  </table>
      </div>

      <div className="bg-yellow-50 mt-2 p-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] border-3 border-gray-400 border-dashed mt-4">
        <h1 className="text-center text-lg sm:text-xl font-extrabold text-yellow-600">💸 How Your Fare Is Calculated</h1>
            <ul className="mt-4 text-sm text-gray-800 font-medium list-disc list-inside space-y-2">
              <li className='text-sm sm:text-base'>🚀 <span className="font-bold text-sm sm:text-base">Base Fare</span> + 📏 <span className="font-bold text-sm sm:text-base">Distance × Rate/km</span></li>
              <li className='text-sm sm:text-base'>🛡️ If total is less than minimum fare → we charge the <span className="font-bold text-sm sm:text-base">minimum fare</span></li>
              <li className='text-sm sm:text-base'>🎯 Final fare = <span className="font-bold text-sm sm:text-base">A Range From Min to Max</span> (Traffic, etc.)</li>
              <li className='text-sm sm:text-base'>⚡ Prices may vary due to demand, traffic, or peak hours</li>
              <li className='text-sm sm:text-base'>⬆️ Prices May Hike<span className="font-bold text-sm sm:text-base"> 20% - 50% (Surge)</span> due to demand & availability</li>
            </ul>
            <p className="text-center text-[11px] sm:text-sm font-semibold text-gray-500 mt-4">
              *Subject to change based on real-time factors 🌐
            </p>
      </div>
      {/* intercity */}
      <div className="bg-green-50 mt-2 p-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] border-3 border-gray-400 border-dashed mt-4">
        <h1 className="text-center text-lg sm:text-xl font-extrabold text-pink-600">🚙 I Want InterCity Cab </h1>
        <p className='text-center text-sm m:text-base font-bold mt-2'>Please Note That InterCity Cabs are available only for:</p>
        <ul className="mt-4 text-sm text-gray-800 font-medium list-disc list-inside space-y-2">
          <li className='text-sm sm:text-base'>🏙️➡️🏙️ <span className='font-bold'>Inter-city rides</span> or</li>
          <li className='text-sm sm:text-base'>📏 If the <span className='font-bold'>distance is more than 50 km </span></li>
        </ul>
        <p className='text-center text-[11px] sm:text-sm font-semibold text-gray-600 mt-4'>🚨 There's no special switch for this. If your ride meets the condition, the InterCity Cab option will automatically show up! 😄</p>
      </div>
    </div>

  )
}

export default PricingDetails