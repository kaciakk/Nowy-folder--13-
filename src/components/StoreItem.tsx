import { Card, Col, Row, Button, Dropdown } from "react-bootstrap"
import CardImg from 'react-bootstrap/CardImg'
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
type StoreItemProps = {
    id: number,
    name: string
    priceSmall: number
    priceMedium: number
    priceLarge: number
    ingredients: string
    img: string
}


export function StoreItem( { id, name, priceSmall,priceMedium, priceLarge, ingredients, img }: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()


    return <Card style={{ width: "520px", height: "200px" }}>
        <Row>
            <Col xs={4}>
            <CardImg   src={img} height="200px" style={{ objectFit: "cover" }}/>
            </Col>
            <Col>  
        <Card.Body >
            <Card.Title>
                <span className="text-danger">{id}. </span>
                <span>{name}</span>
            </Card.Title>
                
     <span className="fst-italic" style={{fontSize: '0.88em'}}>{ingredients}</span>

     <Row>
        <Col >
        <Button variant="outline-success">Modify</Button>{' '}
        <Button variant="outline-success" onClick={() => increaseCartQuantity(id)}>Add</Button>{' '}
        </Col>
        </Row>
     
        </Card.Body>
        </Col>
        </Row>
        
    </Card>
}
