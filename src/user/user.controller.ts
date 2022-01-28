import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { createQueryBuilder, getConnection } from 'typeorm';
import { CreatEmployeeDto } from './dto/create-employee.dto';
import { EditEmployeeDto } from './dto/edit-employee.dto';
import { Employee } from './entity/employee.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    getAll(){
        return this.userService.getAll()
    }

    @Post('add')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    @ApiCreatedResponse({ type: CreatEmployeeDto})
    createEmployee(@Body() createEmployee: CreatEmployeeDto){
        // console.log(createEmployee)
        return this.userService.createEmployee(createEmployee);
    }

    @Get(':id')
    getEmployeeid(@Param('id') id: number){
        return this.userService.getOne(id);
    }

    @Put(':id')
    // @ApiConsumes('multipart/form-data')
    updatePproduct(@Param('id') id: number, @Body() editEmployeeDto: EditEmployeeDto){
        // console.log(id);
        // console.log(editEmployeeDto);
        return this.userService.editOne(id, editEmployeeDto);
    }

    @Delete(':id')
    deleteEmployee(@Param('id') id: number){
        return this.userService.deleteEmployee(id);
    }

    

}
