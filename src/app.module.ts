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
import { createOwnersLoader, createStoreOwnersLoader } from './owners/owners.loader';
import { createPetsLoader, createStoreLoader } from './pets/pets.loader';
import { PetsService } from './pets/pets.service';
import { StoreModule } from './store/store.module';
import { StoreService } from './store/store.service';




@Module({
  imports: [GraphQLModule.forRootAsync({
    imports: [OwnersModule, PetsModule, StoreModule],
    useFactory: (ownersService: OwnersService, petsService: PetsService, storesService: StoreService) => ({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: () => ({
        randomValue: Math.random(),
        createOwnersLoader: createOwnersLoader(ownersService),
        createPetsLoader: createPetsLoader(petsService),
        createStoreLoader: createStoreLoader(storesService),
        createStoreOwnersLoader: createStoreOwnersLoader(ownersService)
      }),
    }),
    inject: [OwnersService, PetsService, StoreService],
  }),TypeOrmModule.forRoot(config),UserModule, ContractModule, AttributeModule, TypevalueModule, ValueModule, EmployeecontractModule, TypeentityModule, PetsModule, OwnersModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
