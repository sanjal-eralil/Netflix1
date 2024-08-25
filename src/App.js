
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions } from './urls'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals}title="Netflix Orginals"/>
      <RowPost url={actions} title="Actions" isSmall/>
    </div>
  );
}

export default App;
