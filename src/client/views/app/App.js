import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from '../../config/store';
import ConnectedIntlProvider from "../connectedIntlProvider/ConnectedIntlProvider";

const App = () =>(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedIntlProvider>
        <h1>teste</h1>
      </ConnectedIntlProvider>
    </PersistGate>
  </Provider>
)


export default App;