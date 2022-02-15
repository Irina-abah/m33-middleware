require("./db/connection");
const express = require('express');
const userRouter = require("./user/userRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});