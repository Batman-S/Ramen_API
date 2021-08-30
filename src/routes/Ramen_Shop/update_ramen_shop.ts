import express from "express";

import RamenShop from "../../entities/RamenShop";
import { Repository, getRepository } from "typeorm";

const router = express.Router();

router.patch("/ramenshop/:identifier", async (req, res) => {
    const ramenShopRepsoitory = await getRepository(RamenShop);
    const param = req.params.identifier;
    const targetShop = await ramenShopRepsoitory.findOne(param);
    const updatedShop = await ramenShopRepsoitory.merge(targetShop, req.body);
    await ramenShopRepsoitory.save(updatedShop);
  
    return res.send(updatedShop);
});

export { router as updateRamenShop };
