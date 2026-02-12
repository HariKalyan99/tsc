const { DataTypes } = require("sequelize");
const sequelize = require("../connection/supabase.connection");

const Recipe = sequelize.define(
  "Recipe",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "recipes",
    schema: "public",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Recipe;
