import CarInterface from "../interfaces/CarInterface"
import ImageInterface from "../interfaces/ImageInterface"
import Image from "./Image"


type CarsProps = {
    cars: CarInterface[];
}

const Cars: React.FunctionComponent<CarsProps> = ({cars}) => {
    return (
        <section className="cars">
            {
                cars.map(({manufacturer, model, price, description, image}) => {

                })
            }
        </section>
    )
}

export default Cars