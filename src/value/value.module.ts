import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Value } from './entity/value.entity';
import { ValueController } from './value.controller';
import { ValueService } from './value.service';

@Module({
  imports: [TypeOrmModule.forFeature([Value])],
  controllers: [ValueController],
  providers: [ValueService]
})
export class ValueModule {}
