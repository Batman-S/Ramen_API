import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Request, Response } from "express";
const express = require("express");
import RamenShop from "./entities/RamenShop";
import { createRamenShop } from "./routes/Ramen_Shop/create_ramen_shop";
import { getRamenShop } from "./routes/Ramen_Shop/get_ramen_shop";
import { updateRamenShop } from "./routes/Ramen_Shop/update_ramen_shop";
import { deleteRamenShop } from "./routes/Ramen_Shop/delete_ramen_shop";
import { defaultView } from "./routes/View/create_default_view";

const app = express();
app.use(express.json());



createConnection()
  .then(async (connection) => {
    app.use(defaultView)
    app.use(createRamenShop);
    app.use(getRamenShop);
    app.use(updateRamenShop);
    app.use(deleteRamenShop);
    app.listen(5000, () => console.log("Server Running on PORT: 5000"));
  })
  .catch((error) => console.log(error));
