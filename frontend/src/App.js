import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store'
import { Provider } from 'react-redux';

function App() {


  return (
    <ChakraProvider >
      <Provider store={store}>
        <div className='App'>

        </div>
      </Provider>
    </ChakraProvider>
  );



}

export default App;
