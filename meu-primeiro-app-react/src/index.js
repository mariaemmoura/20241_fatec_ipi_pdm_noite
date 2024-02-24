import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
    );


const App = () => {
    const estilosDoBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor:
    'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius:8}
    return (
        <div style = {{margin: 'auto', width: 768, backgroundColor: '#EEE', padding:
         12, borderRadius: 8}}>
            <label className ='rotulo' htmlFor="nome" style={{display: 'block', marginBottom: 4}}>Nome:</label>
            <input type = 'text' id = 'nome' style = {{paddingTop: 8, paddingBottom: 8, borderStyle:
            'hidden', width: '100%', borderRadius: 8, outline: 'none'}}/>
            <button style= {{estilosDoBotao}}>
                Enviar
            </button>

        </div>
    );
}
