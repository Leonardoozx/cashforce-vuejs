module.exports = (sequelize, DataTypes) => {
  const Sponsors = sequelize.define(
    'Sponsors',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cashForceTax: DataTypes.STRING,
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
      account: DataTypes.STRING,
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
      tableName: 'sponsors',
    }
  );
  Sponsors.associate = (models) => {
    // associates Sponsors model with the Cnpjs model ( 1:1 );
    Sponsors.hasOne(models.Cnpjs, { foreignKey: 'id', as: 'cnpj' });

    // associates Sponsors model with the Offers model ( 1:N );
    Sponsors.hasMany(models.Offers, { foreignKey: 'sponsorId', as: 'offer' });
  };

  return Sponsors;
};
