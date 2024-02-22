import Cars from "./Cars";
import Food from "./Food";
import Countries from "./Countries";

export default function ConditionalRender() {

    return(
        <div>
            <Cars />
            <Food dish="Pav Bhaji" rating="5.1" />
            <Countries />
            
        </div>
    )
}