import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'

type ShoppingCartProps = {isOpen: boolean}

export function Cart({isOpen}: ShoppingCartProps) {
    const{closeCart, cartItems} = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack>
              {cartItems.map(item => (
                <CartItem key= {item.id} {...item} />))}
            
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
