import React from 'react'
import {
    Plane,
    FileCheck,
    Warehouse,
    Truck,
    Undo2,
    Ruler,
    Image,
    Lightbulb,
    Sofa,
    Users,
} from "lucide-react";
import { Headset } from 'lucide-react';
import { Link } from 'react-router-dom';


function ExhibitionLogisticsDesign() {
    const logisticsServices = [
        {
            icon: <Plane className="text-white w-5 h-5" />,
            title: "Global Freight & Transport",
            description: "Air, sea, and road shipment of exhibition materials worldwide.",
        },
        {
            icon: <FileCheck className="text-white w-5 h-5" />,
            title: "Customs & Compliance",
            description: "Smooth import/export clearance and documentation handling.",
        },
        {
            icon: <Warehouse className="text-white w-5 h-5" />,
            title: "Secure Storage Solutions",
            description: "Short or long-term warehousing for your exhibit items.",
        },
        {
            icon: <Truck className="text-white w-5 h-5" />,
            title: "On-Site Delivery & Handling",
            description: "Timely unloading, unpacking, and setup coordination.",
        },
        {
            icon: <Undo2 className="text-white w-5 h-5" />,
            title: "Post-Event Reverse Logistics",
            description: "Efficient dismantling and return shipping services.",
        },
    ];

    const boothDesignServices = [
        {
            icon: <Ruler className="text-white w-5 h-5" />,
            title: "Custom Booth Design & Fabrication",
            description: "Tailored designs that reflect your brand identity and goals.",
        },
        {
            icon: <Image className="text-white w-5 h-5" />,
            title: "Branding, Graphics & Visual Displays",
            description: "Eye-catching visuals that communicate your message effectively.",
        },
        {
            icon: <Lightbulb className="text-white w-5 h-5" />,
            title: "Lighting & Technology Integration",
            description: "Modern lighting and tech solutions for maximum impact.",
        },
        {
            icon: <Sofa className="text-white w-5 h-5" />,
            title: "Furniture, Fixtures & Accessories",
            description: "Complete furnishing solutions for comfort and functionality.",
        },
        {
            icon: <Users className="text-white w-5 h-5" />,
            title: "On-Site Supervision & Support",
            description: "Dedicated team ensuring flawless execution and support.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
                        Smart Storage
                    </div>
                    <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Effortless  <span className="text-transparent bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] bg-clip-text">Exhibitions.</span>
                    </h1>
                    <p className="text-2xl text-gray-500 mb-4 max-w-2xl mx-auto font-semibold">
                        Impressive Booths. On-Time Every Time.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[18px] mb-5">
                        At Pathsy Logistics Solutions, we make exhibitions hassle-free. From moving your display materials
                        worldwide to designing and setting up captivating booths, we handle it all.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-[16px]">
                        Our goal is to ensure you
                        walk into a perfectly prepared space, ready to showcase your brand and connect with potential
                        clients.
                    </p>
                </div>

                {/* ======= */}

                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
                    {/* Logistics Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-6 sm:p-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#d32f2f] mb-4">
                            <Plane className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Exhibition Logistics Services</h3>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            We provide end-to-end logistics solutions for exhibitions across the globe:
                        </p>
                        <div className="space-y-4">
                            {logisticsServices.map((service, index) => (
                                <div key={index} className="flex items-start gap-3 sm:gap-4">
                                    <div className="bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] rounded-lg p-2">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{service.title}</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Booth Design Card */}
                    <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-md p-6 sm:p-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#7b1fa2] mb-4">
                            <Ruler className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Booth Design & Setup</h3>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            Your booth is your first impression — make it count.
                        </p>
                        <div className="space-y-4">
                            {boothDesignServices.map((service, index) => (
                                <div key={index} className="flex items-start gap-3 sm:gap-4">
                                    <div className="bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] text-[#0052cc] rounded-lg p-2">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{service.title}</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Seamless Exhibitions Strip */}
                <div className="rounded-2xl bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2] text-white text-center py-12 px-6 mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Seamless Exhibitions, Start to Finish</h2>
                    <p className="text-white/90 max-w-3xl mx-auto mb-10">
                        We combine precision logistics with creative booth management to deliver flawless exhibition
                        experiences so you can focus on building relationships and winning clients.
                    </p>
                    <div className=" gap-6 max-w-4xl mx-auto text-left">

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 space-y-6 lg:space-y-0">
                            {/* Step 1 */}
                            <div className="flex items-start gap-4 flex-1">
                                <div className="bg-white/20 p-2 rounded-md">
                                    <Ruler className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 text-white">1. Planning & Design</h4>
                                    <p className="text-white/80">
                                        Custom booth design and logistics planning tailored to your needs.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start gap-4 flex-1">
                                <div className="bg-white/20 p-2 rounded-md">
                                    <Truck className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 text-white">2. Transport & Setup</h4>
                                    <p className="text-white/80">
                                        Global shipping and professional on-site installation.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start gap-4 flex-1">
                                <div className="bg-white/20 p-2 rounded-md">
                                    <Headset className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 text-white">3. Support & Success</h4>
                                    <p className="text-white/80">
                                        Ongoing support during your event and post-event logistics.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center mb-10 border border-[#e0e0e0]">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Plan Your Next Exhibition?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Let us handle the logistics while you focus on your business. Get a custom exhibition plan designed specifically for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                        <Link to="/contact" className="bg-gradient-to-r from-[#d32f2f] to-[#7b1fa2]  text-white px-6 py-3 rounded-xl font-semibold transition">
                            Get Your Exhibition Plan Today!
                        </Link>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default ExhibitionLogisticsDesign