import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Crown, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { enToFaLevels, faToEnLevels, fieldMultipliers, type LanguageDirection } from "@/lib/pricing";

const PricingTable = () => {
  const [direction, setDirection] = useState<LanguageDirection>("en-to-fa");
  const levels = direction === "en-to-fa" ? enToFaLevels : faToEnLevels;

  return (
    <section className="py-20 bg-muted/50" id="pricing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تعرفه ترجمه مقاله</h2>
          <p className="text-muted-foreground text-lg">قیمت به ازای هر کلمه (تومان)</p>
        </motion.div>

        {/* Direction Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-xl p-1 gap-1">
            <button
              onClick={() => setDirection("en-to-fa")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                direction === "en-to-fa"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ترجمه انگلیسی به فارسی
            </button>
            <button
              onClick={() => setDirection("fa-to-en")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                direction === "fa-to-en"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ترجمه فارسی به انگلیسی
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 gap-6 items-stretch ${levels.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-3xl mx-auto"}`}>
          {levels.map((plan, i) => (
            <motion.div
              key={`${direction}-${i}`}
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
                  {plan.key === "professional" ? <Flame className="w-3.5 h-3.5" /> : <Crown className="w-3.5 h-3.5" />}
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.label}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-primary">{plan.rate.toLocaleString("fa-IR")}</span>
                <span className="text-muted-foreground mr-1 text-sm">تومان/کلمه</span>
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

        {/* Field Multipliers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-center mb-6">ضرایب تخصصی رشته‌ها</h3>
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="py-3 px-4 text-right font-semibold">رشته تخصصی</th>
                  <th className="py-3 px-4 text-center font-semibold">ضریب</th>
                </tr>
              </thead>
              <tbody>
                {fieldMultipliers.map((fm, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 text-right">{fm.label}</td>
                    <td className="py-3 px-4 text-center font-bold text-primary">{fm.multiplier}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
