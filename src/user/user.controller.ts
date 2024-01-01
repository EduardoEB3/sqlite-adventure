import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';


/**
 * Controller for managing user-related operations.
 */
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  /**
   * Endpoint to create a new user.
   */
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  /**
   * Endpoint to update user information by ID.
   */
  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userService.updateUser(id, updateUserDto);
  }

  /**
   * Endpoint to get a list of all users.
   */
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  /**
   * Endpoint to get user information by ID.
   */
  @Get('id/:id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.userService.findOneId(id);
  }

  /**
   * Endpoint to get user information by email.
   */
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    return await this.userService.findOneEmail(email);
  }

  /**
   * Endpoint to delete a user by ID.
   */
  @Delete(':id')
  async deleteUserById(@Param('id') id: number): Promise<String> {
    return await this.userService.removeUser(id);
  }
}
