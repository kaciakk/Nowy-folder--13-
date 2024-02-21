import storeItems from "../data/items.json"
import { Col, Row} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { Cart } from "../components/Cart"
export function Menu() {
  return (
    <>
    <h1>Menu</h1>
    <Row xs={1} md={2} className="g-2" >
        {storeItems.map(item =>(
            <Col key={item.id} ><StoreItem {...item}/></Col>
        ))}
    </Row>
    </>
  )
}
