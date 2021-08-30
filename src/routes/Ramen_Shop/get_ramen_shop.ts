import express from "express";

import RamenShop from "../../entities/RamenShop";
import { Repository, getRepository } from "typeorm";

const router = express.Router();

router.get("/ramenshop", async (req, res) => {
    const ramenShopRepsoitory = await getRepository(RamenShop);
    return res.send(await ramenShopRepsoitory.find());
});

router.get("/ramenshop/:identifier", async (req, res) => {
    const ramenShopRepsoitory = await getRepository(RamenShop);
    return res.send(await ramenShopRepsoitory.findOne(req.params.identifier));
});

export { router as getRamenShop };
