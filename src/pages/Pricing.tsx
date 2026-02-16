import { useState, useMemo } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import PricingTable from "@/components/home/PricingTable";
import { GraduationCap, BookOpen, Users, UserPlus } from "lucide-react";

const qualityLevels = [
  { label: "پایه", rate: 35 },
  { label: "حرفه‌ای", rate: 90 },
  { label: "پریمیوم", rate: 180 },
];

const extras = [
  { label: "ویرایش نیتیو", price: 50000 },
  { label: "پارافریز", price: 20000 },
  { label: "تحویل فوری", price: 30000 },
];

const discounts = [
  { icon: GraduationCap, title: "تخفیف دانشجویی", value: "۱۵٪", desc: "با ارائه کارت دانشجویی معتبر" },
  { icon: BookOpen, title: "تخفیف حجمی", value: "۱۰٪", desc: "سفارش‌های بالای ۱۰,۰۰۰ کلمه" },
  { icon: Users, title: "مشتریان دائمی", value: "تا ۲۰٪", desc: "افزایش تخفیف با هر سفارش" },
  { icon: UserPlus, title: "معرفی دوستان", value: "۵۰,۰۰۰ تومان", desc: "اعتبار هدیه برای هر معرفی" },
];

const Pricing = () => {
  const [wordCount, setWordCount] = useState(1000);
  const [quality, setQuality] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<boolean[]>([false, false, false]);

  const total = useMemo(() => {
    const base = (wordCount / 1000) * qualityLevels[quality].rate * 1000;
    const extrasTotal = selectedExtras.reduce((sum, sel, i) => sel ? sum + extras[i].price : sum, 0);
    return base + extrasTotal;
  }, [wordCount, quality, selectedExtras]);

  const toggleExtra = (i: number) => {
    setSelectedExtras(prev => prev.map((v, idx) => idx === i ? !v : v));
  };

  return (
    <>
      <SEO
        title="قیمت ترجمه مقاله | از ۳۵,۰۰۰ تومان | Translation Land"
        description="قیمت ترجمه مقاله تخصصی از ۳۵,۰۰۰ تومان. محاسبه آنلاین قیمت ترجمه. بدون هزینه پنهان. تخفیف دانشجویی."
      />
      <main className="pt-24">
        <section className="gradient-section py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">قیمت‌گذاری شفاف و رقابتی</h1>
            <p className="text-primary-foreground/80 text-lg">بدون هزینه پنهان - پرداخت امن</p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20">
          <div className="section-container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">محاسبه قیمت آنلاین</h2>

              {/* Word count */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">تعداد کلمات</label>
                <input
                  type="number"
                  min={100}
                  max={100000}
                  value={wordCount}
                  onChange={(e) => setWordCount(Math.max(100, Number(e.target.value)))}
                  className="w-full border border-input rounded-lg py-3 px-4 bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>

              {/* Quality */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">سطح کیفیت</label>
                <div className="grid grid-cols-3 gap-3">
                  {qualityLevels.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setQuality(i)}
                      className={`py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        quality === i
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {q.label}
                      <br />
                      <span className="text-xs text-muted-foreground">{q.rate},۰۰۰ تومان</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="mb-8">
                <label className="block font-semibold mb-2">خدمات اضافی</label>
                <div className="space-y-2">
                  {extras.map((ex, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedExtras[i]}
                        onChange={() => toggleExtra(i)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="flex-1">{ex.label}</span>
                      <span className="text-sm text-muted-foreground">+{ex.price.toLocaleString("fa-IR")} تومان</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="bg-primary/5 border-2 border-primary rounded-xl p-6 text-center">
                <span className="text-sm text-muted-foreground">هزینه کل:</span>
                <div className="text-4xl font-black text-primary mt-2">
                  {total.toLocaleString("fa-IR")} <span className="text-lg font-normal">تومان</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <PricingTable />

        {/* Discounts */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-10">تخفیف‌ها و پیشنهادات ویژه</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {discounts.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <d.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold mb-1">{d.title}</h3>
                  <div className="text-2xl font-black text-primary mb-2">{d.value}</div>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
