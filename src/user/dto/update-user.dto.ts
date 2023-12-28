import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/swagger';

/**
 * DTO for updating user information.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) { }
