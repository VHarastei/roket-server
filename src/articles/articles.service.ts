import { Injectable, Inject } from '@nestjs/common';
import { PageDto } from './../common/dtos/page.dto';
import {
  PageOptionsDto,
  PageOptionsDtoParameters,
} from './../common/dtos/page-options.dto';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject('ARTICLES_REPOSITORY')
    private articlesRepository: typeof Article,
  ) {}

  async findOne(id: string): Promise<Article> {
    return this.articlesRepository.findByPk<Article>(id, {
      attributes: { exclude: ['date', 'shortDescription'] },
    });
  }

  async getNews(
    categoryId: string,
    options: PageOptionsDtoParameters,
  ): Promise<PageDto<Article>> {
    const { limit, offset, page } = new PageOptionsDto(options);

    const { rows, count } =
      await this.articlesRepository.findAndCountAll<Article>({
        where: { categoryId },
        limit,
        offset,
        attributes: { exclude: ['fullDescription'] },
      });

    return new PageDto({ rows, count, limit, page });
  }
}
