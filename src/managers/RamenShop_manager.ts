import { Repository, getRepository } from "typeorm";
import { RamenShop } from "../entities/RamenShop";

export class RamenShopManager {
  ramenShopRepository: Repository<RamenShop>;

  constructor() {
    this.ramenShopRepository = getRepository(RamenShop);
  }

  async getAll() {
    try {
      return await this.ramenShopRepository.find({ relations: ["type"] });
    } catch (err) {
      console.log(err);
    }
  }

  async getOne(identifier: string) {
    try {
      return await this.ramenShopRepository.findOne(identifier);
    } catch (err) {
      console.log(err);
    }
  }

  async createShop(ramenshop: RamenShop) {
    try {
      return await this.ramenShopRepository.save(ramenshop);
    } catch (err) {
      console.log(err);
    }
  }

  async updateShop(identifier: string, details: Partial<RamenShop>) {
    try {
      const targetShop = await this.ramenShopRepository.findOne(identifier);
      const updatedShop = await this.ramenShopRepository.merge(
        targetShop,
        details
      );
      return await this.ramenShopRepository.save(updatedShop);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteShop(identifier: string) {
    try {
      const targetShop = await this.ramenShopRepository.findOne(identifier);
      return await this.ramenShopRepository.remove(targetShop);
    } catch (err) {
      console.log(err);
    }
  }
}

export default RamenShopManager;
