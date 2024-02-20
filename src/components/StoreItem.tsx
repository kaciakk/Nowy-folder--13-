import { Card, Col, Row, Button, Dropdown } from "react-bootstrap"
import CardImg from 'react-bootstrap/CardImg'
import { formatCurrency } from "../utilities/formatCurrency"
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
    return <Card style={{ width: "550px", height: "200px" }}>
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
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Pizza Size
                    </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Small: {formatCurrency(priceSmall)}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Medium: {formatCurrency(priceMedium)}</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Large: {formatCurrency(priceLarge)}</Dropdown.Item>
         </Dropdown.Menu>
     </Dropdown>  
     <span className="fst-italic" style={{fontSize: '0.88em'}}>{ingredients}</span>
        </Card.Body>
        <Button variant="outline-success">Success</Button>{' '}
        </Col>
        </Row>
        
    </Card>
}
