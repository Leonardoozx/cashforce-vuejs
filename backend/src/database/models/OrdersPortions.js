module.exports = (sequelize, DataTypes) => {
  const OrderPortions = sequelize.define(
    'OrderPortions',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      avaiableToMarket: DataTypes.TINYINT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      orderId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'order_portions',
    }
  );
  OrderPortions.associate = (models) => {
    // associates OrderPortions model with the Orders model ( 1:1 );
    OrderPortions.hasOne(models.Orders, { foreignKey: 'id', as: 'order' });
  };
  return OrderPortions;
};
