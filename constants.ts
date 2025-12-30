import { Service } from './types';

const RETURN_URL = "https://fikradigital.com/#/thank-you";

// These links include a return URL to the Thank You page.
// The domain matches the email provided (fikradigital.com).
export const PAYPAL_LINKS = {
  LANDING_PAGE: `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=contact@fikradigital.com&currency_code=SAR&amount=379&item_name=Landing%20Page%20Design&return=${encodeURIComponent(RETURN_URL)}`,
  VIDEO_ADS: `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=contact@fikradigital.com&currency_code=SAR&amount=379&item_name=Video%20Ad%20Creative&return=${encodeURIComponent(RETURN_URL)}`,
  VOICE_OVER_30: `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=contact@fikradigital.com&currency_code=SAR&amount=79&item_name=Voice%20Over%2030s&return=${encodeURIComponent(RETURN_URL)}`,
  VOICE_OVER_30_60: `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=contact@fikradigital.com&currency_code=SAR&amount=100&item_name=Voice%20Over%2030s-60s&return=${encodeURIComponent(RETURN_URL)}`,
  VOICE_OVER_60_PLUS: `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=contact@fikradigital.com&currency_code=SAR&amount=150&item_name=Voice%20Over%2060s%2B&return=${encodeURIComponent(RETURN_URL)}`,
};

export const COMPANY_INFO = {
  email: "contact@fikradigital.com",
  whatsapp: "+1 (870) 209-8271",
  whatsappClean: "18702098271", // For the wa.me link
  address: "المملكة العربية السعودية",
};

export const SERVICES: Service[] = [
  {
    id: 'landing-page',
    title: 'تصميم صفحات هبوط',
    description: 'صفحات هبوط احترافية مصممة خصيصاً لتحويل الزوار إلى عملاء. سرعة في الأداء وتصميم متجاوب مع جميع الأجهزة.',
    image: 'https://picsum.photos/id/3/800/600',
    basePrice: 379,
    basePaypalLink: PAYPAL_LINKS.LANDING_PAGE,
    features: [
      'تصميم عصري وجذاب',
      'متجاوب مع الجوال',
      'سريع التحميل',
      'تحسين معدل التحويل (CRO)'
    ]
  },
  {
    id: 'video-ads',
    title: 'إعلانات فيديو (Creative)',
    description: 'فيديوهات إعلانية مبتكرة تجذب الانتباه وتوصل رسالتك بوضوح خلال ثوانٍ معدودة. مثالية لمنصات التواصل الاجتماعي.',
    image: 'https://picsum.photos/id/96/800/600',
    basePrice: 379,
    basePaypalLink: PAYPAL_LINKS.VIDEO_ADS,
    features: [
      'سكريبت إعلاني مؤثر',
      'مونتاج احترافي',
      'مؤثرات بصرية وصوتية',
      'مقاسات متعددة (Reels, Story, Feed)'
    ]
  },
  {
    id: 'voice-over',
    title: 'تعليق صوتي احترافي',
    description: 'نبرة صوتية مميزة تناسب مشروعك، سواء كان إعلانياً، وثائقياً، أو تعليمياً. تسجيلات عالية الجودة.',
    image: 'https://picsum.photos/id/1/800/600',
    features: [
      'جودة استوديو احترافية',
      'تسليم سريع',
      'نغمات صوتية متنوعة',
      'تعديلات مجانية'
    ],
    options: [
      {
        label: '30 ثانية',
        price: 79,
        paypalLink: PAYPAL_LINKS.VOICE_OVER_30
      },
      {
        label: 'أكثر من 30 ثانية',
        price: 100,
        paypalLink: PAYPAL_LINKS.VOICE_OVER_30_60
      },
      {
        label: 'أكثر من 60 ثانية',
        price: 150,
        paypalLink: PAYPAL_LINKS.VOICE_OVER_60_PLUS
      }
    ]
  }
];