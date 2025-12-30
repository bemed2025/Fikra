import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 animate-bounce-subtle">
          <CheckCircle size={40} />
        </div>
        
        <h1 className="text-3xl font-black text-gray-900 mb-4">شكراً لك!</h1>
        <p className="text-xl text-gray-700 font-medium mb-4">تم استلام طلبك بنجاح.</p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          سنتواصل معك عبر البريد الإلكتروني أو الواتساب قريباً لبدء العمل على مشروعك.
        </p>
        
        <div className="space-y-3">
          <Link to="/">
            <Button fullWidth variant="primary">
              العودة للرئيسية
            </Button>
          </Link>
          <a href="mailto:contact@fikradigital.com" className="block">
            <Button fullWidth variant="outline">
              تواصل معنا إذا كان لديك استفسار
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};