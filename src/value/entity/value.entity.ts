
import { Attribute } from 'src/attribute/entity/attribute.entity';
import { Employee } from 'src/user/entity/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Value {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(()=>Attribute, attribute=>attribute.values, {onDelete:'SET NULL'})
  attribute: Attribute;

  @ManyToOne(()=>Employee, employee=>employee.values, {onDelete:'SET NULL'})
  employee: Employee;

}