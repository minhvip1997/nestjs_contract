import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owners/entities/owner.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Store{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name?: string;

    @Column({nullable: true})
    @Field({nullable: true})
    address?: string;

    @ManyToMany(() => Owner, owner=>owner.stores)
    @JoinTable()
    @Field(type=>[Owner],{nullable: true})
    owners?: Owner[];
}