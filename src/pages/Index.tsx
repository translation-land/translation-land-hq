import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import WhyUs from "@/components/home/WhyUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import Process from "@/components/home/Process";
import PricingTable from "@/components/home/PricingTable";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هزینه ترجمه مقاله انگلیسی به فارسی چقدر است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "هزینه ترجمه مقاله انگلیسی به فارسی در سایت ترجمه مقاله Tarjome Land از ۵۵ تومان به ازای هر کلمه (پلن پایه) تا ۲۰۰ تومان (پلن پریمیوم) متغیر است. ضریب تخصصی رشته نیز اعمال می‌شود."
      }
    },
    {
      "@type": "Question",
      "name": "مدت زمان ترجمه مقاله چقدر است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "زمان تحویل ترجمه مقاله بسته به پلن: پایه ۷-۱۰ روز، حرفه‌ای ۴-۶ روز، پریمیوم ۲-۳ روز. ترجمه فوری مقاله انگلیسی در ۲۴-۴۸ ساعت نیز امکان‌پذیر است."
      }
    },
    {
      "@type": "Question",
      "name": "آیا ترجمه رسمی مدارک انجام می‌دهید؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، خدمات ترجمه رسمی مدارک دانشگاهی و اسناد رسمی با تأیید دادگستری و وزارت امور خارجه انجام می‌شود."
      }
    },
    {
      "@type": "Question",
      "name": "آیا از هوش مصنوعی برای ترجمه مقاله استفاده می‌کنید؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، Tarjome Land از هوش مصنوعی برای ترجمه مقاله به عنوان ابزار کمکی در کنترل کیفیت، بررسی اصطلاحات تخصصی و یکپارچگی واژگان استفاده می‌کند. ترجمه نهایی همیشه توسط مترجمان متخصص انسانی انجام و بازبینی می‌شود."
      }
    },
    {
      "@type": "Question",
      "name": "بهترین سایت ترجمه مقاله کدام است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tarjome Land با بیش از ۱۰ سال سابقه، مترجمان دکتری، قیمت رقابتی و گارانتی کیفیت، یکی از بهترین سایت‌های ترجمه مقاله تخصصی در ایران است."
      }
    }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tarjome Land",
  "alternateName": "سایت ترجمه مقاله Tarjome Land",
  "description": "خدمات ترجمه مقاله تخصصی | ترجمه انگلیسی به فارسی و فارسی به انگلیسی | ترجمه رسمی | خدمات ترجمه با هوش مصنوعی",
  "url": "https://tarjome-land.ir",
  "address": { "@type": "PostalAddress", "addressCountry": "IR" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات ترجمه",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ترجمه مقاله انگلیسی به فارسی" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ترجمه مقاله فارسی به انگلیسی" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ترجمه رسمی مدارک" } }
    ]
  }
};

const Index = () => {
  return (
    <>
      <SEO
        title="سایت ترجمه مقاله | ترجمه انگلیسی به فارسی و فارسی به انگلیسی | Tarjome Land"
        description="بهترین سایت ترجمه مقاله تخصصی | ترجمه انگلیسی به فارسی و فارسی به انگلیسی | ترجمه رسمی مقاله انگلیسی | خدمات ترجمه با هوش مصنوعی | قیمت مناسب و تحویل سریع"
        keywords="ترجمه انگلیسی به فارسی, سایت ترجمه مقاله, ترجمه فارسی به انگلیسی, مقاله انگلیسی, ترجمه رسمی, خدمات ترجمه, هوش مصنوعی برای ترجمه مقاله"
        canonical="https://tarjome-land.ir"
        schema={[orgSchema, faqSchema]}
      />
      <main>
        <Hero />
        <TrustBadges />
        <WhyUs />
        <ServicesPreview />
        <Process />
        <PricingTable />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
    </>
  );
};

export default Index;
