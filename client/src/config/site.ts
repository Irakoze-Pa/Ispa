export const site = {
  name: 'ISPA Digital', location: 'Kigali, Rwanda',
  apiUrl: import.meta.env.VITE_API_URL || '/api',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
  businessHours: import.meta.env.VITE_BUSINESS_HOURS || '',
};
export const services = [
  ['Digital Marketing', 'digital-marketing'], ['Social Media Management', 'social-media'],
  ['Content Creation', 'content-creation'], ['Website Development', 'web-development'],
  ['E-commerce Development', 'ecommerce'], ['SEO Services', 'seo'], ['Branding & Graphic Design', 'branding'],
] as const;
export const navigation = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Packages', '/packages'], ['Blog', '/blog'], ['Contact', '/contact']] as const;
