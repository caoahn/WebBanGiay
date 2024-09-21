const express = require("express");
const database = require("./config/database");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.route");
const { errorHandler, notFound } = require("./middleware/errors");

const app = express();
const port = process.env.PORT || 1000;

app.use(cors());
database.connect();

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
//parse application/json
app.use(bodyParser.json());

routes(app);

// ERROR HANDLE
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
