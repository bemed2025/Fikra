import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Video, Mic } from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES, COMPANY_INFO } from '../constants';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-bold text-sm mb-6 border border-primary-100 shadow-sm animate-fade-in-up">
            <Sparkles size={16} />
            <span>الحل الأمثل لنمو أعمالك الرقمية في السعودية</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 max-w-4xl mx-auto">
            حول أفكارك إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-400">واقع رقمي</span> يحقق نتائج
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            نقدم لك خدمات احترافية في تصميم صفحات الهبوط، إنتاج إعلانات الفيديو، والتعليق الصوتي بأسعار منافسة وجودة عالمية.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services">
              <Button size="lg" className="shadow-primary-500/30">
                تصفح خدماتنا
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                تواصل معنا
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary-500" size={20} />
              <span>دفع آمن وسهل</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary-500" size={20} />
              <span>تسليم سريع</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary-500" size={20} />
              <span>جودة مضمونة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">باقاتنا وخدماتنا</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              اختر الخدمة المناسبة لمشروعك وابدأ رحلة النجاح معنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://picsum.photos/id/48/800/800" 
                alt="Digital Agency Team" 
                className="relative rounded-3xl shadow-2xl z-10"
              />
              <div className="absolute bottom-10 -right-5 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Video size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">إبداع بلا حدود</h4>
                    <p className="text-xs text-gray-500">محتوى يجذب الأنظار</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                لماذا تختار <span className="text-primary-600">فكرة رقمية</span> لمشروعك القادم؟
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                نحن نفهم السوق السعودي واحتياجاته. نقدم حلولاً رقمية متكاملة تجمع بين الإبداع والفعالية لضمان تحقيق أهدافك التجارية.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">تصاميم عصرية</h3>
                    <p className="text-gray-600">نواكب أحدث صيحات التصميم لضمان تميز علامتك التجارية.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">جودة احترافية</h3>
                    <p className="text-gray-600">نستخدم أفضل الأدوات والتقنيات لتقديم مخرجات عالية الدقة.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} target="_blank" rel="noreferrer">
                  <Button size="lg" className="gap-2">
                    ابدأ مشروعك الآن <ArrowRight size={20} className="rtl:rotate-180" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">جاهز للبدء؟</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            تواصل معنا اليوم ودعنا نساعدك في تحقيق رؤيتك الرقمية بأفضل تكلفة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact">
              <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 focus:ring-white">
                تواصل معنا
              </Button>
            </Link>
            <a href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} target="_blank" rel="noreferrer">
               <Button variant="whatsapp" size="lg">
                واتساب مباشر
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};