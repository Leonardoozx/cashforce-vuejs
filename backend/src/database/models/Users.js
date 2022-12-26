module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.TINYINT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cashforceAdm: DataTypes.TINYINT,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    }
  );
  Users.associate = (models) => {
    // Associates Users model with the Orders model ( 1:N )
    Users.hasMany(models.Orders, { foreignKey: 'userId', as: 'orders' });
  };
  return Users;
};
