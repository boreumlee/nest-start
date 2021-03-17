import { Res, Controller, Get, Param } from '@nestjs/common';
@Controller('module')
export class ShopeeModuleController {
  @Get('list')
  findList(@Res() res): string {
    return Object.assign({ userName: '이정주' });
  }
  @Get(':module_id')
  saveUser(@Param('module_id') module_id: number): string {
    return Object.assign({
      statusCode: 201,
      data: payload,
      statusMsg: 'created successfully',
    });
  }
}
