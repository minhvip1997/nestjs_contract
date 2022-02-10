import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {

    constructor(
        @InjectRepository(Pet) private readonly petsRepository:Repository<Pet>,
        private  ownerService: OwnersService
        ){}

    createPet(createPetInput: CreatePetInput): Promise<Pet>{
        const newPet = this.petsRepository.create(createPetInput);

        return this.petsRepository.save(newPet)
    }

    async findAll(): Promise<Pet[]>{
        return this.petsRepository.find();
    }

    findOne(id: number): Promise<Pet>{
        return this.petsRepository.findOneOrFail(id);
    }

    getOwner(ownerId: number): Promise<Owner>{
        return this.ownerService.findOne(ownerId);
    }

    editOne(id: number, updatePetInput: UpdatePetInput){
        
        const pet =  this.findOne(id)
        const editPet = Object.assign(pet, updatePetInput);
        console.log(editPet)
        return  this.petsRepository.save(editPet);
    }
}
