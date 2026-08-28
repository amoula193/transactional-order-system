import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entities';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
  const product = await this.productRepository.findOneBy({ id });

  if (!product) {
    throw new NotFoundException(`Product with id ${id} was not found`);
  }

  return product;
}

  create(data: CreateProductDto): Promise<Product> {
  const product = this.productRepository.create({
    name: data.name,
    price: String(data.price),
    availableStock: data.availableStock,
  });

  return this.productRepository.save(product);
}

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
  const product = await this.findOne(id);

  Object.assign(product, updateProductDto);

  return this.productRepository.save(product);
}


  async remove(id: number): Promise<void> {
  const product = await this.findOne(id);

  await this.productRepository.remove(product);
}




}