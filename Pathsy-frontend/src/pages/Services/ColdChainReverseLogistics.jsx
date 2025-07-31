import React from 'react'
import {
  FaThermometerHalf,
  FaChartLine,
  FaTruckLoading,
  FaRecycle,
  FaRetweet,
  FaLeaf,
} from "react-icons/fa";
import { Pill, Apple, Laptop, HeartPulse } from 'lucide-react';


function ColdChainReverseLogistics() {
    const coldChainServices = [
  {
    icon: <FaThermometerHalf className="text-white w-5 h-5" />,
    title: "Perfect Temperature, Every Mile",
    description: "From frozen to chilled, we keep it consistent. Precise temperature control throughout the entire journey.",
  },
  {
    icon: <FaChartLine className="text-white w-5 h-5" />,
    title: "Live Condition Tracking",
    description: "Monitor temperature and location in real-time. Instant alerts if conditions change.",
  },
  {
    icon: <FaTruckLoading className="text-white w-5 h-5" />,
    title: "Specialized Vehicles",
    description: "Fully equipped for delicate, high-value cargo. Advanced refrigeration systems and monitoring.",
  },
];

const reverseLogisticsServices = [
  {
    icon: <FaRetweet className="text-white w-5 h-5" />,
    title: "Seamless Returns & Recalls",
    description: "Fast, organized, and stress-free. Streamlined processes for all return scenarios.",
  },
  {
    icon: <FaRecycle className="text-white w-5 h-5" />,
    title: "Refurbish, Reuse, Redistribute",
    description: "Smarter handling of returned goods. Maximize value recovery and minimize waste.",
  },
  {
    icon: <FaLeaf className="text-white w-5 h-5" />,
    title: "Sustainable Disposal",
    description: "Safe, eco-friendly, and compliant. Responsible handling of end-of-life products.",
  },
];

const industries = [
  { icon: <Pill className="text-white w-6 h-6" />, title: 'Pharmaceuticals',bgColor:'bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] ' },
  { icon: <Apple className="text-white w-6 h-6" />, title: 'Food & Beverage',bgColor:"bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] " },
  { icon: <Laptop className="text-white w-6 h-6" />, title: 'Electronics',bgColor:"bg-gradient-to-br from-[#0052cc] to-[#26a69a]" },
  { icon: <HeartPulse className="text-white w-6 h-6" />, title: 'Healthcare',bgColor:"bg-gradient-to-br from-[#0052cc] to-[#26a69a]" },
];

  return (
   <>
         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
                                Specialized Logistics
                            </div>
                            <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Cold Chain & <span className="text-transparent bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] bg-clip-text">Reverse Logistics</span>
                            </h1>
                            <p className="text-2xl text-gray-500 mb-4 max-w-2xl mx-auto font-semibold">
                                Fresh In. Easy Out. Always On Time.
                            </p>
                            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[18px] mb-5">
                                When products need special care or a smooth return – we make it effortless. Our cold chain logistics keeps temperature-sensitive goods perfectly preserved, while our reverse logistics ensures returns and recalls are handled quickly and hassle-free.
                            </p>
                        </div>
        
                        {/* ======= */}
        
                        {/* Feature Cards Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  {/* Cold Chain Logistics */}
  <div className="bg-white rounded-2xl shadow-md p-8">
    <div className='text-center mb-7'>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2] mb-4">
      <FaThermometerHalf className="text-white w-6 h-6" />
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-2">Cold Chain Logistics</h3>
    </div>
    <div className="space-y-4 mb-6">
      {coldChainServices.map((item, index) => (
        <div key={index} className="flex gap-4 items-center">
           <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2]  rounded-lg">
    {item.icon}
  </div>

          <div>
            <h4 className="font-semibold  text-gray-800">{item.title}</h4>
            <p className="text-[#777777] text-sm ">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-around text-center text-sm font-medium text-red-700 border-t pt-4 border-red-100">
      <div>
        <p className="text-lg font-bold">±0.5°C</p>
        <p>Precision</p>
      </div>
      <div>
        <p className="text-lg font-bold">100%</p>
        <p>Monitored</p>
      </div>
      <div>
        <p className="text-lg font-bold">24/7</p>
        <p>Support</p>
      </div>
    </div>
  </div>

  {/* Reverse Logistics */}
  <div className="bg-white rounded-2xl shadow-md p-8">
    <div className='text-center mb-7'>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#26a69a] mb-4">
      <FaRecycle className="text-white w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Reverse Logistics</h3>
    </div>
    <div className="space-y-4 mb-6">
      {reverseLogisticsServices.map((item, index) => (
        <div key={index} className="flex gap-4 items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-lg">
  {item.icon}
</div>

          <div>
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-[#777777] text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className=" flex justify-around text-center text-sm font-medium text-blue-700 border-t pt-4 border-blue-100">
      <div>
        <p className="text-lg font-bold">48h</p>
        <p>Processing</p>
      </div>
      <div>
        <p className="text-lg font-bold">95%</p>
        <p>Recovery Rate</p>
      </div>
      <div>
        <p className="text-lg font-bold">Zero</p>
        <p>Waste Policy</p>
      </div>
    </div>
  </div>
</div>

        
                        {/* Seamless Exhibitions Strip */}
                        <div className="rounded-2xl bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] text-white text-center py-12 px-6 mb-16">
                            <h2 className="text-3xl sm:text-3xl font-bold mb-4">Precision Technology + Expert Handling</h2>
                            <p className="text-white/90 max-w-3xl mx-auto mb-10">
                                We combine precision technology with expert handling so your goods arrive fresh, and returns move back without delays. From temperature-sensitive pharmaceuticals to complex electronics returns.
                            </p>
                            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
              <div className="text-blue-100 text-sm sm:text-base">Temperature Accuracy</div>
            </div>
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">72h</div>
              <div className="text-blue-100 text-sm sm:text-base">Return Processing</div>
            </div>
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-blue-100 text-sm sm:text-base">Compliance</div>
            </div>
            <div className="p-4  rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-blue-100 text-sm sm:text-base">Monitoring</div>
            </div>
          </div>
                        </div>


                        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 text-center mb-10 border border-[#e0e0e0]">
                            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] bg-clip-text mb-4">From the first mile to the last mile and back again – we've got you covered.</h2>
                           
                            
                        </div>
        

                        <section className="bg-[#f7fbff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center`}>
                {item.icon}
              </div>
              <h3 className="text-gray-800 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>


                        {/* CTA Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center mb-10 border border-[#e0e0e0]">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Specialized Logistics Solutions?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                                Whether it's keeping products at the perfect temperature or managing complex returns, our specialized logistics solutions ensure your goods are handled with the care they deserve.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                                <button className="bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2]  text-white px-6 py-3 rounded-xl font-semibold transition">
                                    Streamline Cold Chain & Reverse Logistics Today →
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
   </>
  )
}

export default ColdChainReverseLogistics