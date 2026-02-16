import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            آماده شروع هستید؟
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto leading-8">
            همین حالا سفارش خود را ثبت کنید و از خدمات حرفه‌ای ما بهره‌مند شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary-glow !bg-primary-foreground !text-primary rounded-xl">
              ثبت سفارش رایگان
            </Link>
            <Link to="/contact" className="btn-secondary-outline !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary rounded-xl">
              تماس با ما
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
