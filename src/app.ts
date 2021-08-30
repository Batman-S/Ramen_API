import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
const express = require("express");
import { RamenShopController } from "./controllers";
import { createExpressServer } from "routing-controllers";


const app = createExpressServer({routePrefix: "/ramenapi", controllers: [RamenShopController] });
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

