
import { EmployeeContract } from 'src/employeecontract/entity/employeecontract.entity';
import { TypeEntity } from 'src/typeentity/entity/typeentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("longtext",{nullable: true})
  content: string;

  @ManyToOne(()=>TypeEntity, typeentity=>typeentity.contracts, {onDelete:'SET NULL'})
  typeentity: TypeEntity;

  @OneToMany(()=>EmployeeContract, employeecontract=>employeecontract.contract, {eager:true})
  employeecontracts: EmployeeContract[];

}