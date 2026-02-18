import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "راهنمای کامل ترجمه مقاله ISI: از انتخاب ژورنال تا چاپ",
    excerpt: "در این مقاله، تمام مراحل ترجمه مقاله انگلیسی ISI از انتخاب ژورنال تا چاپ نهایی را بررسی می‌کنیم...",
    category: "راهنما",
    date: "بهمن ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۱۰ دقیقه",
  },
  {
    id: "2",
    title: "نقش هوش مصنوعی در ترجمه مقاله: مزایا و محدودیت‌ها",
    excerpt: "هوش مصنوعی برای ترجمه مقاله ابزاری قدرتمند اما ناکافی است. بررسی نقش AI در کنترل کیفیت ترجمه تخصصی و چرا مترجم انسانی ضروری است...",
    category: "تکنولوژی",
    date: "بهمن ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۸ دقیقه",
  },
  {
    id: "3",
    title: "تفاوت ترجمه عمومی و ترجمه تخصصی مقاله انگلیسی",
    excerpt: "ترجمه تخصصی مقاله انگلیسی نیازمند دانش عمیق در حوزه مورد نظر است. تفاوت‌های کلیدی و اهمیت انتخاب مترجم هم‌رشته...",
    category: "آموزشی",
    date: "بهمن ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۷ دقیقه",
  },
  {
    id: "4",
    title: "بهترین سایت ترجمه مقاله: معیارهای انتخاب",
    excerpt: "چگونه بهترین سایت ترجمه مقاله را انتخاب کنیم؟ معیارهای مهم شامل کیفیت، قیمت، تحویل، گارانتی و...",
    category: "راهنما",
    date: "دی ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۶ دقیقه",
  },
  {
    id: "5",
    title: "ترجمه انگلیسی به فارسی: ۱۰ نکته کلیدی برای کیفیت بالاتر",
    excerpt: "نکات مهم در ترجمه انگلیسی به فارسی مقالات علمی. از حفظ اصطلاحات تخصصی تا ساختار جملات فارسی...",
    category: "نکات",
    date: "دی ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۸ دقیقه",
  },
  {
    id: "6",
    title: "ترجمه رسمی مدارک دانشگاهی: راهنمای جامع",
    excerpt: "راهنمای کامل ترجمه رسمی مدارک دانشگاهی، مراحل تأیید دادگستری و وزارت امور خارجه...",
    category: "راهنما",
    date: "دی ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۹ دقیقه",
  },
  {
    id: "7",
    title: "سرقت علمی چیست و چگونه از آن جلوگیری کنیم؟",
    excerpt: "سرقت علمی یکی از جدی‌ترین تخلفات آکادمیک است. با راهکارهای پیشگیری آشنا شوید...",
    category: "آموزشی",
    date: "آذر ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۹ دقیقه",
  },
  {
    id: "8",
    title: "ترجمه فارسی به انگلیسی برای مجلات ISI: چالش‌ها و راهکارها",
    excerpt: "ترجمه فارسی به انگلیسی مقالات علمی چالش‌های خاصی دارد. نکات مهم برای پذیرش در مجلات معتبر بین‌المللی...",
    category: "آموزشی",
    date: "آذر ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۷ دقیقه",
  },
  {
    id: "9",
    title: "ویرایش نیتیو: چرا و چگونه؟",
    excerpt: "ویرایش نیتیو نقش مهمی در پذیرش مقاله انگلیسی در مجلات بین‌المللی دارد. با مزایای آن آشنا شوید...",
    category: "خدمات",
    date: "آذر ۱۴۰۴",
    author: "تیم Tarjome Land",
    readTime: "۵ دقیقه",
  },
];

const Blog = () => {
  return (
    <>
      <SEO
        title="بلاگ ترجمه مقاله | هوش مصنوعی برای ترجمه | راهنمای ترجمه رسمی | Tarjome Land"
        description="مقالات آموزشی درباره ترجمه مقاله انگلیسی، هوش مصنوعی برای ترجمه مقاله، ترجمه رسمی مدارک، نکات ترجمه انگلیسی به فارسی و فارسی به انگلیسی."
        keywords="هوش مصنوعی برای ترجمه مقاله, مقاله انگلیسی, ترجمه رسمی, سایت ترجمه مقاله, ترجمه انگلیسی به فارسی, ترجمه فارسی به انگلیسی"
      />
      <main className="pt-24">
        <section className="gradient-section py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">بلاگ ترجمه مقاله</h1>
            <p className="text-primary-foreground/80 text-lg">مقالات آموزشی درباره ترجمه مقاله انگلیسی، هوش مصنوعی و خدمات ترجمه</p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated overflow-hidden group"
                >
                  {/* Placeholder header */}
                  <div className="h-48 gradient-section flex items-center justify-center">
                    <span className="text-primary-foreground/50 text-6xl font-black">{post.id}</span>
                  </div>

                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-7">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-6 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
