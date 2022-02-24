import { Args, Context, Int, Mutation, Parent, Query, ResolveField, ResolveProperty, Resolver } from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { Pet } from 'src/pets/pets.entity';
import { PetsService } from 'src/pets/pets.service';
import { Store } from 'src/store/store.entity';
import { createQueryBuilder } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';

@Resolver(()=>Owner)
export class OwnersResolver {
    constructor(
        private readonly ownersService: OwnersService
        ){

    }

    @Mutation(()=>Owner)
    createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput){
        return this.ownersService.create(createOwnerInput);
    }

    @Query(()=>[Owner],{name: 'owners'})
    findAll(){
        return this.ownersService.findAll();
    }

    @Query(()=>Owner, {name: 'owner'})
    findOne(@Args('id',{type: ()=>Int}) id:number){
        return this.ownersService.findOne(id);
    }

    @Mutation(()=>Owner)
    updateOwner(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput){
        return this.ownersService.update(updateOwnerInput.id, updateOwnerInput);
    }

    @Mutation(()=>Owner)
    removeOwner(@Args('id',{type:()=>Int}) id: number){
        return this.ownersService.remove(id);
    }

    @ResolveField()
    async pets(@Parent() owner: Owner,@Context('createPetsLoader') petsLoader: DataLoader<number, Pet>) {
      const { id } = owner;
      console.log(id)
    //   return this.ownersService.petsOfOwner(id);
        return await petsLoader.load(id);
    }

    @ResolveField()
    async stores(@Parent() owner: Owner,@Context('createStoreLoader') storesLoader: DataLoader<number, Store>) {
      const { id } = owner;
      console.log(id)
    //   return this.ownersService.petsOfOwner(id);
        return await storesLoader.load(id);
    }
}
