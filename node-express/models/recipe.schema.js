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
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    steps: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: 0,
        max: 5,
      },
    },
    imageUrl: {
      type: DataTypes.JSONB,
      allowNull: true,
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

// add indexes for searcing and filtering
