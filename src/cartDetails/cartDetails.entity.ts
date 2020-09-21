import { BaseEntity } from "src/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('cart_details')
export class CartDetailsEntity extends BaseEntity{
    @Column()
    cart_id:number;

    @Column()
    product:string;
    
    @Column("decimal", { precision: 5, scale: 2 })
    price:number;
    
    @Column()
    qnt:number;
    
    // @ManyToOne(
    //     ()=>CartEntity,
    //     (cart:CartEntity)=> cart.id,
    //     {onDelete:'CASCADE'}
    // )
    // cart:CartEntity;
}

