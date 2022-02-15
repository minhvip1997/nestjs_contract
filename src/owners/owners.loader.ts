import * as DataLoader from 'dataloader';
import { mapFromArray } from '../util';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';



export async function createOwnersLoader(ownersService: OwnersService) {
    return new DataLoader<number, Owner>(async (ids) => {
        console.log(ids)
      const owners = await ownersService.getOwnersByIds(ids);
      // console.log(owners)
      const ownersMap = mapFromArray(owners, (owner) => owner.id);
        console.log(ids.map((id) => ownersMap[id]))
      return ids.map((id) => ownersMap[id]);
    });
  }