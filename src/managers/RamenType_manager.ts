import { Repository, getRepository, DeleteResult } from "typeorm";
import {RamenType} from "../entities/index"


export class RamenTypeManager {

    ramenTypeRepository: Repository<RamenType>

    constructor() {
        this.ramenTypeRepository = getRepository(RamenType);
    }

    async getAll() {
        return await this.ramenTypeRepository.find();
    }

    async getOne(identifier: string) {
        const targetType = await this.ramenTypeRepository.findOne(identifier, { relations: ["ramenshops"] })
        return targetType;
    }

    async createType(ramentype: RamenType) {
        return await this.ramenTypeRepository.save(ramentype)
    }

    async updateType(identifier: string, details: Partial<RamenType>) {
        const targetType = await this.ramenTypeRepository.findOne(identifier);
        const updatedType = await this.ramenTypeRepository.merge(targetType, details);
        return await this.ramenTypeRepository.save(updatedType);
        
    }

    async deleteType(identifier: string) {
        const targetType = await this.ramenTypeRepository.findOne(identifier)
        return await this.ramenTypeRepository.remove(targetType)
    }

    

}


export default RamenTypeManager;