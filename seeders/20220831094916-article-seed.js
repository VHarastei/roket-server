'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const articles = [...Array(20)].map(() => ({
  image: faker.image.abstract(),
  title: faker.music.songName(),
  date: faker.date.soon(),
  shortDescription: faker.lorem.lines(3),
  fullDescription: faker.lorem.lines(10),
  likesQuantity: +faker.random.numeric(),
  categoryId: Math.floor(1 + Math.random() * (3 - 1 + 1)),
  updatedAt: faker.date.soon(),
}));

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Articles', articles);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};
