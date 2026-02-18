import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "دکتر محمد احمدی",
    org: "دانشگاه تهران",
    text: "ترجمه مقاله‌ام توسط Tarjome Land فوق‌العاده بود. مقاله در مجله Q1 پذیرفته شد.",
    field: "مدیریت",
    date: "دی ۱۴۰۳",
    rating: 5,
  },
  {
    name: "فاطمه رضایی",
    org: "دانشجوی دکتری",
    text: "تحویل به موقع، کیفیت بالا، و مشاوره رایگان. حتماً دوباره سفارش می‌دهم.",
    field: "روانشناسی",
    date: "آذر ۱۴۰۳",
    rating: 5,
  },
  {
    name: "دکتر علی حسینی",
    org: "دانشگاه شیراز",
    text: "بهترین تجربه ترجمه مقاله. مترجم هم‌رشته و بسیار حرفه‌ای بودند.",
    field: "مهندسی برق",
    date: "آبان ۱۴۰۳",
    rating: 5,
  },
  {
    name: "سارا محمدی",
    org: "دانشجوی ارشد",
    text: "قیمت مناسب و کیفیت عالی. ویرایش نیتیو خیلی تاثیرگذار بود.",
    field: "شیمی",
    date: "مهر ۱۴۰۳",
    rating: 5,
  },
  {
    name: "دکتر رضا کریمی",
    org: "دانشگاه تبریز",
    text: "سرعت بالا و دقت فوق‌العاده. مقاله‌ام بدون هیچ ایرادی پذیرفته شد.",
    field: "پزشکی",
    date: "شهریور ۱۴۰۳",
    rating: 5,
  },
  {
    name: "مریم عباسی",
    org: "پژوهشگر",
    text: "پشتیبانی عالی و ارتباط مستقیم با مترجم. از همه نظر راضی هستم.",
    field: "حقوق",
    date: "مرداد ۱۴۰۳",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نظرات مشتریان راضی</h2>
          <p className="text-muted-foreground text-lg">بیش از ۵۰۰ مشتری راضی از خدمات ما</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="card-elevated p-8 text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full gradient-section mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                {testimonials[current].name[0]}
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg leading-8 mb-6">"{testimonials[current].text}"</p>

              <div className="font-bold text-foreground">{testimonials[current].name}</div>
              <div className="text-sm text-muted-foreground">
                {testimonials[current].org} | {testimonials[current].field} | {testimonials[current].date}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6 items-center">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
