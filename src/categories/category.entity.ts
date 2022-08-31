import { Article } from './../articles/article.entity';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class Category extends Model {
  @Column
  name: string;

  @HasMany(() => Article)
  articles: Article[];
}
