import {
    JsonController,
    Param,
    Body,
    Get,
    Post,
    Delete,
    Patch,
  } from "routing-controllers";
  import {RamenType} from "../entities/index"
  import {  RamenTypeManager } from "../managers/index";
  
  
  @JsonController("/ramentype")
  export class RamenTypeController {
    protected manager: RamenTypeManager;
  
    constructor() {
      this.manager = new RamenTypeManager();
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
    post(@Body() ramentype: RamenType) {
      return this.manager.createType(ramentype);
    }
  
    @Patch("/:identifier")
    patch(@Param("identifier") id: string, @Body() ramentype: RamenType) {
        return this.manager.updateType(id, ramentype);
    }
  
    @Delete("/:identifier")
    remove(@Param("identifier") id: string) {
        return this.manager.deleteType(id);
    }
  }
  