import "reflect-metadata";
import { createConnection} from "typeorm";
import { RamenShopController } from "./controllers";
import { createExpressServer } from "routing-controllers";
import { RamenTypeController } from "./controllers";
const express = require("express");



const app = createExpressServer({routePrefix: "/ramenapi", controllers: [RamenShopController, RamenTypeController] });
app.use(express.json());

const App = async () => {
  createConnection()
    .then(async (connection) => {
      app.use(express.static('./public'));
      app.listen(5000, () => console.log("Server Running on PORT: 5000"));
    })
    .catch((error) => console.log(error));
};

App();

