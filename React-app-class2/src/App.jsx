
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from "./TodoList";
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
function App() {

  return (
    <>
      {/* <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[2,5,3,4,6,7,8]} /> */}


      <Lottery n={3} winningSum={15}/>
      {/* <TodoList /> */}
      {/* <LudoBoard /> */}
    </>
  )
}

export default App
