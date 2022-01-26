import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContractModule } from './contract/contract.module';
import { AttributeModule } from './attribute/attribute.module';
import { TypevalueModule } from './typevalue/typevalue.module';
import { ValueModule } from './value/value.module';
import  config  from './../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),UserModule, ContractModule, AttributeModule, TypevalueModule, ValueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
