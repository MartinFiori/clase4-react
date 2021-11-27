import './App.css';

// Components
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount  from './components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <>
    <NavBar/> 
    <ItemListContainer/>
    <ItemCount stock={2}/>
    <ItemCount stock={6}/>
    <ItemCount stock={10}/>
    </>
  );
}

export default App;
