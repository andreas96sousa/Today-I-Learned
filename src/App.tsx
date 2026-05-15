import FactList from "./components/FactList"
import Header from "./components/Header"
import type { Fact } from "./types"
import { use, useState } from "react"

const INITIAL_FACTS: Fact[] = [
  {
    id: 1,
    text: 'React foi criado pelo facebook e lançado em maio de 2013',
    source: 'http://react.dev',
    category: 'tecnology',
    votes_interesting: 22,
    votes_mindblowing: 9,
    votes_false: 1,
    create_at: '2026-05-14T20:52:52Z'
  }, {
    id: 2,
    text: 'Participe do Google Developer Program para gerenciar seu fluxo de trabalho, acessar ferramentas e acompanhar todos os seus projetos em um único painel.',
    source: 'http://google.dev',
    category: 'news',
    votes_interesting: 15000,
    votes_mindblowing: 9000,
    votes_false: 153600,
    create_at: '2026-05-14T21:52:52Z'
  }, {
    id: 3,
    text: 'A maneira mais simples de compartilhar texto online é pelo dontpad',
    source: 'http://dontpad.com',
    category: 'science',
    votes_interesting: 220,
    votes_mindblowing: 900,
    votes_false: 0,
    create_at: '2026-05-14T22:52:52Z'
  },
]


export default function App() {
  const [facts, setFacts] = useState<Fact[]>(INITIAL_FACTS)
  const [currentCategory, setCurrentCategory] = useState<string>('all')
  const [showForm, setShowForm] = useState<boolean>(false)

  const displayedFact = currentCategory === 'all' 
  ? facts 
  : facts.filter(fact => fact.category === currentCategory)
  
  function handleToggleForm(){
    setShowForm(showForm => !showForm)
  }

  return (
    <>
      <Header 
      showForm={showForm}
      onToggleForm={handleToggleForm} 
      />
      {showForm && <p>Aqui conterá um formulário</p>}
      <main>
        <FactList 
        facts={displayedFact} 
        />
      </main>
    </>
  )
}