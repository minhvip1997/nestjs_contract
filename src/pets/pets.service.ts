import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
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
        private  ownerService: OwnersService,
        @Inject(forwardRef(() => PetsService))
        private petsService: PetsService,

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

    public async update(
        id: number,
        updatePetInput,
      ): Promise<Pet> {
        // updateUserInput.password = bcrypt.hashSync(updateUserInput.password, 8);
    
        let found = await this.findOne(id);
        // console.log(found)
        return await this.petsRepository.save({ ...found, ...updatePetInput });
      }

      async deleteOne(id :number){
          let found = await this.findOne(id);
         this.petsRepository.remove(found);
         return  id;
      }

      async remove(id: number) {
        let proj = this.findOne(id)
        if (proj) {
            let ret = await this.petsRepository.delete(id)
            if (ret.affected === 1) {
                return proj;
            }
        }
        throw new NotFoundException(`Record cannot find by id ${id}`)
    }

    async findAllByOwnerId(id: number): Promise<Pet[]>{
        const result = await this.petsRepository.find({ownerId: id});
        return result;
    }

    async getPetsByIds(ids: readonly number[]) {
    
        const pets = await this.petsRepository.find();
        // console.log(pets)
        return pets.filter((u) => ids.includes(u.ownerId));
      }
}
