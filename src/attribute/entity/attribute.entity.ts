
import { TypeEntity } from 'src/typeentity/entity/typeentity.entity';
import { TypeValue } from 'src/typevalue/entity/typevalue.entity';
import { Value } from 'src/value/entity/value.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;


  @ManyToOne(()=>TypeValue, typevalue=>typevalue.attributes,{onDelete: 'SET NULL'})
  typevalue: TypeValue;

  @OneToMany(()=>Value, value=>value.attribute, {eager:true})
  values: Value[];

  @ManyToOne(()=>TypeEntity, typeentity=>typeentity.attributes, {onDelete:'SET NULL'})
  typeentity: TypeEntity;
}