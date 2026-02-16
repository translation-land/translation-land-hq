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
      "name": "هزینه ترجمه مقاله چقدر است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "هزینه ترجمه مقاله بسته به سطح کیفیت از ۳۵,۰۰۰ تومان تا ۱۸۰,۰۰۰ تومان به ازای هر ۱۰۰۰ کلمه متغیر است."
      }
    },
    {
      "@type": "Question",
      "name": "مدت زمان ترجمه چقدر است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "زمان تحویل بسته به پلن: پایه ۷-۱۰ روز، حرفه‌ای ۴-۶ روز، پریمیوم ۲-۳ روز. ترجمه فوری در ۲۴-۴۸ ساعت."
      }
    }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Translation Land",
  "description": "خدمات ترجمه مقاله تخصصی",
  "address": { "@type": "PostalAddress", "addressCountry": "IR" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" }
};

const Index = () => {
  return (
    <>
      <SEO
        title="ترجمه مقاله تخصصی | سریع، دقیق و مقرون به صرفه | Translation Land"
        description="ترجمه مقاله تخصصی با بهترین کیفیت و قیمت مناسب. تحویل سریع، مترجمان متخصص، گارانتی کیفیت. ثبت سفارش رایگان ←"
        keywords="ترجمه مقاله, ترجمه تخصصی, ترجمه مقاله ISI, ترجمه انگلیسی به فارسی, ترجمه فارسی به انگلیسی"
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
