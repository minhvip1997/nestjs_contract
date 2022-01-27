import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './entity/typeentity.entity';
import { TypeentityController } from './typeentity.controller';
import { TypeentityService } from './typeentity.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  controllers: [TypeentityController],
  providers: [TypeentityService]
})
export class TypeentityModule {}
