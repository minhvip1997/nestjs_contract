import * as DataLoader from 'dataloader';
import { Store } from 'src/store/store.entity';
import { StoreService } from 'src/store/store.service';
import { getRepository } from 'typeorm';
import { mapFromArray } from '../util';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';



export async function createOwnersLoader(ownersService: OwnersService) {
    return new DataLoader<number, Owner>(async (ids) => {
        // console.log(ids)
      const owners = await ownersService.getOwnersByIds(ids);
      // console.log(owners)
      const ownersMap = mapFromArray(owners, (owner) => owner.id);
        console.log(ids.map((id) => ownersMap[id]))
      return ids.map((id) => ownersMap[id]);
    });
  }

  export async function createStoreOwnersLoader(ownersService: OwnersService) {
    return new DataLoader(async (ids: number[]) => {
      
      const poll = await getRepository(Store)
        .createQueryBuilder('store')
        .leftJoinAndSelect('store.owners', 'owners')
        .where('store.id IN (:...ids)', { ids })
        .getMany();
  
  
        console.log(poll.map(poll => poll.owners))
        return poll.map(poll => poll.owners); 
        // return poll
      
    });
  }