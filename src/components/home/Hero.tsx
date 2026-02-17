import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, CheckCircle, GraduationCap, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Star, label: "۴.۹/۵ رضایت مشتریان", color: "text-accent" },
  { icon: CheckCircle, label: "۱۰۰۰+ مقاله انگلیسی ترجمه شده", color: "text-secondary" },
  { icon: GraduationCap, label: "مترجمان دکتری و ارشد", color: "text-primary" },
  { icon: Zap, label: "تحویل فوری در ۲۴-۴۸ ساعت", color: "text-accent" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="سایت ترجمه مقاله - ترجمه انگلیسی به فارسی و فارسی به انگلیسی" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-section opacity-90" />
      </div>

      <div className="section-container relative z-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6 text-balance">
            بهترین سایت ترجمه مقاله
            <br />
            <span className="opacity-90">ترجمه انگلیسی به فارسی و فارسی به انگلیسی</span>
          </h1>
          <h2 className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-light">
            خدمات ترجمه تخصصی مقاله انگلیسی | ترجمه رسمی | تحویل سریع | گارانتی کیفیت
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact" className="btn-primary-glow !bg-primary-foreground !text-primary rounded-xl">
              ثبت سفارش رایگان
            </Link>
            <Link to="/pricing" className="btn-secondary-outline !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary rounded-xl">
              محاسبه قیمت آنلاین
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-primary-foreground text-sm font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
