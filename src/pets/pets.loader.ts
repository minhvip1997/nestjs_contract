import * as DataLoader from 'dataloader';
import { Owner } from 'src/owners/entities/owner.entity';
import { StoreService } from 'src/store/store.service';
import { getRepository } from 'typeorm';
import { mapFromArray } from '../util';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';




export async function createPetsLoader(petsService: PetsService) {
  return new DataLoader(async (ids: number[]) => {
    
    const poll = await getRepository(Owner)
      .createQueryBuilder('owner')
      .leftJoinAndSelect('owner.pets', 'pets')
      .where('owner.id IN (:...ids)', { ids })
      .getMany();


      console.log(poll.map(poll => poll.pets))
      return poll.map(poll => poll.pets); 
      // return poll
    
  });
  }

  export async function createStoreLoader(storeService: StoreService) {
    return new DataLoader(async (ids: number[]) => {
      
      const poll = await getRepository(Owner)
        .createQueryBuilder('owner')
        .leftJoinAndSelect('owner.stores', 'stores')
        .where('owner.id IN (:...ids)', { ids })
        .getMany();
  
  
        console.log(poll.map(poll => poll.stores))
        return poll.map(poll => poll.stores); 
        // return poll
      
    });
    }