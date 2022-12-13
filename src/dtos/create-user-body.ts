import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'The user name should not be empty.'
  })
  @Length(4, 100)
  name: string;

  @IsNotEmpty({
    message: 'The user function must be defined.'
  })
  function: string;
}