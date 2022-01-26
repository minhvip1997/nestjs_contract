import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeValue } from './entity/typevalue.entity';
import { TypevalueController } from './typevalue.controller';
import { TypevalueService } from './typevalue.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeValue])],
  controllers: [TypevalueController],
  providers: [TypevalueService]
})
export class TypevalueModule {}
