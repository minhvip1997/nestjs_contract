
import { Resolver, Query, Args, Mutation, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';

@Resolver(of =>Pet)
export class PetsResolver {
    constructor(private petsService: PetsService){}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petsService.findAll();
    }

    @Mutation(returns=>Pet)
    createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet>{
        // console.log(createPetInput)
        return this.petsService.createPet(createPetInput);
    }

    @Query(returns => Pet)
    getPet(@Args('id',{type:()=>Int}) id: number ): Promise<Pet>{
        return this.petsService.findOne(id);
    }

    @ResolveField(returns=>Owner)
    owner(@Parent() pet:Pet): Promise<Owner>{
        return this.petsService.getOwner(pet.ownerId);
    }

    @Mutation(returns=>Pet)
    updatePet(@Args('id',{type:()=>Int}) id: number,@Args('updatePetInput') updatePetInput: UpdatePetInput): Promise<Pet>{
        // console.log(id)
        return this.petsService.update(id,updatePetInput);
    }

    
    @Mutation((returns)=>Pet)
    deletePet(@Args('id', { type: () => Int}) id: number) {
        return this.petsService.remove(id);
    }
}
