import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartDetailsEntity } from './cartDetails.entity';

@Injectable()
export class CartDetailsService {

    constructor(@InjectRepository(CartDetailsEntity) private readonly repo: Repository<CartDetailsEntity>) { }

    async addProductToCart(cart_id: number,product_id:string,price:number,qnt:number) {
        const obj =await this.repo.insert({
            cart_id:cart_id,
            product:product_id,
            price:price,
            qnt:qnt

        });
        return obj.identifiers;
    }
    async removeProductFromCart(cart_id:number, product_id:string){
        const obj =await this.repo.delete({
            cart_id:cart_id,
            product:product_id
        })
        return obj;
    }
    async getCartDetails(cart_id){
        const obj= await this.repo.find({
            cart_id:cart_id
        });
        return obj;
    }
}
