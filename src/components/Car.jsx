import Cars from "./Cars";

export default function Car({name, color, price}) {
    
    return(
        <li key={name}>{name} <i> {color}</i> <b>${price}</b></li>
    );

}