import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { formatWithOptions } from 'util';

@Controller('api')
export class AppController {

  appObj: any;
  constructor(public appService: AppService) {

   }


  @Get('get')
  getFormula() {
    return this.appService.getFormula();
    
  }
  @Post('/post')
  postObj(@Body() obj){
    return  this.appService.postObj(obj);
    
   
  }
  @Delete(`delete:id`)
  async deleteFromFormula(@Param('id') id) {
    return this.appService.deleteFromFormula(id);
   
  }
}
