import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

/**
 * DTO for user creation.
 */
export class CreateUserDto {
  /**
   * First name of the user.
   *
   * @example John
   */
  @IsString()
  firstName: string;

  /**
   * Last name of the user.
   *
   * @example Doe
   */
  @IsString()
  lastName: string;

  /**
   * Unique email address of the user.
   *
   * @example john.doe@example.com
   */
  @IsEmail()
  email: string;

  /**
   * User's password.
   *
   * @example Password
   */
  @IsString()
  password: string;

  /**
   * User's phone number (optional and valid only for Spanish phone numbers).
   *
   * @example +34123456789
   */
  @IsOptional()
  @IsPhoneNumber('ES')
  phoneNumber: string;
}