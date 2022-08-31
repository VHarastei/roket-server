'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      });
    }
  }
  Article.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      date: DataTypes.DATE,
      shortDescription: DataTypes.TEXT,
      fullDescription: DataTypes.TEXT,
      likesQuantity: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Article',
    },
  );
  return Article;
};
