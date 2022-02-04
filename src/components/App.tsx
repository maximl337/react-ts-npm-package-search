import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';


const App = () => {
  return <Provider store={store}>
    <h1>Search a repo</h1>
    <RepositoriesList />
  </Provider>
}

export default App;
