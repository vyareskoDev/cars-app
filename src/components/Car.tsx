import CarInterface from "../interfaces/CarInterface"
import { Card } from "react-bootstrap"

const Car: React.FunctionComponent<CarInterface> = ({manufacturer, price, model, description, image}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <span>{manufacturer} {model}</span>
                    <span>{price}</span>
                </Card.Title>
                <Card.Img></Card.Img>
                
            </Card.Header>
            <Card.Body>
                
                {description}
            </Card.Body>
        </Card>
    )
}

export default Car