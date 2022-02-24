import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { Store } from './store.entity';

@Injectable()
export class StoreService {

    constructor(
        @InjectRepository(Store) private storesRepository: Repository<Store>,
        @Inject(forwardRef(() => OwnersService))
        private ownersService: OwnersService,
        ){}


    findAll(){
    return this.storesRepository.find({
        relations: ["owners"]
        });
}

async getStoresByIds(ids: readonly number[]) {
    
    const stores = await this.storesRepository.find();
    // console.log(owners) 
    return stores.filter((u) => ids.includes(u.id));
  }

  findOne(id: number): Promise<Store>{
    return this.storesRepository.findOneOrFail(id);
}
}
