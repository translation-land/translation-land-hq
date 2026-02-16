import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "هزینه ترجمه مقاله چقدر است؟",
    a: "هزینه ترجمه مقاله بسته به سطح کیفیت از ۳۵,۰۰۰ تومان (پلن پایه) تا ۱۸۰,۰۰۰ تومان (پلن پریمیوم) به ازای هر ۱۰۰۰ کلمه متغیر است. برای محاسبه دقیق از ابزار محاسبه قیمت آنلاین استفاده کنید.",
  },
  {
    q: "مدت زمان ترجمه چقدر است؟",
    a: "زمان تحویل بسته به پلن انتخابی متفاوت است: پلن پایه ۷-۱۰ روز، حرفه‌ای ۴-۶ روز و پریمیوم ۲-۳ روز. امکان ترجمه فوری در ۲۴-۴۸ ساعت نیز وجود دارد.",
  },
  {
    q: "آیا تضمین کیفیت دارید؟",
    a: "بله، تمام ترجمه‌ها شامل گارانتی کیفیت هستند. در صورت عدم رضایت، ویرایش رایگان انجام می‌شود و در موارد خاص، امکان بازگشت وجه وجود دارد.",
  },
  {
    q: "ترجمه فوری چگونه است؟",
    a: "ترجمه فوری با هزینه اضافی ۳۰,۰۰۰ تومان در ۲۴ تا ۴۸ ساعت تحویل داده می‌شود. این سرویس برای مقالاتی تا ۵,۰۰۰ کلمه قابل ارائه است.",
  },
  {
    q: "آیا ویرایش نیتیو دارید؟",
    a: "بله، ویرایش نیتیو توسط ویراستاران بومی زبان انگلیسی انجام می‌شود. این خدمت در پلن پریمیوم رایگان و برای سایر پلن‌ها با هزینه ۵۰,۰۰۰ تومان قابل دسترس است.",
  },
  {
    q: "نحوه پرداخت چگونه است؟",
    a: "پرداخت از طریق درگاه آنلاین و کارت به کارت امکان‌پذیر است. رسید رسمی پس از پرداخت صادر می‌شود.",
  },
  {
    q: "آیا رسید رسمی صادر می‌کنید؟",
    a: "بله، رسید رسمی برای تمام سفارشات صادر می‌شود و از طریق ایمیل ارسال خواهد شد.",
  },
  {
    q: "مترجمان شما چه مدارکی دارند؟",
    a: "مترجمان ما دارای مدرک کارشناسی ارشد و دکتری در رشته‌های تخصصی هستند و حداقل ۳ سال سابقه ترجمه مقالات علمی دارند.",
  },
  {
    q: "آیا تخفیف دانشجویی دارید؟",
    a: "بله، دانشجویان با ارائه کارت دانشجویی معتبر از ۱۵٪ تخفیف بهره‌مند می‌شوند. همچنین تخفیف حجمی برای سفارش‌های بالای ۱۰,۰۰۰ کلمه اعمال می‌شود.",
  },
  {
    q: "چگونه سفارش ثبت کنم؟",
    a: "کافی است فایل مقاله خود را از طریق فرم ثبت سفارش ارسال کنید. در کمتر از ۱ ساعت قیمت و زمان تحویل اعلام می‌شود.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/50" id="faq">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">سوالات متداول</h2>
          <p className="text-muted-foreground text-lg">پاسخ سوالات رایج مشتریان</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md">
                <AccordionTrigger className="text-right font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-7 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
