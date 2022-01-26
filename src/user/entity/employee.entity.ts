
import { Value } from 'src/value/entity/value.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';

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

}