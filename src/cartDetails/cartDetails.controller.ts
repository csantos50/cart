import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartDetailsService } from './cartDetails.service';

@Controller('cartDetails')
export class CartDetailsController {
    constructor(private CartDetailsService: CartDetailsService) { }

    @Get(':id')
    async getCartDetails( @Param('id') id: string    ){
        return this.CartDetailsService.getCartDetails(id);
    }
    
    @Post()
    async createCart(
        @Body('card') card: number,
        @Body('product') product: string,
        @Body('price') price: number,
        @Body('qnt') qnt: number,
    ){
        return await this.CartDetailsService.addProductToCart(card,product,price,qnt);
    }
    
    @Post('delete')
    async removeFormCaert(
        @Body('card') card: number,
        @Body('product') product: string,
    ){
        return await this.CartDetailsService.removeProductFromCart(card,product);
    }
}
