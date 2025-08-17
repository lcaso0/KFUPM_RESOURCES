"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, Users } from "lucide-react";
import { easeInOut, easeOut, motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/kfupm-hero-bg.svg')` }}
        initial={{ scale: 1.05, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-geometric-pattern opacity-5" />


      <div className="container pt-24 md:pt-0 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight px-2 tracking-wide">
              Verified Resource Hub
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-diwani font-bold text-secondary mb-6 sm:mb-8 leading-relaxed px-2 tracking-wide drop-shadow-lg">
              مركز الموارد المعتمدة
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-3 sm:mb-4 font-cairo px-4 max-w-3xl mx-auto">
              Your trusted academic companion at KFUPM
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-light font-noto-arabic px-4 max-w-3xl mx-auto">
              رفيقك الأكاديمي الموثوق في جامعة الملك فهد للبترول والمعادن
            </p>
          </motion.div>

          {/* Features Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            {[
              { icon: Shield, text: "Verified Content" },
              { icon: BookOpen, text: "Academic Resources" },
              { icon: Users, text: "Student Community" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-primary-foreground text-xs sm:text-sm lg:text-base"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-secondary" />
                <span className="font-cairo whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary-dark font-cairo text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow w-full sm:w-auto min-w-[200px]"
              >
                Explore Resources
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-primary font-cairo text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px] border-2"
              >
                استكشف الموارد
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4"
            variants={containerVariants}
          >
            {[
              { number: "1000+", title: "Verified Resources", titleAr: "موارد معتمدة" },
              { number: "5000+", title: "Active Students", titleAr: "طالب نشط" },
              { number: "50+", title: "Departments", titleAr: "قسم أكاديمي" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-2 font-cairo"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-primary-foreground/80 font-cairo">{stat.title}</div>
                <div className="text-xs sm:text-sm text-secondary-light font-noto-arabic">{stat.titleAr}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full hidden lg:block" 
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-primary-light/20 rounded-full hidden lg:block" 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-8 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-secondary-light/20 rounded-full hidden lg:block" 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
    </section>
  );
};

export default Hero;
