import { Category } from './../categories/category.entity';
import {
  Table,
  Column,
  Model,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  Max,
} from 'sequelize-typescript';

@Table
export class Article extends Model {
  @Column
  image: string;

  @Column
  title: string;

  @CreatedAt
  date: Date;

  @Column('text')
  shortDescription: string;

  @Column('text')
  fullDescription: string;

  @Max(2000000)
  @Column
  likesQuantity: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
