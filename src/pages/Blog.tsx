import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, User, ArrowLeft } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "راهنمای کامل ترجمه مقاله ISI",
    excerpt: "در این مقاله، تمام مراحل ترجمه مقاله ISI از انتخاب ژورنال تا چاپ نهایی را بررسی می‌کنیم...",
    category: "راهنما",
    date: "بهمن ۱۴۰۴",
    author: "تیم Translation Land",
    readTime: "۱۰ دقیقه",
  },
  {
    id: "2",
    title: "تفاوت ترجمه عمومی و تخصصی چیست؟",
    excerpt: "ترجمه تخصصی مقالات علمی نیازمند دانش عمیق در حوزه مورد نظر است. در این مقاله تفاوت‌ها را بررسی می‌کنیم...",
    category: "آموزشی",
    date: "بهمن ۱۴۰۴",
    author: "تیم Translation Land",
    readTime: "۷ دقیقه",
  },
  {
    id: "3",
    title: "۱۰ نکته برای نوشتن مقاله علمی بهتر",
    excerpt: "نوشتن مقاله علمی مهارتی است که با تمرین و رعایت اصول بهبود می‌یابد. ۱۰ نکته کلیدی را بشناسید...",
    category: "نکات",
    date: "دی ۱۴۰۴",
    author: "تیم Translation Land",
    readTime: "۸ دقیقه",
  },
  {
    id: "4",
    title: "چگونه ژورنال مناسب انتخاب کنیم؟",
    excerpt: "انتخاب ژورنال مناسب برای چاپ مقاله یکی از مهم‌ترین تصمیمات پژوهشی شماست...",
    category: "راهنما",
    date: "دی ۱۴۰۴",
    author: "تیم Translation Land",
    readTime: "۶ دقیقه",
  },
  {
    id: "5",
    title: "سرقت علمی چیست و چگونه از آن جلوگیری کنیم؟",
    excerpt: "سرقت علمی یکی از جدی‌ترین تخلفات آکادمیک است. با راهکارهای پیشگیری آشنا شوید...",
    category: "آموزشی",
    date: "آذر ۱۴۰۴",
    author: "تیم Translation Land",
    readTime: "۹ دقیقه",
  },
  {
    id: "6",
    title: "ویرایش نیتیو: چرا و چگونه؟",
    excerpt: "ویرایش نیتیو نقش مهمی در پذیرش مقاله در مجلات بین‌المللی دارد. با مزایای آن آشنا شوید...",
    category: "خدمات",
    date: "آذر ۱۴۰۴",
    author: "تیم Translation Land",
    readTime: "۵ دقیقه",
  },
];

const Blog = () => {
  return (
    <>
      <SEO
        title="بلاگ آموزشی ترجمه | مقالات و راهنماها | Translation Land"
        description="مقالات آموزشی درباره ترجمه مقاله، نکات نوشتن مقاله علمی، راهنمای چاپ مقاله ISI و بیشتر."
      />
      <main className="pt-24">
        <section className="gradient-section py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">بلاگ آموزشی</h1>
            <p className="text-primary-foreground/80 text-lg">مقالات و راهنماهای تخصصی ترجمه و چاپ مقاله</p>
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
