import { forwardRef, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), forwardRef(()=>OwnersModule)],
  providers: [StoreService, StoreResolver],
  exports: [StoreService]
})
export class StoreModule {}
