
import { Contract } from 'src/contract/entity/contract.entity';
import { TypeEntity } from 'src/typeentity/entity/typeentity.entity';
import { Employee } from 'src/user/entity/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class EmployeeContract {
  @PrimaryGeneratedColumn()
  id: number;


  @Column("longtext",{nullable: true})
  content: string;

  @ManyToOne(()=>Contract, contract=>contract.employeecontracts, {onDelete:'SET NULL'})
  contract: Contract;

  @ManyToOne(()=>Employee, employee=>employee.employeecontracts, {onDelete:'SET NULL'})
  employee: Employee;

}