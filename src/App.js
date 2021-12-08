import './App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount  from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
    <NavBar/> 
    <ItemListContainer/>
    {/* <ItemCount stock={2}/>
    <ItemCount stock={6}/>
    <ItemCount stock={10}/> */}
    </>
  );
}

export default App;
