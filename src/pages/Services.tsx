import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Globe, BookOpen, Edit, RefreshCw, Search, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "ترجمه مقاله انگلیسی به فارسی",
    desc: "ترجمه تخصصی مقالات علمی از انگلیسی به فارسی توسط مترجمان هم‌رشته با سابقه بالا. مناسب برای پایان‌نامه، پژوهش و مطالعات آکادمیک.",
    features: ["مترجمان هم‌رشته", "بازخوانی چندمرحله‌ای", "تضمین کیفیت", "قیمت مناسب"],
    price: "از ۳۵,۰۰۰ تومان",
  },
  {
    icon: BookOpen,
    title: "ترجمه مقاله فارسی به انگلیسی",
    desc: "ترجمه حرفه‌ای مقالات فارسی به انگلیسی ویژه چاپ در مجلات ISI و بین‌المللی. با ویرایش نیتیو و گارانتی پذیرش.",
    features: ["ویژه مجلات ISI", "ویرایش نیتیو", "گارانتی پذیرش", "مترجمان متخصص"],
    price: "از ۹۰,۰۰۰ تومان",
  },
  {
    icon: Edit,
    title: "ویرایش نیتیو (Native Editing)",
    desc: "ویرایش مقالات انگلیسی توسط ویراستاران بومی زبان انگلیسی برای اطمینان از روانی و صحت زبانی متن.",
    features: ["ویراستار بومی", "اصلاح گرامر و نگارش", "بهبود روانی متن", "گزارش تغییرات"],
    price: "از ۵۰,۰۰۰ تومان",
  },
  {
    icon: RefreshCw,
    title: "پارافریز (Paraphrasing)",
    desc: "بازنویسی متن مقاله با حفظ معنا و کاهش درصد مشابهت. مناسب برای رفع مشکل سرقت ادبی.",
    features: ["کاهش مشابهت", "حفظ معنا", "زبان علمی", "گزارش تغییرات"],
    price: "از ۲۰,۰۰۰ تومان",
  },
  {
    icon: Search,
    title: "چک سرقت علمی",
    desc: "بررسی مقاله با نرم‌افزارهای معتبر بین‌المللی و ارائه گزارش دقیق درصد مشابهت.",
    features: ["نرم‌افزار iThenticate", "گزارش کامل", "پیشنهاد اصلاح", "تضمین صحت"],
    price: "از ۳۰,۰۰۰ تومان",
  },
  {
    icon: FileText,
    title: "مشاوره چاپ مقاله",
    desc: "مشاوره تخصصی در انتخاب ژورنال مناسب، آماده‌سازی مقاله و فرآیند ثبت و پیگیری.",
    features: ["انتخاب ژورنال", "آماده‌سازی مقاله", "پیگیری فرآیند", "مشاوره رایگان"],
    price: "رایگان",
  },
];

const fields = [
  "فیزیک", "شیمی", "زیست‌شناسی", "ریاضیات",
  "مهندسی برق", "مهندسی مکانیک", "مهندسی عمران", "مهندسی کامپیوتر",
  "مهندسی شیمی", "مهندسی صنایع", "پزشکی عمومی", "دندانپزشکی",
  "داروسازی", "پرستاری", "بهداشت", "مدیریت",
  "حسابداری", "اقتصاد", "روانشناسی", "حقوق",
  "علوم تربیتی", "جامعه‌شناسی", "زبان انگلیسی", "معماری",
];

const Services = () => {
  return (
    <>
      <SEO
        title="خدمات ترجمه مقاله ISI | ویرایش نیتیو | Translation Land"
        description="خدمات ترجمه مقاله ISI، ویرایش نیتیو، پارافریز و چاپ مقاله. مترجمان دکتری و ارشد. قیمت از ۳۵,۰۰۰ تومان. مشاوره رایگان →"
      />
      <main className="pt-24">
        {/* Hero */}
        <section className="gradient-section py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">خدمات ترجمه تخصصی</h1>
            <p className="text-primary-foreground/80 text-lg">طیف گسترده‌ای از خدمات ترجمه و ویرایش مقالات علمی</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="section-container space-y-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`card-elevated p-8 flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-16 h-16 rounded-2xl gradient-section flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-7 mb-5">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {s.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-secondary/10 text-secondary font-bold py-2 px-4 rounded-lg text-sm">{s.price}</span>
                    <Link to="/contact" className="text-primary font-semibold hover:underline">سفارش دهید ←</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Fields */}
        <section className="py-20 bg-muted/50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-10">رشته‌های تخصصی</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {fields.map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="bg-card border border-border rounded-lg py-3 px-4 text-center text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
                >
                  {field}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
