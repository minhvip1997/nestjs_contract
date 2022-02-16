import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { IsAlpha } from 'class-validator';
import { CreatePetInput } from './create-pet.input';

@InputType()
export class UpdatePetInput extends CreatePetInput{
    @Field(()=>Int)
    id: number; 


    // @Field({nullable: true})
    // ownerId?: number;

    @Field({nullable: true})
    ownerId?: number;
}
