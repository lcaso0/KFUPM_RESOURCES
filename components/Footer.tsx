"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-background to-primary-dark/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <motion.div 
            className="col-span-1 sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <motion.div 
                 className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gold-light rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src="/kfupm-logo.svg" 
                  alt="KFUPM Logo" 
                  className="w-12 h-12 md:w-14 md:h-14 brightness-100" 
                />
              </motion.div>
              <div>
                 <h3 className="font-cairo font-bold text-primary text-lg sm:text-xl">KFUPM Resource Hub</h3>
                 <p className="font-noto-arabic text-white text-sm sm:text-base">مركز الموارد</p>
              </div>
            </div>
            <p className="text-primary/80 font-cairo mb-3 sm:mb-4 max-w-md text-sm sm:text-base leading-relaxed">
              Empowering KFUPM students with verified academic resources, fostering excellence in education and research.
            </p>
            <p className="text-white font-noto-arabic text-xs sm:text-sm max-w-md leading-relaxed">
              تمكين طلاب جامعة الملك فهد بموارد أكاديمية معتمدة، وتعزيز التميز في التعليم والبحث
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-cairo font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <h5 className="font-noto-arabic font-semibold text-gold-light mb-3 sm:mb-4 text-sm sm:text-base">روابط سريعة</h5>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "#home", text: "Home | الرئيسية" },
                { href: "#features", text: "Features | المميزات" },
                { href: "#resources", text: "Resources | الموارد" },
                { href: "#contact", text: "Contact | تواصل" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a 
                    href={link.href} 
                     className="text-primary/80 hover:text-gold transition-colors font-cairo text-sm sm:text-base block py-1"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-cairo font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h4>
            <h5 className="font-noto-arabic font-semibold text-gold-light mb-3 sm:mb-4 text-sm sm:text-base">تواصل معنا</h5>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "KFUPM Campus",
                  subtitle: "جامعة الملك فهد للبترول والمعادن"
                },
                {
                  icon: Mail,
                  title: "support@vrh.kfupm.edu.sa",
                  subtitle: null
                },
                {
                  icon: Phone,
                  title: "+966 13 860 0000",
                  subtitle: null
                }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                   <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                   <p className="text-primary/80 font-cairo text-xs sm:text-sm break-words">{contact.title}</p>
                     {contact.subtitle && (
                        <p className="text-gold/80 font-noto-arabic text-xs leading-relaxed">{contact.subtitle}</p>
                     )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gold-light/20 mt-8 sm:mt-12 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-primary/60 font-cairo text-xs sm:text-sm text-center sm:text-left">
               © 2024 Verified Resource Hub - KFUPM. All rights reserved.
             </p>
             <p className="text-gold/70 font-noto-arabic text-xs sm:text-sm text-center sm:text-right">
               جميع الحقوق محفوظة - جامعة الملك فهد للبترول والمعادن
             </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
