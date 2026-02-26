import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const Founder = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">درباره مؤسس</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-8 md:p-10 flex flex-col md:flex-row-reverse items-center gap-8"
        >
          {/* Photo */}
          <div className="shrink-0">
            <img
              src={founderImg}
              alt="محمدامین رضایی - مؤسس Tarjome Land"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-right flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">محمدامین رضایی</h3>
            <p className="text-primary font-semibold">مؤسس و سرپرست تیم ترجمه</p>
            <p className="text-muted-foreground leading-8">
              کارشناس ارشد مترجمی زبان انگلیسی با بیش از ۱۰ سال سابقه در ترجمه مقالات علمی و تخصصی.
              تخصص در ترجمه مقالات ISI، ویرایش علمی و مدیریت پروژه‌های ترجمه بزرگ.
              هدف من ارائه باکیفیت‌ترین خدمات ترجمه با رعایت استانداردهای بین‌المللی است.
            </p>

            <a
              href="https://maminrezaie.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
              وب‌سایت شخصی
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
