import Cars from "./Cars";
import Food from "./Food";
import Countries from "./Countries";

export default function ConditionalRender() {
    const condition = "cars";
    
    if (condition === "cars") {
        return <Cars />;
    } else if (condition === "food") {
        return <Food />;
    } else if (condition === "countries") {
        return <Countries />;
    }
    
}