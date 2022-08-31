import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { CategoriesController } from './categories.controller';
import { categoriesProviders } from './categories.providers';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  imports: [DatabaseModule],
  providers: [CategoriesService, ...categoriesProviders],
})
export class CategoriesModule {}
