import Country from "./Country";

export default function Contries(){
    const countries = [
        {name: "India", capital: "New Delhi", population: 1300000000},
        {name: "USA", capital: "Washington DC", population: 328000000},
        {name: "UK", capital: "London", population: 66000000},
        {name: "Australia", capital: "Canberra", population: 25000000},
        {name: "Canada", capital: "Ottawa", population: 37000000},
        {name: "Japan", capital: "Tokyo", population: 126000000},
    ];
    
    return(
        <div>
            <h1> Countries</h1>
            <ul>
                {countries.map((country)=>
                    <Country 
                        key={country.name}
                        name={country.name}
                        capital={country.capital}
                        population={country.population}
                    />
                )}
            </ul>
        </div>
    )
}