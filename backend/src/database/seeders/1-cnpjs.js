'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'cnpjs',
      [
        {
          cnpj: '00000000000001',
          company_type: '2',
          created_at: '2020-10-29 21:20:33',
          updated_at: '2020-10-29 21:20:33',
        },
        {
          cnpj: '00000000000002',
          company_type: '1',
          created_at: '2020-10-29 21:20:33',
          updated_at: '2020-10-29 21:20:33',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  },
};
