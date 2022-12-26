module.exports = (sequelize, DataTypes) => {
  const Buyers = sequelize.define(
    'Buyers',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cashforceTax: DataTypes.STRING,
      responsibleName: DataTypes.STRING,
      responsibleEmail: DataTypes.STRING,
      responsiblePosition: DataTypes.STRING,
      responsiblePhone: DataTypes.STRING,
      responsibleMobile: DataTypes.STRING,
      website: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: DataTypes.INTEGER,
      confirm: DataTypes.TINYINT,
      email: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'buyers',
    }
  );
  Buyers.associate = (models) => {
    // associates Buyers model with the Cnpjs model ( 1:1 );
    Buyers.hasOne(models.Cnpjs, { foreignKey: 'id', as: 'cnpj' });

    // associates Buyers model with the Orders model ( 1:N );
    Buyers.hasMany(models.Orders, { foreignKey: 'buyerId', as: 'orders'});
  };

  return Buyers;
};
