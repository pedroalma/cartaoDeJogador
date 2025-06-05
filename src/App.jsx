import './App.css'
import Tudo from './views/tudo'
import f1 from './img/Neymar.png'
import f2 from './img/Joaquim.png'
import f3 from './img/Pituca.png'

function App() {
  return (
    <div>
    <div className='app'>
      <Tudo foto={f1} nome="Neymar" numero="10" posicao="atacante" time="Santos" habilidade="dribles, passes precisos e finalizações com ambas as pernas."/>
      <Tudo foto={f2} nome="Joaquim" numero="2" posicao="Zagueiro central" time="Santos" habilidade="rapidez de raciocínio e inteligência na armação das jogadas."/>
      <Tudo foto={f3} nome="Pituca" numero="21" posicao="Meio-campista" time="Santos" habilidade="rapidez de raciocínio e inteligência."/>
    </div>
    </div>
  )
}

export default App
