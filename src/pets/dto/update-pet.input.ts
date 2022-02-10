import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { CreatePetInput } from './create-pet.input';

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
    @Field(()=>Int)
    id: number; 

    @Field()
    name: string;

    @Field()
    type: string;

    @Field(type=>Int)
    ownerId: number;
}
