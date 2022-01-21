import ImageInterface from "./ImageInterface"

interface CarInterface {
    manufacturer: string;
    model: string;
    price: string;
    description: string;
    image: ImageInterface;
}

export default CarInterface