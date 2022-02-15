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
import { OwnersService } from './owners/owners.service';
import { createOwnersLoader } from './owners/owners.loader';
import { createPetsLoader } from './pets/pets.loader';
import { PetsService } from './pets/pets.service';




@Module({
  imports: [GraphQLModule.forRootAsync({
    imports: [OwnersModule, PetsModule],
    useFactory: (ownersService: OwnersService, petsService: PetsService) => ({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: () => ({
        randomValue: Math.random(),
        createOwnersLoader: createOwnersLoader(ownersService),
        createPetsLoader: createPetsLoader(petsService),
      }),
    }),
    inject: [OwnersService, PetsService],
  }),TypeOrmModule.forRoot(config),UserModule, ContractModule, AttributeModule, TypevalueModule, ValueModule, EmployeecontractModule, TypeentityModule, PetsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
