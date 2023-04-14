import { createContext } from 'react';
import './App.css';
import ChildA  from './components/ChildA';

const data_name = createContext();

function App() {
  const name = "Tauqeer"
  return (
    <>
    <data_name.Provider value={name}> 
    <ChildA></ChildA>
    </data_name.Provider>
    </>
  );
}

export default App;
export {data_name}; 