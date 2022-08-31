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
    return this.articlesRepository.findByPk<Article>(id);
  }

  async getNews(
    categoryId: string,
    options: PageOptionsDtoParameters,
  ): Promise<PageDto<Article>> {
    console.log(options);

    const { limit, offset, page } = new PageOptionsDto(options);

    const { rows, count } =
      await this.articlesRepository.findAndCountAll<Article>({
        where: { categoryId },
        limit,
        offset,
      });

    return new PageDto({ rows, count, limit, page });
  }
}
