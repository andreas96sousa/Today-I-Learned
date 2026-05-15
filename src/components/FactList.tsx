import FactItem from "./FactItem";
import type { Fact } from "../types";

interface FactListProps{
    facts: Fact[]
}

export default function FactList({facts}: FactListProps){
    if(facts.length == 0){
        <p>Nenhum fato para esta categoria ainda, crie o primeiro! ✌️</p> 
    }



    return(
        <>
           <ul>
             {
                facts.map(fact => {
                    return <FactItem key={fact.id} fact={fact} />
                })
            }
           </ul>
        </>
    )
}