import { createContext } from 'react';
import './App.css';
import ChildA  from './components/ChildA';

const data_name = createContext();
const data_age = createContext();
function App() {
  const name = "Tauqeer"
  const age = 22
  return (
    <>
    <data_name.Provider value={name}> 
    <data_age.Provider value={age}> 
    <ChildA></ChildA>
    </data_age.Provider>
    </data_name.Provider>
    </>
  );
}

export default App;
export {data_name, data_age}; 