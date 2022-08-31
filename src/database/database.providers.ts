import { Sequelize } from 'sequelize-typescript';
import { Category } from './../categories/category.entity';
import { Article } from './../articles/article.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'admin',
        database: 'roket',
        define: {
          timestamps: false,
        },
      });
      sequelize.addModels([Category, Article]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
