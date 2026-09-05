import { IsInt, IsNotEmpty, IsPositive, IsString, Min, min } from "class-validator"



export class CreateOrderItemDto{

    @IsInt()
    @Min(1)
    productId!: number

    
    @IsInt()
    @Min(1)
    orderedQuantity!: number

    

}


