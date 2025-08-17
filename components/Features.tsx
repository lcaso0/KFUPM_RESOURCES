"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Shield, Search, Download, Users, Zap } from "lucide-react";
import { easeOut, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Verified Content",
      titleAr: "محتوى معتمد",
      description: "All resources are reviewed and verified by KFUPM faculty members to ensure academic quality and accuracy.",
      descriptionAr: "جميع الموارد تم مراجعتها والتحقق منها من قبل أعضاء هيئة التدريس بجامعة الملك فهد",
      badge: "Quality Assured"
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Smart Search",
      titleAr: "بحث ذكي",
      description: "Advanced search functionality to quickly find exactly what you need across all departments and subjects.",
      descriptionAr: "وظائف بحث متقدمة للعثور بسرعة على ما تحتاجه عبر جميع الأقسام والمواد",
      badge: "AI Powered"
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Easy Access",
      titleAr: "وصول سهل",
      description: "Download or access resources instantly with your KFUPM credentials. Available 24/7 from anywhere.",
      descriptionAr: "قم بتحميل أو الوصول إلى الموارد فوراً باستخدام بيانات اعتماد جامعة الملك فهد",
      badge: "24/7 Available"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Driven",
      titleAr: "مجتمعي التوجه",
      description: "Students can contribute, rate, and discuss resources. Build knowledge together as a community.",
      descriptionAr: "يمكن للطلاب المساهمة وتقييم ومناقشة الموارد. ابني المعرفة معاً كمجتمع",
      badge: "Collaborative"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Comprehensive Library",
      titleAr: "مكتبة شاملة",
      description: "Covers all KFUPM departments with lecture notes, past exams, projects, and supplementary materials.",
      descriptionAr: "تغطي جميع أقسام جامعة الملك فهد مع الملاحظات والامتحانات السابقة والمشاريع",
      badge: "Complete Coverage"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast & Reliable",
      titleAr: "سريع وموثوق",
      description: "Lightning-fast loading times and reliable access ensure you can study efficiently without interruptions.",
      descriptionAr: "أوقات تحميل سريعة ووصول موثوق يضمن لك الدراسة بكفاءة دون انقطاع",
      badge: "High Performance"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section ref={ref} id="features" className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-foreground mb-3 sm:mb-4 px-4">
            Why Choose Our Platform?
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-noto-arabic font-bold text-primary mb-4 sm:mb-6 px-4">
            لماذا تختار منصتنا؟
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-cairo px-4 leading-relaxed">
            Discover the features that make us the most trusted academic resource platform at KFUPM
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              <Card className="h-full group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-medium bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="mx-auto mb-3 bg-secondary/20 text-secondary-dark border-secondary/30 text-xs sm:text-sm">
                      {feature.badge}
                    </Badge>
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl font-cairo text-foreground group-hover:text-primary transition-colors px-2">
                    {feature.title}
                  </CardTitle>
                  <CardTitle className="text-base sm:text-lg font-noto-arabic text-primary mb-2 px-2">
                    {feature.titleAr}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-muted-foreground font-cairo mb-3 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground font-noto-arabic text-xs sm:text-sm leading-relaxed">
                    {feature.descriptionAr}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-soft max-w-2xl mx-auto mx-4">
            <h4 className="text-xl sm:text-2xl font-cairo font-bold text-foreground mb-2">
              Ready to Get Started?
            </h4>
            <h5 className="text-lg sm:text-xl font-noto-arabic font-bold text-primary mb-4">
              مستعد للبدء؟
            </h5>
            <p className="text-muted-foreground font-cairo mb-6 text-sm sm:text-base leading-relaxed">
              Join thousands of KFUPM students who are already using our platform to excel in their studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 font-cairo font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-glow text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Resources
              </motion.button>
              <motion.button 
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-cairo font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More | اعرف أكثر
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
