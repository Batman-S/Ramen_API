import express from "express";
import RamenShop from "../../entities/RamenShop";
import { Repository, getRepository } from "typeorm";

const router = express.Router();

router.delete("/ramenshop/:identifier", async (req, res) => {
  const ramenShopRepsoitory = await getRepository(RamenShop);
  const param = req.params.identifier;
  const targetShop = await ramenShopRepsoitory.findOne(param);

  return res.send(await ramenShopRepsoitory.remove(targetShop));
});

export { router as deleteRamenShop };
