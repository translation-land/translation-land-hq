import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, BookOpen, Sparkles, FileCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "ترجمه مقاله انگلیسی به فارسی",
    desc: "ترجمه تخصصی مقاله انگلیسی به فارسی با مترجمان هم‌رشته. مناسب برای پایان‌نامه، پژوهش و مطالعات آکادمیک.",
    price: "از ۵۵ تومان/کلمه",
  },
  {
    icon: BookOpen,
    title: "ترجمه مقاله فارسی به انگلیسی",
    desc: "ترجمه فارسی به انگلیسی ویژه چاپ در مجلات ISI و بین‌المللی با ویرایش نیتیو و گارانتی پذیرش.",
    price: "از ۲۲۰ تومان/کلمه",
  },
  {
    icon: FileCheck,
    title: "ترجمه رسمی مدارک",
    desc: "ترجمه رسمی مدارک دانشگاهی و اسناد رسمی با تأیید دادگستری و وزارت امور خارجه.",
    price: "قیمت توافقی",
  },
  {
    icon: Sparkles,
    title: "خدمات ترجمه ویژه",
    desc: "پارافریز، چک سرقت علمی، مشاوره چاپ مقاله انگلیسی و ترجمه با کمک هوش مصنوعی.",
    price: "قیمت توافقی",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات ترجمه تخصصی</h2>
          <p className="text-muted-foreground text-lg">طیف گسترده‌ای از خدمات ترجمه مقاله انگلیسی و ویرایش مقالات علمی</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated p-8 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-5 leading-7">{s.desc}</p>
              <span className="inline-block bg-secondary/10 text-secondary font-bold py-2 px-4 rounded-lg text-sm">
                {s.price}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="text-primary font-semibold hover:underline text-lg">
            مشاهده همه خدمات ←
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
