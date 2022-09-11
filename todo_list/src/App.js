import './App.css';
import TodoAdd from './Component/Todo_Add';
import TodoList from './Component/Todo_List';
import Footer from './Component/Footer';

function App() {
  return (

    <div className='app'>
      <header>Todo List</header>
      <div className='app-main'>
        <TodoAdd />
        <TodoList />
      </div>
      <Footer />
    </div>
  )
}

export default App;
