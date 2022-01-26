
import { Attribute } from 'src/attribute/entity/attribute.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class TypeValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(()=>Attribute, attribute=> attribute.typevalue, {eager:true})
  attributes: Attribute[];
}