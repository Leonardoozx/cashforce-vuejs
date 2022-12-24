'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        field: 'phone_number',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      departament: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      verificationCode: {
        field: 'verification_code',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      emailChecked: {
        field: 'email_checked',
        type: Sequelize.TINYINT,
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
      cashforceAdm: {
        field: 'cashforce_adm',
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  },
};
