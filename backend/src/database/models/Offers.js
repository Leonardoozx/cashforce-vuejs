module.exports = (sequelize, DataTypes) => {
  const Offers = sequelize.define(
    'Offers',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      tax: DataTypes.STRING,
      tariff: DataTypes.STRING,
      adValorem: DataTypes.STRING,
      float: DataTypes.STRING,
      expiresIn: DataTypes.DATE,
      paymentStatusSponsor: DataTypes.TINYINT,
      paymentStatusProvider: DataTypes.TINYINT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      orderId: DataTypes.INTEGER,
      sponsorId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Offers',
    }
  );
  Offers.associate = (models) => {
    // associates Offers model with the Orders model ( 1:1 );
    Offers.belongsTo(models.Orders, { key: 'orderId', as: 'order' });

    // associates Offers model with the Sponsors model ( N:1 );
    Offers.belongsTo(models.Sponsors, { key: 'sponsorId', as: 'sponsor' });
  };
  return Offers;
};
