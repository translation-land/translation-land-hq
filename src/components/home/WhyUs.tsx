import { motion } from "framer-motion";
import { CheckCircle, DollarSign, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "کیفیت تضمین شده",
    items: ["مترجمان با مدرک تخصصی", "بازبینی چندمرحله‌ای", "گارانتی بازگشت پول"],
  },
  {
    icon: DollarSign,
    title: "قیمت رقابتی",
    items: ["شفاف‌ترین قیمت‌گذاری", "بدون هزینه پنهان", "تخفیف‌های ویژه دانشجویی"],
  },
  {
    icon: Zap,
    title: "تحویل سریع",
    items: ["ترجمه معمولی: ۳-۵ روز", "ترجمه فوری: ۲۴-۴۸ ساعت", "پیگیری لحظه‌ای"],
  },
  {
    icon: Headphones,
    title: "پشتیبانی همیشگی",
    items: ["پاسخگویی ۲۴/۷", "ارتباط مستقیم با مترجم", "مشاوره رایگان"],
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">چرا Translation Land را انتخاب کنید؟</h2>
          <p className="text-muted-foreground text-lg">مترجمان متخصص، کیفیت بالا و خدمات حرفه‌ای</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <ul className="space-y-2">
                {f.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
