const userRoutes = require("./user.route");
const categoryRoutes = require("./category.route");
const productRoutes = require("./product.route");
const orderRoutes = require("./order.route");
const uploadRoutes = require("./upload.route");
const importData = require("../DataImport");

module.exports = (app) => {
  app.use("/api/import", importData);

  app.use("/api/users", userRoutes);

  app.use("/api/categories", categoryRoutes);

  app.use("/api/products", productRoutes);

  app.use("/api/orders", orderRoutes);

  app.use("/api/upload", uploadRoutes);
};
