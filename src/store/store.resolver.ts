
import { Resolver, Query, Args, Mutation, Int, Parent, ResolveField, Context } from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { Store } from './store.entity';
import { StoreService } from './store.service';

@Resolver(()=>Store)
export class StoreResolver {


    constructor(
        private readonly storesService: StoreService
    ){}

    @Query(()=>[Store],{name: 'stores'})
    stores(){
        return this.storesService.findAll();
    }

    @Query(returns => Store)
    getStore(@Args('id',{type:()=>Int}) id: number ): Promise<Store>{
        return this.storesService.findOne(id);
    }

    @ResolveField()
    async owners(@Parent() store: Store, @Context('createStoreOwnersLoader') createStoreOwnersLoader: DataLoader<number, Store>) {
      const { id } = store;
    //   console.log(id)
        return await createStoreOwnersLoader.load(id);
    }
}
