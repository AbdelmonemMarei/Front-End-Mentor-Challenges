import React,{createContext} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Product from './components/Product/Product';
import Modal from './components/Modal/Modal';
import useProvider from './components/Provider/useProvider';


export const StateContext = createContext()

function App() {
  const provider = useProvider()
  return (
      <div className='App'>
        <StateContext.Provider value={provider}>
          <Sidebar/>
          <Navbar/>
          <Product/>
          <Modal/>
        </StateContext.Provider>
      </div>
    
  );
}

export default App;
