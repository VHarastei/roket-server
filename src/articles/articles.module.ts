import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { ArticlesController } from './articles.controller';
import { articlesProviders } from './articles.providers';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController],
  imports: [DatabaseModule],
  providers: [ArticlesService, ...articlesProviders],
})
export class ArticlesModule {}
