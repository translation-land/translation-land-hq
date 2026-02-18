import { useState, useRef } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Send, MessageCircle, Linkedin, Paperclip, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: Phone, label: "تلفن", value: "۰۹۱۵۰۶۱۶۷۸۸", href: "tel:09150616788" },
  { icon: Mail, label: "ایمیل", value: "m.amin.rezai@gmail.com", href: "mailto:m.amin.rezai@gmail.com" },
  { icon: MapPin, label: "آدرس", value: "مشهد، گناباد", href: null },
  { icon: Clock, label: "ساعات کاری", value: "شنبه-پنجشنبه: ۹-۱۸ | پشتیبانی: ۲۴/۷", href: null },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/maminrezai", color: "bg-pink-500/10 text-pink-500" },
  { icon: Send, label: "Telegram", href: "https://t.me/maminre", color: "bg-primary/10 text-primary" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/qr/ERDSPOB6INRHP1", color: "bg-secondary/10 text-secondary" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-amin-rezaie-43a318186/", color: "bg-primary/10 text-primary" },
];

const FORMSPREE_URL = "https://formspree.io/f/xlgwbdgo";
const MAX_FILES = 5;
const MAX_FILE_SIZE_MB = 10;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    const validFiles = selected.filter(f => f.size <= MAX_FILE_SIZE_MB * 1024 * 1024);
    if (validFiles.length < selected.length) {
      toast.error(`حداکثر حجم هر فایل ${MAX_FILE_SIZE_MB} مگابایت است`);
    }
    setFiles(prev => {
      const combined = [...prev, ...validFiles].slice(0, MAX_FILES);
      if (prev.length + validFiles.length > MAX_FILES) {
        toast.error(`حداکثر ${MAX_FILES} فایل مجاز است`);
      }
      return combined;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      files.forEach(file => formData.append("attachment", file));

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.");
        reset();
        setFiles([]);
      } else {
        toast.error("خطا در ارسال پیام. لطفاً دوباره تلاش کنید.");
      }
    } catch {
      toast.error("خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO
        title="تماس با ما | سایت ترجمه مقاله Translation Land"
        description="با سایت ترجمه مقاله Translation Land تماس بگیرید. خدمات ترجمه انگلیسی به فارسی و فارسی به انگلیسی، ترجمه رسمی، مشاوره رایگان. تلفن: ۰۹۱۵۰۶۱۶۷۸۸"
        keywords="خدمات ترجمه, سایت ترجمه مقاله, ترجمه رسمی, ترجمه مقاله"
      />
      <main className="pt-24">
        <section className="gradient-section py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">تماس با ما</h1>
            <p className="text-primary-foreground/80 text-lg">مشاوره رایگان و پاسخگویی سریع</p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-6">ثبت سفارش آنلاین</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block font-medium mb-1.5 text-sm">نام و نام خانوادگی *</label>
                    <input
                      {...register("name", { required: "نام الزامی است", maxLength: { value: 100, message: "حداکثر ۱۰۰ کاراکتر" } })}
                      className="w-full border border-input rounded-lg py-3 px-4 bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      placeholder="نام خود را وارد کنید"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-medium mb-1.5 text-sm">ایمیل *</label>
                      <input
                        type="email"
                        {...register("email", { required: "ایمیل الزامی است", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "ایمیل معتبر نیست" } })}
                        className="w-full border border-input rounded-lg py-3 px-4 bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                        placeholder="email@example.com"
                        dir="ltr"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block font-medium mb-1.5 text-sm">شماره تماس *</label>
                      <input
                        {...register("phone", { required: "شماره تماس الزامی است" })}
                        className="w-full border border-input rounded-lg py-3 px-4 bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                        placeholder="۰۹۱۲XXXXXXX"
                        dir="ltr"
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium mb-1.5 text-sm">موضوع</label>
                    <select
                      {...register("subject")}
                      className="w-full border border-input rounded-lg py-3 px-4 bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                    >
                      <option value="order">ثبت سفارش ترجمه</option>
                      <option value="price">استعلام قیمت</option>
                      <option value="consult">مشاوره رایگان</option>
                      <option value="complaint">شکایت یا پیشنهاد</option>
                      <option value="other">سایر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-1.5 text-sm">پیام *</label>
                    <textarea
                      {...register("message", { required: "پیام الزامی است", maxLength: { value: 2000, message: "حداکثر ۲۰۰۰ کاراکتر" } })}
                      rows={5}
                      className="w-full border border-input rounded-lg py-3 px-4 bg-background text-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
                      placeholder="پیام خود را بنویسید..."
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block font-medium mb-1.5 text-sm">فایل پیوست (حداکثر {MAX_FILES} فایل، هر کدام تا {MAX_FILE_SIZE_MB}MB)</label>
                    <div
                      className="border-2 border-dashed border-input rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Paperclip className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">برای آپلود فایل کلیک کنید</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, XLSX, JPG, PNG, ZIP</p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xlsx,.xls,.jpg,.jpeg,.png,.zip,.rar,.pptx,.txt"
                      onChange={handleFileChange}
                    />
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, i) => (
                          <div key={i} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2 text-sm">
                            <span className="truncate ml-2">{file.name} ({(file.size / 1024 / 1024).toFixed(1)}MB)</span>
                            <button type="button" onClick={() => removeFile(i)} className="text-destructive hover:text-destructive/80 flex-shrink-0">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-glow w-full rounded-xl disabled:opacity-50"
                  >
                    {isSubmitting ? "در حال ارسال..." : "ارسال سفارش"}
                  </button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="card-elevated p-5 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{info.value}</a>
                        ) : (
                          <span className="text-muted-foreground text-sm">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">شبکه‌های اجتماعی</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socials.map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-xl border border-border hover:shadow-md transition-all ${s.color}`}
                      >
                        <s.icon className="w-5 h-5" />
                        <span className="font-medium text-foreground">{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
