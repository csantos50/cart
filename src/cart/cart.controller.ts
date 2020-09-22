import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CartDetailsService } from 'src/cartDetails/cartDetails.service';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @MessagePattern('all')
    async getAllCarts() {
        return await this.cartService.findAll();
    }
    @MessagePattern('getCart')
    async getCart(
        id: number
    ) {
        return await this.cartService.findCart(id);
    }
    @MessagePattern('getCartUser')
    async getCartUser(
        user: number
    ) {
        const cart= await this.cartService.findCartUser(user);
        if(!cart){
            return {};
        }
        return cart;

    }
    @MessagePattern('createCart')
    async createCart(
        user: number,
    ){
        return await this.cartService.createCart(user);
    }
    
}
