module.exports = (sequelize, DataTypes) => {
  const Providers = sequelize.define(
    'Providers',
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
      bank: DataTypes.STRING,
      bankAgency: DataTypes.STRING,
      documents: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cnpjId: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'providers',
    }
  );
  Providers.associate = (models) => {
    // associates Providers model with the Cnpjs model ( 1:1 );
    Providers.belongsTo(models.Cnpjs, { key: 'id', as: 'cnpj' });

    // associates Providers model with the Orders model ( 1:N );
    Providers.hasMany(models.Orders, { foreignKey: 'providerId', as: 'orders'});
  };

  return Providers;
};
