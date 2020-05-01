'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdImage = sequelize.define('AdImage', {
    imageUrl: DataTypes.STRING,
    redirectUrl: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE,
    position: DataTypes.INTEGER
  }, {});
  AdImage.associate = function(models) {
    // associations can be defined here
  };
  return AdImage;
};