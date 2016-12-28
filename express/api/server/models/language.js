/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('language', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ISO639_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO639_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'language'
  });
};
