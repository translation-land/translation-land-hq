import { motion } from "framer-motion";
import { Check, X, Crown, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "پایه",
    price: "۳۵,۰۰۰",
    badge: null,
    popular: false,
    features: [
      { text: "مترجم تازه‌کار", included: true },
      { text: "بازبینی ۱ مرحله", included: true },
      { text: "زمان تحویل: ۷-۱۰ روز", included: true },
      { text: "گارانتی ۳۰ روز", included: true },
      { text: "ویرایش رایگان ۱ بار", included: true },
      { text: "ویرایش نیتیو", included: false },
      { text: "مشاوره چاپ", included: false },
    ],
  },
  {
    name: "حرفه‌ای",
    price: "۹۰,۰۰۰",
    badge: "پرفروش‌ترین",
    badgeIcon: Flame,
    popular: true,
    features: [
      { text: "مترجم با تجربه", included: true },
      { text: "بازبینی ۲ مرحله", included: true },
      { text: "زمان تحویل: ۴-۶ روز", included: true },
      { text: "گارانتی ۹۰ روز", included: true },
      { text: "ویرایش رایگان ۲ بار", included: true },
      { text: "چک سرقت علمی", included: true },
      { text: "ویرایش نیتیو", included: false },
    ],
  },
  {
    name: "پریمیوم",
    price: "۱۸۰,۰۰۰",
    badge: "پیشنهاد ویژه",
    badgeIcon: Crown,
    popular: false,
    features: [
      { text: "متخصص ۱۰+ سال", included: true },
      { text: "بازبینی ۳ مرحله", included: true },
      { text: "زمان تحویل: ۲-۳ روز", included: true },
      { text: "گارانتی تا زمان چاپ", included: true },
      { text: "ویرایش رایگان نامحدود", included: true },
      { text: "ویرایش نیتیو", included: true },
      { text: "مشاوره چاپ مقاله", included: true },
    ],
  },
];

const PricingTable = () => {
  return (
    <section className="py-20 bg-muted/50" id="pricing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">پلن‌های قیمتی</h2>
          <p className="text-muted-foreground text-lg">قیمت به ازای ۱۰۰۰ کلمه</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border-2 transition-all hover:scale-[1.02] ${
                plan.popular
                  ? "border-primary bg-card shadow-xl scale-[1.02]"
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  {plan.badgeIcon && <plan.badgeIcon className="w-3.5 h-3.5" />}
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-primary">{plan.price}</span>
                <span className="text-muted-foreground mr-1 text-sm">تومان</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    {f.included ? (
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/50"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "btn-primary-glow !py-3"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                انتخاب پلن
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
