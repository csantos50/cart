import { Module } from '@nestjs/common';
import { CartDetailsService} from './cartDetails.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartDetailsEntity } from './cartDetails.entity';
import { CartDetailsController } from './cartDetails.controller';

@Module({
  imports:[TypeOrmModule.forFeature([CartDetailsEntity])],
  providers: [CartDetailsService],
  controllers: [CartDetailsController]
})
export class CartDetailsModule {}
