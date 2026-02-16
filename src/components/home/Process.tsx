import { motion } from "framer-motion";
import { Upload, Calculator, CreditCard, FileCheck } from "lucide-react";

const steps = [
  { icon: Upload, title: "ارسال فایل", desc: "آپلود فایل مقاله و مشخص کردن زمینه تخصصی" },
  { icon: Calculator, title: "دریافت قیمت", desc: "قیمت‌گذاری رایگان در ۱ ساعت و انتخاب سطح کیفیت" },
  { icon: CreditCard, title: "پرداخت امن", desc: "پرداخت آنلاین یا کارت به کارت با تضمین امنیت" },
  { icon: FileCheck, title: "ترجمه و تحویل", desc: "ترجمه توسط متخصص و تحویل به موقع + پشتیبانی" },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">فرآیند ثبت سفارش</h2>
          <p className="text-muted-foreground text-lg">در ۴ مرحله ساده، مقاله خود را ترجمه کنید</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 right-[12.5%] left-[12.5%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-full gradient-section flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full w-7 h-7 leading-7 mb-3">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-6">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
