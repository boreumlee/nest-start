import { Module } from '@nestjs/common';
import { ShopeeModuleController } from './shopee_module.controller';
@Module({
  imports: [],
  controllers: [ShopeeModuleController],
  providers: [],
})
export class ShopeeModuleModule {}
