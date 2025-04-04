import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BodyComponent from './components/BodyComponent';
import HeaderComponent from "./components/HeaderComponent";
import { FooterComponent } from './components/FooterComponent';

function App() {
  return (
    <ChakraProvider >
      <Provider store={store}>

        <Router>
            <div className='App'>
                <HeaderComponent/>
                <Routes>
                  <Route path="/" element={<BodyComponent/>}/>
                </Routes>
                <FooterComponent/>
            </div>
        </Router>
      </Provider>
    </ChakraProvider>
);

}

export default App;
