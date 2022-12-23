'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tradingName: {
        field: 'trading_name',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      cashforceTax: {
        field: 'cashforce_tax',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      responsibleName: {
        field: 'responsible_name',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      responsibleEmail: {
        field: 'responsbile_email',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      responsiblePosition: {
        field: 'responsible_position',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      responsiblePhone: {
        field: 'responsible_phone',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      responsibleMobile: {
        field: 'responsible_mobile',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      postalCode: {
        field: 'postal_code',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      phoneNumber: {
        field: 'phone_number',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      situation: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      situationDate: {
        field: 'situation_date',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        field: 'cnpj_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      confirm: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('buyers');
  },
};
