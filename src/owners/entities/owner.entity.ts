import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Pet } from "src/pets/pets.entity";
import { Store } from "src/store/store.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Owner {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @OneToMany(()=>Pet, pet=>pet.owner)
    @Field(type=>[Pet],{nullable: true})
    pets?: Pet[];

    @ManyToMany(() => Store, store=>store.owners)
    @Field(type=>[Store],{nullable: true})
    stores?: Store[];
}
