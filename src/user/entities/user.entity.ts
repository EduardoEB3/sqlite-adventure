import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

/**
 * Entity representing a user in the system.
 */
@Entity()
export class User {
  /**
   * Unique identifier for the user (automatically generated)
   *
   * @example 1
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * First name of the user
   *
   * @example John
   */
  @Column()
  firstName: string;

  /**
   * Last name of the user
   *
   * @example Doe
   */
  @Column()
  lastName: string;

  /**
   * Unique email address of the user
   *
   * @example john.doe@example.com
   */
  @Column({ unique: true })
  email: string;

  /**
   * User's password
   *
   * @example Password
   */
  @Column()
  password: string;

  /**
   * User's phone number (nullable with a default value of null).
   * Only Spanish phone numbers are accepted.
   *
   * @example +34123456789
   */
  @Column({ default: null })
  phoneNumber: string | null;

  @BeforeInsert()
  async hashPassword() {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }
}