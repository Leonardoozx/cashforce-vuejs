module.exports = (sequelize, DataTypes) => {
  const Cnpjs = sequelize.define(
    'Cnpjs',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'cnpjs',
    }
  );
  Cnpjs.associate = (models) => {
    // associates Cnpjs model with the Providers model ( 1:1 );
    Cnpjs.hasMany(models.Providers, { foreignKey: 'cnpjId', as: 'provider' });

    // associates Cnpjs model with the Sponsors model ( 1:1 );
    Cnpjs.hasMany(models.Sponsors, {
      foreignKey: 'cnpjId',
      as: 'sponsor',
    });

    // associates Cnpjs model with the Buyers model ( 1:1 );
    Cnpjs.hasMany(models.Buyers, { foreignKey: 'cnpjId', as: 'buyer' });

    // associates Cnpjs model with the Orders model ( N:1 );
    Cnpjs.hasMany(models.Orders, { foreignKey: 'cnpjId', as: 'order' });
  };
  return Cnpjs;
};
