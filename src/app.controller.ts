import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiTags('Home')
  @Get()
  @ApiOperation({ summary: 'Hello' })
  getHello(): string {
    return this.appService.getHello();
  }
}
