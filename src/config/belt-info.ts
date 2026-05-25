import type { ImageMetadata } from 'astro';
import portfolioJson from './portfolio.json'; // Импортируем наш новый JSON

// 1. Собираем все картинки из папки Portfolio (используем путь от корня для надежности)
const imageFiles = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/Portfolio/*.{JPG,jpg,jpeg,png,PNG}', { eager: true });

export interface StrapItem {
  id: string;
  leatherType: string;
  color: string;
  hasEdgeFold: boolean;
  images: ImageMetadata[];
}

// Вспомогательная функция, которая берет имя файла из JSON и находит его реальный объект в проекте
const getImg = (fileName: string): ImageMetadata | null => {
  const fullPath = `/src/assets/images/Portfolio/${fileName}`;
  return imageFiles[fullPath]?.default || null;
};

// 2. Динамически формируем массив для всего сайта
export const portfolioData: StrapItem[] = portfolioJson.map((item) => ({
  id: item.id,
  leatherType: item.leatherType,
  color: item.color,
  hasEdgeFold: item.hasEdgeFold,
  // ИСПРАВЛЕНО: Мапим каждую строчку через функцию getImg и фильтруем пустые результаты
  images: item.images.map(getImg).filter(Boolean) as ImageMetadata[]
}));