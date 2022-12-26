module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    'Orders',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      orderNfId: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      orderPath: DataTypes.STRING,
      orderFileName: DataTypes.STRING,
      orderOriginalName: DataTypes.STRING,
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: { type: DataTypes.STRING, field: 'CTE' },
      value: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      providerId: DataTypes.INTEGER,
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'orders',
    }
  );
  Orders.associate = (models) => {
    // associates Orders model with the Cnpjs model ( 1:1 );
    Orders.belongsTo(models.Cnpjs, { key: 'id', as: 'cnpj' });

    // associates Orders model with the Users model ( 1:1 );
    Orders.belongsTo(models.Users, { key: 'userId', as: 'user' });

    // associates Orders model with the Buyers model ( N:1 );
    Orders.belongsTo(models.Buyers, {
      key: 'id',
      as: 'buyer',
    });

    // associates Orders model with the Providers model ( 1:1 );
    Orders.belongsTo(models.Providers, {
      key: 'id',
      as: 'provider',
    });

    // associates Orders model with the Offers model ( 1:1 );
    Orders.hasOne(models.Offers, { foreignKey: 'orderId', as: 'offer' });

    // associates Orders model with the OrderPortions model ( 1:1 );
    Orders.hasOne(models.OrderPortions, {
      foreignKey: 'orderId',
      as: 'orderPortion',
    });
  };

  return Orders;
};
