'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_portions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nDup: {
        field: 'n_dup',
        type: Sequelize.STRING,
        allowNull: false,
      },
      dVenc: {
        field: 'd_venc',
        type: Sequelize.STRING,
        allowNull: false,
      },
      vDup: {
        field: 'v_dup',
        type: Sequelize.STRING,
        allowNull: false,
      },
      avaiableToMarket: {
        field: 'avaiable_to_market',
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1,
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
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('order_portions');
  },
};
