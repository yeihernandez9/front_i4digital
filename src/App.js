import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import CitaList from './components/citas/CitaList'

function App() {
  const store = generateStore()
  return (
    <Provider store={store}><CitaList></CitaList>
      </Provider>
  );
}

export default App;
