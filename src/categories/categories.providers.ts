import { Category } from './category.entity';

export const categoriesProviders = [
  {
    provide: 'CATEGORIES_REPOSITORY',
    useValue: Category,
  },
];
