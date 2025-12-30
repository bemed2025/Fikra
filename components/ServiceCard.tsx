import React, { useState } from 'react';
import { Service } from '../types';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const hasOptions = service.options && service.options.length > 0;
  
  const currentPrice = hasOptions 
    ? service.options![selectedOptionIndex].price 
    : service.basePrice;

  const currentPaymentLink = hasOptions
    ? service.options![selectedOptionIndex].paypalLink
    : service.basePaypalLink;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2 min-h-[40px]">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-6 flex-grow">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
              <Check size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Options Selector (if applicable) */}
        {hasOptions && (
          <div className="mb-6 bg-gray-50 p-3 rounded-lg">
            <label className="block text-sm font-semibold text-gray-700 mb-2">اختر الباقة:</label>
            <select
              value={selectedOptionIndex}
              onChange={(e) => setSelectedOptionIndex(Number(e.target.value))}
              className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 outline-none"
            >
              {service.options!.map((option, idx) => (
                <option key={idx} value={idx}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Pricing and Action */}
        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm font-medium">السعر</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-primary-600">{currentPrice}</span>
              <span className="text-gray-600 font-bold text-sm">ر.س</span>
            </div>
          </div>
          
          <a href={currentPaymentLink} target="_self">
            <Button fullWidth className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>اشتري الآن</span>
            </Button>
          </a>
          <p className="text-center text-xs text-gray-400 mt-2">
            دفع آمن عبر PayPal
          </p>
        </div>
      </div>
    </div>
  );
};