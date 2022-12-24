'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem: {
        field: 'ad_valorem',
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn: {
        field: 'expires_in',
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        field: 'payment_status_sponsor',
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      paymentStatusProvider: {
        field: 'payment_status_provider',
        type: Sequelize.TINYINT,
        allowNull: false,
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
      orderId: {
        field: 'order_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id',
        },
      },
      sponsorId: {
        field: 'sponsor_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'sponsors',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  },
};
