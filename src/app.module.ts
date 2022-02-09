import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContractModule } from './contract/contract.module';
import { AttributeModule } from './attribute/attribute.module';
import { TypevalueModule } from './typevalue/typevalue.module';
import { ValueModule } from './value/value.module';
import { EmployeecontractModule } from './employeecontract/employeecontract.module';
import { TypeentityModule } from './typeentity/typeentity.module';
import { PetsModule } from './pets/pets.module';
import  config  from './../ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { OwnersModule } from './owners/owners.module';




@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),TypeOrmModule.forRoot(config),UserModule, ContractModule, AttributeModule, TypevalueModule, ValueModule, EmployeecontractModule, TypeentityModule, PetsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
