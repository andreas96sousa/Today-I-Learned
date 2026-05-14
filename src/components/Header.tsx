interface headerProps{
    showForm: Boolean,
    onToggleForm: () => void
}

export default function Header(
    {showForm, onToggleForm} : headerProps
){





    return(
        <>
            <header>
                <h1>Hoje Eu Aprendi</h1>
                <button onClick={onToggleForm}>{
                    showForm ? 'Fechar' : 'Compartilhar um Fato'    
                }</button>
            </header>
        </>
    )
}