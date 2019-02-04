'use strict';
module.exports = (sequelize, DataTypes) => {
  const Urls = sequelize.define('Urls', {
    url: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  Urls.associate = function(models) {
    Urls.belongsTo(models.User);

  };
  return Urls;
};