"use client"

import { ProductWithTotalPrice } from "../../../../../helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps{
    product: ProductWithTotalPrice
}

const ProductInfo = ({
    product 
}: ProductInfoProps) => {

    const [quantity, setQuantity] = useState(1);

    const {addProductToCart} = useContext(CartContext)


    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => prev === 1 ? prev : prev -1)
    }

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1)
    }

    const handleAddToCartClick = () =>{
        addProductToCart({...product, quantity});
    }

    return ( 
        <div className="flex flex-col px-5 ">
            <h2 className="text-lg">{product.name}</h2>
            
            <div className="flex item-center gap-2">       
            <h1 className="text-xl font-bold">R$ {product.totalPrice.toFixed(2)}</h1>
            {product.discountPercentage > 0 && (
                <Badge className=" px-2 py-[2px]">
                <ArrowDownIcon size={14} /> {product.discountPercentage}%
                </Badge>   
            ) }
            </div>

            
            {product.discountPercentage > 0 && (
                <p className="text-sm opacity-75 line-through">
                    R$ {Number(product.basePrice).toFixed(2)}</p>
                )}

            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16} />
                </Button>
            <span>{quantity}</span>
            <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16}/>
                </Button>

            </div>

            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição</h3>
                <p className="opacity-60 text-justify" >{product.description}</p>
            </div>

            <Button className="mt-8 uppercase font-bold" onClick={handleAddToCartClick}>Adicionar ao carrinho</Button>

                <div className="bg-accent flex rounded-lg items-center px-5 py-2 justify-between mt-5">
                    <div className="flex item-center gap-2">
                        <TruckIcon />

                    <div className="flex flex-col">
                    <p className="text-xs">Entrega via  
                    <span className="bold"> FSPacket</span></p>

                    <p className="text-[#8162FF] text-xs">Envio para 
                    <span className="bold">todo o Brasil</span></p>

                    </div>
                    </div>
                    <p className="font-bold text-xs">Frete Grátis</p>
                </div>




        </div>
     );
}
 
export default ProductInfo;