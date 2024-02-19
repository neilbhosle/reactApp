export default function Fruits() {
    const Fruits = [
        {name: "Apple", color: "Red", price: 100},
        {name: "Banana", color: "Yellow", price: 50},
        {name: "Orange", color: "Orange", price: 70},
        {name: "Grapes", color: "Green", price: 150},
        {name: "Mango", color: "Yellow", price: 200},
        {name: "Pineapple", color: "Yellow", price: 120},
    ];
    return(
        <div>
            <h1>Fruits</h1>
            <ul>
                {Fruits.map((Fruits)=>(
                    <li key={Fruits.name}>{Fruits.name} <i> {Fruits.color}</i> <b>${Fruits.price}</b></li>
                ))}
            </ul>
        </div>
    )
}