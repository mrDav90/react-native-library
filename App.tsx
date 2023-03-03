import React  from "react";
import { Provider } from 'react-redux';
import { store } from './src/reducers/store';
import PreApp from './src/test_components/PreApp';

export default function App() {
  return (
      <Provider store={store} >
          <PreApp />
      </Provider>
  );
}

