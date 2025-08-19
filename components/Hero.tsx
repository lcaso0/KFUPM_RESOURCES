"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, Users } from "lucide-react";
import { easeInOut, easeOut, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const letters = ["K", "F", "U", "P", "M"];

  const colors =
    theme === "dark"
      ? ["#fafafa", "#d9a520", "#fafafa"]
      : ["#2e9e75", "#d9a520", "#2e9e75"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Arabic-themed Background */}
      <div className="absolute inset-0 arabic-calligraphy-bg" />

      {/* Arabic Geometric Pattern Overlay */}
      <div className="absolute inset-0 arabic-mosaic-overlay opacity-30" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-sm hidden lg:block animate-arabic-float"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-secondary dark:bg-primary/20 rounded-full blur-sm hidden lg:block animate-arabic-glow"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
      </div>

      {/* Falling KFUPM Particles */}
      {/* {[...Array(25)].map((_, i) => ( */}
      {/*   <motion.div */}
      {/*     key={`particle-${i}`} */}
      {/*     className="absolute text-gold/50 font-bold pointer-events-none" */}
      {/*     initial={{ */}
      {/*       y: -100, */}
      {/*       x: Math.random() * window.innerWidth, */}
      {/*       opacity: 0, */}
      {/*     }} */}
      {/*     animate={{ */}
      {/*       y: window.innerHeight + 100, */}
      {/*       opacity: [0, 0.8, 0.8, 0], */}
      {/*       rotate: Math.random() * 360, */}
      {/*     }} */}
      {/*     transition={{ */}
      {/*       duration: 12 + Math.random() * 8, */}
      {/*       repeat: Infinity, */}
      {/*       delay: Math.random() * 12, */}
      {/*       ease: "linear", */}
      {/*     }} */}
      {/*     style={{ */}
      {/*       fontSize: `${18 + Math.random() * 20}px`, */}
      {/*       left: `${Math.random() * 100}%`, */}
      {/*     }} */}
      {/*   > */}
      {/*     {["KFUPM", "#67", "📚", "🎓", "📖", "✨", "🏛️", "🔬", "⚗️", "📊", "📝", "🎯"][Math.floor(Math.random() * 12)]} */}
      {/*   </motion.div> */}
      {/* ))} */}

      <div className="container pt-24 md:pt-0 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary dark:text-white mb-4 sm:mb-6 leading-tight px-2 tracking-wide">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: i * 0.2,
                  }}
                  className="inline-block"
                >
                  <motion.span
                    animate={{
                      color: colors
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: i * 0.2,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}{" "}
              Resource Hub
            </h1>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-diwani font-bold text-secondary dark:text-primary mb-6 sm:mb-8 leading-relaxed px-2 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.8 }}
            >
              مركز الموارد لجامعة الملك فهد للبتدول والمعادن
            </motion.h2>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-3 sm:mb-4 font-cairo px-4 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              Your trusted academic source at KFUPM
            </motion.p>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-primary font-noto-arabic px-4 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              مصدرك الأكاديمي الموثوق في جامعة الملك فهد للبترول والمعادن
            </motion.p>
          </motion.div>

          {/* Enhanced Features Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            {[
              { icon: Shield, text: "Verified Content" },
              { icon: BookOpen, text: "Academic Resources" },
              { icon: Users, text: "Student Community" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-accent/5 backdrop-blur-md rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-primary text-xs sm:text-sm lg:text-base border-4 border-accent/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.6 + index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-primary" />
                <span className="font-cairo whitespace-nowrap">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <Link href="/resources">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark font-cairo text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-primary w-full sm:w-auto min-w-[200px] transition-all duration-300"
                >
                  Explore Resources
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              <Link href="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="!border-primary bg-white/5 text-primary hover:!bg-primary hover:text-base font-cairo text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px] border-2 hover:!border-primary-dark transition-all duration-300"
                >
                  استكشف الموارد
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 pb-4 md:pb-0 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                number: "1000+",
                title: "Verified Resources",
                titleAr: "موارد معتمدة",
              },
              {
                number: "5000+",
                title: "Active Students",
                titleAr: "طالب نشط",
              },
              { number: "50+", title: "Departments", titleAr: "قسم أكاديمي" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-4 border-primary/30 hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.2 + index * 0.1 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-cairo"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 3.4 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-base sm:text-lg font-semibold text-accent font-cairo mb-1">
                  {stat.title}
                </div>
                <div className="text-sm font-noto-arabic">{stat.titleAr}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
