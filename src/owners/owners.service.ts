import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetsService } from 'src/pets/pets.service';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
    @Inject(forwardRef(() => PetsService))
    private petsService: PetsService,
    ){}

  
  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownersRepository.create(createOwnerInput);
    return this.ownersRepository.save(newOwner);
  }

  findAll() {
    console.log(this.petsService)
    return this.ownersRepository.find({
      relations: ["stores","pets"]
    });
  }

  findOne(id: number) {
    return this.ownersRepository.findOneOrFail(id);
  }

  update(id: number, updateOwnerDto: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
  

  async petsOfOwner(id: number){
    const data  = await this.petsService.findAllByOwnerId(id);
    return data;
  }


   async getOwnersByIds(ids: readonly number[]) {
    
    const owners = await this.ownersRepository.find();
    // console.log(owners) 
    return owners.filter((u) => ids.includes(u.id));
  }
}
