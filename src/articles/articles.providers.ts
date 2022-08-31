import { Article } from './article.entity';

export const articlesProviders = [
  {
    provide: 'ARTICLES_REPOSITORY',
    useValue: Article,
  },
];
