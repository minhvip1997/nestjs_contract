import { Field, InputType, Int } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { CreateOwnerInput } from './create-owner.input';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
    @Field(()=>Int)
    id: number; 
}
