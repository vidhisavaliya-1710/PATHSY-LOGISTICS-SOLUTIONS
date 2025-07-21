import React from 'react';
import { MapPin, Phone, Mail, Clock, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#e6f2ff] py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 mb-2">Contact Us</h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto px-4 sm:px-0">
            Ready to elevate your exhibition experience or streamline your logistics? Get in
            touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mx-0 sm:mx-4 md:mx-7">
          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px] md:h-full">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95065306587!2d76.76354931726667!3d28.64428744177972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1753075881620!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Corporate Office */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Corporate Office</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Mumbai, Maharashtra, India</p>
                    <p className="text-gray-500 text-xs sm:text-sm">PAN India Network - 50+ Cities</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 123 456 7890</p>
                    <p className="text-gray-500 text-xs sm:text-sm">24/7 Support Available</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base break-all">info@pratheylogistics.com</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Quick Response Guaranteed</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#004c99] p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
