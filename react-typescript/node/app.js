require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();

app.use(express.json());

const PORT = 8081;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: console.log,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

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

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    schema: "public",
    timestamps: true,
    underscored: true,
  },
);

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.findAll();

    console.log(recipes);

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/recipes", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    console.log(recipe);
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const recipes = await Product.findAll();

    console.log(recipes);

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const recipe = await Product.create(req.body);
    console.log(recipe);
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to Supabase DB");

    // await sequelize.sync({ alter: true }); // 🔥 ADD THIS
    // console.log("✅ Tables synced");

    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
