import { ArrayMinSize, IsArray, IsInt, IsOptional, Min, ValidateNested } from 'class-validator';
import { CreateClientDto } from '../../clients/dto/create-client.dto';
import { CreateOrderItemDto } from "./create-order-item.dto";
import { Type } from 'class-transformer';




export class CreateOrderDto{

    
    @IsInt()
    @Min(1)
    @IsOptional()
    clientId?: number;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateClientDto)
    newClient?: CreateClientDto;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    items!: CreateOrderItemDto[];

}