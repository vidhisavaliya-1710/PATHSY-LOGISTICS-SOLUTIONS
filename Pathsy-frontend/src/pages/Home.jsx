import React from 'react';
import banner from '../assets/images/banner.png';
import { Quote, Settings } from 'lucide-react';
import AboutUs from './AboutUs'
import Services from './Services';
import HelpAndSupport from './HelpAndSupport';
import Careers from './Carrers';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { Zap, Shield, Bot, ArrowRight, Cpu, Truck, Database } from 'lucide-react';



function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Automated Route Optimization",
      description: "Faster deliveries, lower fuel costs.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tamper-Proof Documentation",
      description: "Secure digital contracts & invoices.",
      gradient: "from-orange-400 to-orange-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Smart Warehouse Robotics",
      description: "Precision in inventory handling.",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  const techIcons = [
    { icon: <Cpu className="w-6 h-6" />, label: "AI" },
    { icon: <Database className="w-6 h-6" />, label: "IoT" },
    { icon: <Shield className="w-6 h-6" />, label: "Blockchain" }
  ];
  return (
    <>

     
    </>
  );
}

export default Home;

