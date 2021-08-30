import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Patch,
} from "routing-controllers";
import RamenShop from "../entities/RamenShop";
import { RamenShopManager } from "../managers/index";


@JsonController("/ramenshop")
export class RamenShopController {
  protected manager: RamenShopManager;

  constructor() {
    this.manager = new RamenShopManager();
  }

  @Get()
  getAll() {
    return this.manager.getAll();
  }

  @Get("/:identifier")
  getOne(@Param("identifier") id: string) {
    return this.manager.getOne(id);
  }

  @Post()
  post(@Body() ramenshop: RamenShop) {
    return this.manager.createShop(ramenshop);
  }

  @Patch("/:identifier")
  patch(@Param("identifier") id: string, @Body() ramenshop: RamenShop) {
      return this.manager.updateShop(id, ramenshop);
  }

  @Delete("/:identifier")
  remove(@Param("identifier") id: string) {
      return this.manager.deleteShop(id);
  }
}
