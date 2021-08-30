import express from "express";

import RamenShop from "../../entities/RamenShop";
import { Repository, getRepository} from "typeorm";


const router = express.Router();

router.post('/ramenshop', async (req, res) => {

    const ramenShopRepsoitory = await getRepository(RamenShop);
    const { name, location, type } = req.body;
    const newRamenShop = new RamenShop();
    newRamenShop.name = name;
    newRamenShop.location = location;
    newRamenShop.type = type;
  
    await ramenShopRepsoitory.save(newRamenShop);
    return res.send(newRamenShop);
});



export {

    router as createRamenShop
}