
import { EmployeeContract } from 'src/employeecontract/entity/employeecontract.entity';
import { TypeEntity } from 'src/typeentity/entity/typeentity.entity';
import { Value } from 'src/value/entity/value.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({nullable: true})
  email: string;

  @Column({nullable: true})
  image: string;

  @OneToMany(()=>Value, value=>value.employee, {eager:true})
  values: Value[]

  @ManyToOne(()=>TypeEntity, typeentity=>typeentity.employees, {onDelete:'SET NULL'})
  typeentity: TypeEntity;

  @OneToMany(()=>EmployeeContract, employeecontract=>employeecontract.employee, {eager:true})
  employeecontracts: EmployeeContract[];

}