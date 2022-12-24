'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      orderNfId: {
        unique: true,
        field: 'order_nf_id',
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        field: 'order_number',
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        unique: true,
        field: 'order_path',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      orderFileName: {
        unique: true,
        field: 'order_file_name',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      orderOriginalName: {
        unique: true,
        field: 'order_original_name',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      emissionDate: {
        field: 'emission_date',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      pdfFile: {
        field: 'pdf_file',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      emitedTo: {
        field: 'emited_to',
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        field: 'n_nf',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      CTE: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      value: {
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
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        field: 'buyer_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        field: 'provider_id',
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        field: 'order_status_buyer',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '0',
      },
      orderStatusProvider: {
        field: 'order_status_provider',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '0',
      },
      deliveryReceipt: {
        field: 'delivery_receipt',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      cargoPackingList: {
        field: 'cargo_packing_list',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      deliveryCtrc: {
        field: 'delivery_ctrc',
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
