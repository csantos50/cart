import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @Get()
    async getAllProducts() {
        return await this.cartService.findAll();
    }
    @Get(':id')
    getcart(
        @Param('id') id: number
    ) {
        return this.cartService.findCart(id);
    }
    @Post()
    async createCart(
        @Body('user_id') user: number,
    ){
        return await this.cartService.createCart(user);
    }
    
}
