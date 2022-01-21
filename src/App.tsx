import React, {useState} from 'react';
import ImageInterface from './interfaces/ImageInterface';
import Cars from './components/Cars';
import './App.css';
import CarInterface from './interfaces/CarInterface';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cars, setCars] = useState<CarInterface[]>([
    {
      model: "Q5",
      manufacturer: "Audi",
      price: "500.000$",
      description: "This is cool Audi car",
      image: {src: "https://www.vwdrive.com.ua/wp-content/uploads/2020/09/audi-q5-sportback.jpg", width: 1000, height: 500, alt: "Audi Q5"} as ImageInterface
    },
    {
      model: "Cybertruck",
      manufacturer: "Tesla",
      price: "69.000$",
      description: "This is cool Tesla car",
      image: {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tesla_Cybertruck_outside_unveil_modified_by_Smnt.jpg/1200px-Tesla_Cybertruck_outside_unveil_modified_by_Smnt.jpg", width: 1000, height: 500, alt: "Tesla C"} as ImageInterface
    },
    {
      model: "Arteon",
      manufacturer: "Volkswagen",
      price: "50.000$",
      description: "This is cool Volkswagen car",
      image: {src: "https://cdn.motor1.com/images/mgl/RWK9e/s3/2020-vw-arteon-r-line-edition.jpg", width: 1000, height: 500, alt: "Audi Q5"} as ImageInterface
    }
  ])
  return (
    <div className="App">
      <Cars cars={cars} />
    </div>
  );
}

export default App;
