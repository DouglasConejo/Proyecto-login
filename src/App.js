import logo from './logo.svg';
import './App.css';


//Imports para generar la ruta para ejecutar la aplicacion y que se ejecute el login que creamos
/**Ademas esta caracteristica la tenemos que agregar al proyecto enuna terminal, ya que no nos va a reconocer ninguna
 * 
 * Lo cual instalamos npm install react-router-dom
 * 
 *  /**El BrowserRouter nos ayudar a llamar la ruta del login */
   
import {BrowserRouter,Routes, Route} from 'react-router-dom'

//Importamos el login de la linea 23
import {Login}from './nuevos-componentes/Login'

function App() {
  return (
    <div className="App">
   
  
   <BrowserRouter>
   
   <Routes>

    <Route excact path ="/" element={<Login/>}>

    </Route>

   </Routes>
   
   </BrowserRouter>

    </div>
  );
}

export default App;
