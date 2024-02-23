import React from 'react'
import storeItems from "../data/items.json"
import { useShoppingCart } from '../context/ShoppingCartContext'
import { Stack } from 'react-bootstrap'
import { formatCurrency } from "../utilities/formatCurrency"
type CartItemProps = {
    id:number
    quantity:number
}
export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.img} style={{width:"50px", height:"100px", objectFit:"contain"}}/>
            <div className='me-auto'>
                <div>
                    {item.name}{' '}
                </div>
            </div>
            <div>{formatCurrency(item.priceSmall * quantity)}</div>
        </Stack>
    )
}
