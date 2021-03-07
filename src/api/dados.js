const getDados = async (path, setDado) => {
    const response = await fetch(`http://localhost:5000${path}`);
    const dadosParseados = await response.json();

    if(response.ok) {
        setDado(dadosParseados);    
    }
    else {
        return 'Requisição falhou'
    }
};

export default getDados;