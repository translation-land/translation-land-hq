import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Award, Eye, Zap, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "کیفیت", desc: "بالاترین استانداردهای ترجمه تخصصی با بازبینی چندمرحله‌ای" },
  { icon: Eye, title: "شفافیت", desc: "قیمت‌گذاری شفاف و بدون هزینه پنهان در تمام مراحل" },
  { icon: Zap, title: "سرعت", desc: "تحویل به موقع و امکان ترجمه فوری در ۲۴ ساعت" },
  { icon: Heart, title: "اعتماد", desc: "بیش از ۱۰ سال سابقه و اعتماد صدها مشتری" },
];

const stats = [
  { num: "۱۰۰۰+", label: "مقاله ترجمه شده" },
  { num: "۵۰۰+", label: "مشتری راضی" },
  { num: "۵۰+", label: "متخصص حرفه‌ای" },
  { num: "۹۵٪", label: "نرخ پذیرش مقالات" },
];

const About = () => {
  return (
    <>
      <SEO
        title="درباره Translation Land | بهترین خدمات ترجمه مقاله"
        description="با بیش از ۱۰ سال تجربه در ترجمه مقالات تخصصی، Translation Land بهترین خدمات ترجمه مقاله ISI را ارائه می‌دهد."
      />
      <main className="pt-24">
        <section className="gradient-section py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">درباره ما</h1>
            <p className="text-primary-foreground/80 text-lg">بیش از یک دهه تجربه در ترجمه تخصصی مقالات علمی</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="section-container max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
              <div className="prose prose-lg text-muted-foreground leading-8 space-y-4">
                <p>
                  Translation Land از سال ۱۳۹۳ فعالیت خود را در زمینه ترجمه مقالات تخصصی آغاز کرد. هدف ما ارائه خدمات ترجمه با کیفیت بالا، قیمت مناسب و تحویل سریع بوده و هست.
                </p>
                <p>
                  تیم ما متشکل از بیش از ۵۰ مترجم متخصص با مدرک کارشناسی ارشد و دکتری در رشته‌های مختلف علمی است. ما افتخار داریم که بیش از ۱۰۰۰ مقاله تخصصی در رشته‌های مهندسی، پزشکی، علوم انسانی و علوم پایه ترجمه کرده‌ایم.
                </p>
                <p>
                  ماموریت ما کمک به پژوهشگران و دانشجویان ایرانی برای انتشار مقالات خود در مجلات معتبر بین‌المللی است. با ارائه خدمات ترجمه، ویرایش نیتیو، پارافریز و مشاوره چاپ، تمام نیازهای شما را پوشش می‌دهیم.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-10">ارزش‌های ما</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-6">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 gradient-section">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2">{s.num}</div>
                  <div className="text-primary-foreground/80">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
