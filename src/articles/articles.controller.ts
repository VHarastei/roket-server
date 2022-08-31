import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageOptionsDtoParameters } from '../common/dtos/page-options.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Get('/news/:categoryId')
  getNews(
    @Param('categoryId') categoryId: string,
    @Query() options: PageOptionsDtoParameters,
  ) {
    return this.articleService.getNews(categoryId, options);
  }
}
