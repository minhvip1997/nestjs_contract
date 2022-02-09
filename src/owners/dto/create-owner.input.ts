import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateOwnerInput {
    @Field()
    name: string;
}
