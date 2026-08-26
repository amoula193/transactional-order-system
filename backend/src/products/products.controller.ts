import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
 import { Product } from './entities/products.entities';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}


@Get()
getProducts(): Promise<Product[]> {
  return this.productService.findAll();
}

@Post()
create(@Body() data: CreateProductDto) {
  return this.productService.create(data);
}

@Get(':id')
getProductById(
  @Param('id', ParseIntPipe) id: number,
): Promise<Product | null> {
  return this.productService.findOne(id);
}


}