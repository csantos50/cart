import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from './cart.entity';

@Injectable()
export class CartService {

    constructor(@InjectRepository(CartEntity) private readonly repo: Repository<CartEntity>) { }


    async findAll(): Promise<CartEntity[]> {

        return this.repo.find();
    }


    async findCart(id: number): Promise<CartEntity> {
        return this.repo.findOne(id);
    }
    async findCartUser(user_id: number): Promise<CartEntity> {
        return this.repo.findOne({
            user_id:user_id
        });
    }
    async createCart(user: number) {
        const newCart=await this.repo.insert({user_id:user});
        return newCart.identifiers;
    }
}
