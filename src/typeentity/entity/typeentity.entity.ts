
import { Attribute } from 'src/attribute/entity/attribute.entity';
import { Contract } from 'src/contract/entity/contract.entity';
import { Employee } from 'src/user/entity/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(()=>Employee, employee=>employee.typeentity,  {eager:true})
  employees: Employee[];

  @OneToMany(()=>Contract, contract=>contract.typeentity,  {eager:true})
  contracts: Contract[];

  @OneToMany(()=>Attribute, attribute=>attribute.typeentity,  {eager:true})
  attributes: Attribute[];

}