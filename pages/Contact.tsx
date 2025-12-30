import React, { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `استفسار جديد من: ${formData.name}`;
    const body = `الاسم: ${formData.name}\nالبريد: ${formData.email}\n\nالرسالة:\n${formData.message}`;
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Contact Info Side */}
            <div className="bg-primary-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-6">تواصل معنا</h2>
                <p className="text-primary-100 mb-10 leading-relaxed">
                  نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الباقة المناسبة لمشروعك.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Phone size={20} />
                    </div>
                    <a href={`tel:${COMPANY_INFO.whatsappClean}`} className="font-semibold text-lg hover:text-primary-100 dir-ltr text-left">
                      {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Mail size={20} />
                    </div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-lg hover:text-primary-100">
                      {COMPANY_INFO.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <MessageCircle size={20} />
                    </div>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} target="_blank" rel="noreferrer" className="font-semibold text-lg hover:text-primary-100">
                      راسلنا عبر واتساب
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                 {/* Decorative elements or social icons could go here */}
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-3 border"
                    placeholder="محمد عبدالله"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-3 border"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">رسالتك</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-3 border"
                    placeholder="كيف يمكننا مساعدتك؟"
                    required
                  ></textarea>
                </div>

                <Button type="submit" fullWidth className="mt-2">
                  إرسال الرسالة
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  سنقوم بالرد عليك خلال 24 ساعة.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};