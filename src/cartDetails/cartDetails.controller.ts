import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CartDetailsService } from './cartDetails.service';

@Controller('cartDetails')
export class CartDetailsController {
    constructor(private CartDetailsService: CartDetailsService) { }

    @MessagePattern('cart')
    async getCartDetails(id: number ){
        return this.CartDetailsService.getCartDetails(id);
    }
    
    @MessagePattern('addproduct')
    async createCart(
        data: any,
    ){
        console.log(data)
        return await this.CartDetailsService.addProductToCart(data.card,data.product,data.price,data.qnt);
    }
    
    @MessagePattern('delete')
    async removeFormCaert(
        data: any,
    ){
        return await this.CartDetailsService.removeProductFromCart(data.card,data.product);
    }
}
