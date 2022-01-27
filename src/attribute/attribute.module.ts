import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from 'src/typeentity/entity/typeentity.entity';
import { TypeValue } from 'src/typevalue/entity/typevalue.entity';
import { AttributeController } from './attribute.controller';
import { AttributeService } from './attribute.service';
import { Attribute } from './entity/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute,TypeEntity,TypeValue])],
  controllers: [AttributeController],
  providers: [AttributeService]
})
export class AttributeModule {}
