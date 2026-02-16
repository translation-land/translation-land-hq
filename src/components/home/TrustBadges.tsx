import { motion } from "framer-motion";
import { Trophy, Shield, CheckCircle, CreditCard } from "lucide-react";

const badges = [
  { icon: Trophy, label: "۱۰+ سال تجربه" },
  { icon: Shield, label: "امنیت اطلاعات" },
  { icon: CheckCircle, label: "گارانتی کیفیت" },
  { icon: CreditCard, label: "پرداخت امن" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-card border-b border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-muted transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
