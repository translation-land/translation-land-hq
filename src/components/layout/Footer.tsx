import { Link } from "react-router-dom";
import { FileText, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl mb-4">
              <FileText className="w-6 h-6" />
              <span>Tarjome Land</span>
            </Link>
            <p className="text-sm leading-7 opacity-80">
              Tarjome Land بهترین سایت ترجمه مقاله تخصصی. خدمات ترجمه انگلیسی به فارسی و فارسی به انگلیسی، ترجمه رسمی مدارک و ترجمه با هوش مصنوعی.
              مترجمان متخصص، تحویل سریع و گارانتی کیفیت.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com/maminrezai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="https://t.me/maminre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                <Send className="w-5 h-5 text-primary" />
              </a>
              <a href="https://wa.me/qr/ERDSPOB6INRHP1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/40 transition-colors">
                <MessageCircle className="w-5 h-5 text-secondary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">لینک‌های سریع</h3>
            <ul className="space-y-3 text-sm opacity-80">
              {[
                { label: "خدمات ترجمه", path: "/services" },
                { label: "قیمت ترجمه", path: "/pricing" },
                { label: "بلاگ", path: "/blog" },
                { label: "سوالات متداول", path: "/#faq" },
                { label: "درباره ما", path: "/about" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">خدمات ترجمه</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/services" className="hover:text-primary transition-colors">ترجمه انگلیسی به فارسی</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">ترجمه فارسی به انگلیسی</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">ترجمه رسمی مدارک</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">ویرایش نیتیو</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">پارافریز و چک سرقت علمی</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">ترجمه با هوش مصنوعی</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:09150616788" className="hover:text-primary transition-colors direction-ltr">09150616788</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:m.amin.rezai@gmail.com" className="hover:text-primary transition-colors text-xs">m.amin.rezai@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>مشهد، گناباد</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-muted/20 mt-12 pt-8 text-center text-sm opacity-60">
          <p>© ۲۰۲۶ Tarjome Land | سایت ترجمه مقاله تخصصی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
