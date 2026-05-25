import pricingJson from "./pricing.json";

// Описываем строгий интерфейс для карточки тарифа/кожи
export interface PricingItem {
  name: string;
  main_page_visible: boolean,
  featured: boolean;
  price: number;
  features: string[];
  description: string;
  image: string; // теперь это строка-путь, а не объект метаданных
}

// Экспортируем данные наружу
export const pricingData = pricingJson as PricingItem[];