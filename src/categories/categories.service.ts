import { Injectable, Inject } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORIES_REPOSITORY')
    private categoriesRepository: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.findAll<Category>();
  }
}
