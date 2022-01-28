import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { Employee } from 'src/user/entity/employee.entity';
import { createQueryBuilder, getConnection, getRepository } from 'typeorm';
import { CreatEmployeeContractDto } from './dto/create_employeecontract.dto';
import { EmployeecontractService } from './employeecontract.service';

@Controller('employeecontract')
export class EmployeecontractController {

    constructor(
        private employeecontractService: EmployeecontractService
    ){}

    @Get()
    async getAllEmployeeContract(){
        return this.employeecontractService.getAll();
    }

    @Post('add')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    @ApiCreatedResponse({ type: CreatEmployeeContractDto})
    async createEmployeeContract(@Body() newContract: CreatEmployeeContractDto){
        return this.employeecontractService.createNewContract(newContract);
    }

    @Get(':id')
    async getEmployeeContractId(@Param('id') id :number){
        // console.log(id)
        // const user = await getConnection()
        //             .createQueryBuilder()
        //             .select("employee")
        //             .from(Employee, "employee")
        //             .where("employee.id = :id")
        //             .getOne();
        // const user = await getConnection()
        //             .createQueryBuilder()
        //             .select("employee")
        //             .innerJoinAndSelect('employeecontract.employee', 'employee')
        //             .innerJoinAndSelect('employeecontract.contract', 'contract');
        //                 console.log(user)
        // return user;

        // const query = createQueryBuilder('employee_contract', 'w')
        // .innerJoinAndSelect('w.employee', 'u')
        // .innerJoinAndSelect('w.contract','q'); // 'w.userId = u.id' may be omitted
        // const result = await query.getMany();
        // return result;

        const user =  await getRepository(Employee)
        .createQueryBuilder("employee")
        .innerJoinAndSelect("employee.employeecontracts","ec")
        .innerJoinAndSelect("ec.contract","c")
        .where("employee.id = :id", { id: id })
        .getOne();

        // console.log(user)
        return user;

    }
}
