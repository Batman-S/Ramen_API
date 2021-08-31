import { Repository, getRepository, DeleteResult } from "typeorm";
import {RamenShop} from "../entities/RamenShop"


export class RamenShopManager {

    ramenShopRepository: Repository<RamenShop>

    constructor() {
        this.ramenShopRepository = getRepository(RamenShop);
    }

    async getAll() {
        return await this.ramenShopRepository.find({relations: ['type']});
    }

    async getOne(identifier: string) {
        return await this.ramenShopRepository.findOne(identifier)
    }

    async createShop(ramenshop: RamenShop) {
        return await this.ramenShopRepository.save(ramenshop)
    }

    async updateShop(identifier: string, details: Partial<RamenShop>) {
        const targetShop = await this.ramenShopRepository.findOne(identifier);
        const updatedShop = await this.ramenShopRepository.merge(targetShop, details);
        return await this.ramenShopRepository.save(updatedShop);
        
    }

    async deleteShop(identifier: string) {
        const targetShop = await this.ramenShopRepository.findOne(identifier)
        return await this.ramenShopRepository.remove(targetShop)
    }

}


export default RamenShopManager;