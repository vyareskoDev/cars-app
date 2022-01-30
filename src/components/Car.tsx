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
                <Card.Img variant="top" src={image.src} alt={image.alt}>
                    
                </Card.Img>
            </Card.Header>
            <Card.Body>
                {description}
            </Card.Body>
        </Card>
    )
}

export default Car