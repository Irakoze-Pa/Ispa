export interface Package { name: string; price: string; period?: string; description: string; features: string[]; recommended?: boolean; }
export const marketingPackages: Package[] = [
 {name:'Starter',price:'150,000',period:'/ month',description:'Build a consistent presence.',features:['Up to 2 social platforms','8 posts per month','Graphic designs','1 short video / reel','Basic content calendar','Basic page management','Basic monthly report']},
 {name:'Business Growth',price:'300,000',period:'/ month',description:'Connect content and campaigns.',recommended:true,features:['Up to 3 social platforms','12 posts per month','2–3 reels','Monthly content calendar','Page management','1 advertising campaign management','Basic SEO support','Monthly reporting']},
 {name:'Professional',price:'500,000',period:'/ month',description:'A more strategic digital approach.',features:['Up to 3 social platforms','16–20 posts per month','4 short videos','Strategic content calendar','Full page management','Up to 2 advertising campaigns','SEO support','Detailed reporting','Monthly strategy consultation']},
 {name:'Premium Growth',price:'From 800,000',period:'/ month',description:'A comprehensive growth partnership.',features:['Up to 4 social platforms','20+ posts per month','6+ videos','Advanced strategy','Priority management','Multiple advertising campaigns','Advanced SEO','Lead generation','Detailed reporting','Strategy review']},
];
export const websitePackages: Package[] = [
 {name:'Starter Website',price:'450,000',description:'Starting from · a professional first step.',features:['Up to 5 pages','Responsive design','Contact form','WhatsApp integration','Basic SEO','Social links','Deployment support']},
 {name:'Business Website',price:'800,000',description:'Starting from · built for your business.',features:['Up to 10 pages','Professional custom UI','SEO setup','Analytics','Enquiry forms','Social integrations','CMS-ready architecture','Performance optimization']},
 {name:'E-commerce Website',price:'1,500,000',description:'Starting from · bring your store online.',features:['Product catalogue & categories','Search and filtering','Shopping cart','Customer accounts','Order management','Admin dashboard','Inventory-ready architecture','Payment integration readiness']},
 {name:'Custom Web Application',price:'Custom quote',description:'Designed around your operations.',features:['Business management systems','Marketplaces & booking platforms','Dashboards & internal systems','SaaS applications','Customer portals']},
];
