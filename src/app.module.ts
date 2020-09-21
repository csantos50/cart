import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConnectionService } from './db-connection.service';
import { CartModule } from './cart/cart.module';
import { CartDetailsModule } from './cartDetails/cartDetails.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DBConnectionService
    }),
    CartModule,
    CartDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
