import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";
import { Pet } from "../pets.entity";


@InputType()
export class CreatePetInput extends Pet{

    // @IsAlpha()
    @Field({nullable: true})
    name?: string; 

    @Field({nullable: true})
    type?: string;

    @Field({nullable: true})
    ownerId?: number;

}