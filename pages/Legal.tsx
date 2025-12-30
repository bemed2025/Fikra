import React from 'react';

export const Legal: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm mb-12">
          <h1 className="text-3xl font-black text-gray-900 mb-8 border-b pb-4">سياسة الخصوصية وشروط الخدمة</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. مقدمة</h2>
              <p>
                مرحباً بكم في فكرة رقمية. تحكم هذه الشروط استخدامك لموقعنا وخدماتنا. باستخدامك لموقعنا، فإنك توافق على هذه الشروط بالكامل.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. جمع المعلومات</h2>
              <p>
                نحن نقوم بجمع المعلومات التي تقدمها لنا طواعية، مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند التواصل معنا أو طلب خدمة. نستخدم هذه المعلومات لتقديم الخدمات وتحسين تجربتك.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. المدفوعات والاسترداد</h2>
              <p>
                تتم جميع المدفوعات بشكل آمن عبر PayPal. نظراً لطبيعة الخدمات الرقمية (تصميم، فيديو، صوت)، لا يمكن استرداد المبلغ بعد البدء في تنفيذ العمل إلا في حالات استثنائية يتم الاتفاق عليها.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. حقوق الملكية الفكرية</h2>
              <p>
                جميع المحتويات والمواد الموجودة على هذا الموقع هي ملك لفكرة رقمية. عند شراء خدمة، يتم نقل حقوق الاستخدام للعميل وفقاً للاتفاق المبرم.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. تواصل معنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر البريد الإلكتروني contact@fikradigital.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};