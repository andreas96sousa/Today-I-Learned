// function Button(props){

//   function clicar(){

//   }

//     return <button>{props.text}</button>
// }

// export default function App() {

//   return (
//     <>
//     <h1 id='principal'>
//       Hello World
//     </h1>
//     <Button text='Button 01' script='button1'/>
//     <Button text='Outro Button' script='button2'/>
//     </>
//   )
// }


// export default function App(){

//  const [counter, setCounter] = useState(0)



//  function count(){
//   setCounter(counter + 1)
//   console.log(counter)

//  }




//   return(
  //     <>  
//       <span>{counter}</span> <hr />
//       <button onClick={count}>Click</button>
//     </>
//   )
// }

// export default function App(){
// const aluno = {
//   id: 1,
//   nome: 'Andreas Sousa',
//   curso: 'Fullstack',
//   status: false
// }

// return (
//   // <>
//   //   {aluno.status && (
  //   //   `O aluno ${aluno.nome} está ${aluno.status}`)
//   //   }
//   // </>

//   // <>
//   //   {aluno.status ? 'Aluno Ativo' : 'Aluno Passivo'}  
//   // </>

//   <>

//   </>

// )
// }

function NewFact(props){
  return(
    <>  
      <p>{props.text}</p>
      <a href={props.source} target="_blank">Fonte</a>
    </>

  )
}


import { useState } from "react"
import type { Fact } from "./types"


export default function App(){
  const facts: Fact[] = [
    {
      id: 1,
      text: 'FATO 01',
      source: 'https://google.com/q=fato1',
      category: 'Tecnologia',
      votes_interesting: 1,
      votes_mindblowing: 2,
      votes_false: 3,
      create_at: '2026-05-07 19:30:05 GMT-3',
    },
    {
      id: 2,
      text: 'FATO 02',
      source: 'https://google.com/q=fato2',
      category: 'Tecnologia',
      votes_interesting: 3,
      votes_mindblowing: 2,
      votes_false: 1,
      create_at: '2026-05-06 13:32:35 GMT-3',
    }
  ]


  return(
    <>  
      {
        facts.map((fact) => {
          return(
            <NewFact 
              key= {fact.id}
              text= {fact.text}
              source= {fact.source}
            />
          )
          }
        )
      }  
    </>
  )
}