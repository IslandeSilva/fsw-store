import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({product}: CartItemProps) => {
    const {decreaseProductQuantity, increaseProductQuantity, removeProductsFromCart} = useContext(CartContext)
    
    const handleDecreaseProductQuantityClick = () => {
        decreaseProductQuantity(product.id);
    }
    const handleIncreaseProductQuantityClick = () => {
        increaseProductQuantity(product.id);
    }
    const handleRemoveProductQuantityClick = () => {
        removeProductsFromCart(product.id);
    }
        

    return ( 
<div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
        {/* Parte Esquerda {} FOTO E NOME*/}
        <div className="bg-accent flex items-center justify-center rounded-lg w-[77px] h-[77px]">
            <Image 
                src={product.imageUrls[0]}
                width={0}
                height={0}
                sizes="100vw"
                alt={product.name}
                className="w-auto h-auto max-w-[80%] max-h-[70%]"
            />
        </div>
        <div className="flex flex-col">
            <p className="text-xs">{product.name}</p>

            <div className="flex items-center gap-2">
               <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                {product.discountPercentage > 0 && (
                    <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                )}
            </div>

            <div className="flex items-center gap-1">
            <Button size="icon" 
            variant="outline" 
            className="w-8 h-8" 
            onClick={handleDecreaseProductQuantityClick}>
                    <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>
            <Button size="icon" 
            variant="outline" 
            className="w-8 h-8"
            onClick={handleIncreaseProductQuantityClick}>
                    <ArrowRightIcon size={16}/>
            </Button>
            </div>
        </div>

    </div>
    <div>
        <Button size="icon" variant="outline"
        onClick={handleRemoveProductQuantityClick}>
            <TrashIcon size={16}/>
        </Button>
    </div>
</div>

     );
}
 
export default CartItem;