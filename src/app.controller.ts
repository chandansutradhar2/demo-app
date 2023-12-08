import { Controller, Get, Delete, Body, Post, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'express';
import { User } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'demo-app-api service running';
  }

  @Get('/prev-api-version')
  getPreviousApiVersion() {
    return 0.5;
  }

  @Get('/api-version')
  getApiVersion() {
    return 1.0;
  }

  @Post('/create/user')
  createUser(@Body() body: User) {
    console.log(body.email, body.password, body.fullName);
    //todo: work of db operation
    return 'user created successfully';
  }


  @Get('/user/:userId')
  getCustomerById(@Param('userId') userId: string) {
    console.log('userId=>', userId)
    return userId;
  }


  @Get('/user/city/:city/gender/:gender')
  getCustomerByCityAndGender(@Param('city') city: string, @Param('gender') gender: string) {
    return city;
    //todo: work of db operation
    // Add your code here to perform the necessary database operations
    // ...
  }
  @Delete('/delete/user/:userId')
  deleteUser() {
    //todo: neo4j db queries and work  goes here
    return 'user deleted successfully';
  }
}
