const dotenv = require("dotenv");
dotenv.config();
const e = require("express");
const cors = require("cors");
const recipeRouter = require("./routes/recipe.route");
const sequelize = require("./connection/supabase.connection");
const PORT = 8081;
const morgan = require("morgan");
const logger = require("./logger/logger");

const app = e();
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.use(morgan("dev"));

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    logger.info({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${Date.now() - start}ms`,
      body: req.body,
    });
  });

  next();
});

app.use("/recipes", recipeRouter);

app.listen(PORT, async () => {
  await sequelize.authenticate();
  if (process.env.NODE_ENV === "development") {
    console.log("DB synced with the related table schemas");
    await sequelize.sync({ alter: true });
  }
  console.log("DB connection established");
  console.log(`Connection established on port: ${PORT}`);
});
