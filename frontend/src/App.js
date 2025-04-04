import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FooterComponent } from './components/FooterComponent';
import BodyComponent from './components/BodyComponent';

function App() {
  return (
    <ChakraProvider >
      <Provider store={store}>

        <Router>
            <div className='App'>
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
