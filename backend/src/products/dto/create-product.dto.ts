import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {


  @IsNotEmpty() 
  @IsString() 
  name!: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  price!: number;

  @IsInt()
  @Min(1)
  availableStock!: number;


}