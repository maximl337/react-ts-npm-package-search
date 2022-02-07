import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';


const App = () => {
  return <Provider store={store}>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 offset-md-4 mt-5'>
          <h1 className='page-title'>Search npm registry</h1>
          <RepositoriesList />
        </div>
      </div>
    </div>
  </Provider>
}

export default App;
