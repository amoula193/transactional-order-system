import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
 import { Product } from './entities/products.entities';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

@Delete(':id')
@HttpCode(204)
deleteProduct(
  @Param('id', ParseIntPipe) id: number,
): Promise<void> {
  return this.productService.remove(id);
}


@Patch(':id')
patchProductById(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateProductDto: UpdateProductDto,
): Promise<Product> {
  return this.productService.update(id, updateProductDto);
}


}