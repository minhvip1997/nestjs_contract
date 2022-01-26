import { Module } from '@nestjs/common';
import { TypeentityController } from './typeentity.controller';
import { TypeentityService } from './typeentity.service';

@Module({
  controllers: [TypeentityController],
  providers: [TypeentityService]
})
export class TypeentityModule {}
