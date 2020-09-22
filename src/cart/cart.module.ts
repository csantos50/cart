import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { CartDetailsService } from 'src/cartDetails/cartDetails.service';

@Module({
  imports:[TypeOrmModule.forFeature([CartEntity])],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
