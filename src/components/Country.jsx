import Contries from "./Countries";

export default function Country({name, capital, population}){
    return(
        <li key= {name}> <b>{name}</b> <i>{capital}</i> <u>{population}</u>  </li>
    );
}