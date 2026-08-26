import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entities';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  create(data: CreateProductDto): Promise<Product> {
  const product = this.productRepository.create({
    name: data.name,
    price: String(data.price),
    availableStock: data.availableStock,
  });

  return this.productRepository.save(product);
}

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}