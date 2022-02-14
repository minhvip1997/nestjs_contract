import { forwardRef, Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Pet } from 'src/pets/pets.entity';
import { PetsModule } from 'src/pets/pets.module';

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), forwardRef(()=>PetsModule)],
  controllers: [OwnersController],
  providers: [OwnersService, OwnersResolver],
  exports: [OwnersService]
})
export class OwnersModule {}
