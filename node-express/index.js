const dotenv = require("dotenv");
dotenv.config();
const e = require("express");
const cors = require("cors");
const recipeRouter = require("./routes/recipe.route");
const sequelize = require("./connection/supabase.connection");
const PORT = 8081;

const app = e();
app.use(e.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.use("/recipes", recipeRouter);

app.listen(PORT, async () => {
  await sequelize.authenticate();
  if (process.env.NODE_ENV === "development") {
    console.log("DB synced with the related table schemas");
    await sequelize.sync();
  }
  console.log("DB connection established");
  console.log(`Connection established on port: ${PORT}`);
});
