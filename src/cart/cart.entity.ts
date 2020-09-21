import { BaseEntity } from "src/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('cart')
export class CartEntity extends BaseEntity{
    @Column() 
    user_id:number;

}

