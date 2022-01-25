import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entity/employee.entity';
import { v4 as uuidv4 } from 'uuid';
import { EditEmployeeDto } from './dto/edit-employee.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Employee) private readonly userRepository: Repository<Employee>
    ) {
      
    }

    async getAll(): Promise<Employee[]> {
        return this.userRepository.find();
    }

    async getOne(id: number): Promise<Employee> {
        try {
            const employee = await this.userRepository.findOne(id);
            return employee;
        } catch (error) {
            throw error;
        }
    }

    createEmployee(employee: CreatEmployeeDto){
        

        const newEmployee = this.userRepository.create(employee);

        return this.userRepository.save(newEmployee);
    } 

    async editOne(id: number, dto: EditEmployeeDto){
        const user = await this.getOne(id)
        const editUser = Object.assign(user, dto);
  
         return await this.userRepository.save(editUser);
    }

    async deleteEmployee(id: number): Promise<Employee> {
        try {
          const employee = await this.getOne(id);
    
          return this.userRepository.remove(employee); 
        } catch (error) {
            throw error;
        }
    
      }
}
