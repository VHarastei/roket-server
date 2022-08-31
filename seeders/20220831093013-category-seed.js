'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const categories = [...Array(3)].map(() => ({
  name: faker.word.noun(),
}));

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Categories', categories);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
