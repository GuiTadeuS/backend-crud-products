import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Product>{
    constructor(@InjectRepository(Product) repo) {
        super(repo)
    }
}
