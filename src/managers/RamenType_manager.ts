import { rest } from "lodash";
import { Repository, getRepository } from "typeorm";
import { RamenType } from "../entities/index";

export class RamenTypeManager {
  ramenTypeRepository: Repository<RamenType>;

  constructor() {
    this.ramenTypeRepository = getRepository(RamenType);
  }

  async getAll() {
    try {
      return await this.ramenTypeRepository.find();
    } catch (err) {
      console.log(err);
    }
  }

  async getOne(identifier: string) {
    try {
      const targetType = await this.ramenTypeRepository.findOne(identifier, {
        relations: ["ramenshops"],
      });
      return targetType;
    } catch (err) {
      console.log(err);
    }
  }

  async createType(ramentype: RamenType) {
    try {
      return await this.ramenTypeRepository.save(ramentype);
    } catch (err) {
      console.log(err);
    }
  }

  async updateType(identifier: string, details: Partial<RamenType>) {
    try {
      const targetType = await this.ramenTypeRepository.findOne(identifier);
      const updatedType = await this.ramenTypeRepository.merge(
        targetType,
        details
      );
      return await this.ramenTypeRepository.save(updatedType);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteType(identifier: string) {
    try {
      const targetType = await this.ramenTypeRepository.findOne(identifier);
      return await this.ramenTypeRepository.remove(targetType);
    } catch (err) {
      console.log(err);
    }
  }
}

export default RamenTypeManager;
