import Title from './components/Title'
import newYear from './assets/NewYear.jpg'
import Contador from './components/Contador'
import './App.css'
import userCountDown from './hooks/userCountDown'

function App() {
  const [day, hour, minute, second] = userCountDown('Jan 1, 2024 00:00:00')
  return (
    <div className='App' style={{backgroundImage:`url(${newYear})`}}>
      <div className='container'>
        <Title title='Contagem Regressiva'/>
        <div className='contagem-regressiva'>
          <Contador title="Dias" number={day}/>
          <Contador title="Horas" number={hour}/>
          <Contador title="Minutos" number={minute}/>
          <Contador title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
