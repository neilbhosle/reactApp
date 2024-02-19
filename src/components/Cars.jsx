
import Car from "./Car";
export default function Cars() {
    const cars = [
        {name: "Audi", color: "Red", price: 100},
        {name: "BMW", color: "Black", price: 50},
        {name: "Chevrolet", color: "Blue", price: 70},
        {name: "Dodge", color: "Green", price: 150},
        {name: "Ferrari", color: "Yellow", price: 200},
        {name: "Honda", color: "White", price: 120},
    ];

    return(
        <div>
            <h1>Cars</h1>
            <ul>
                {cars.map((car) =>(
                <Car 
                    key={car.name}
                    name={car.name}
                    color={car.color}
                    price={car.price}
                 />
                ))}
            </ul>
        </div>
        

    );

}